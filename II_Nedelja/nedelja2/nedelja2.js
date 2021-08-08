'use strict'
// Naparviti dijamantski oblik pomocu zvezdica (diamond star pattern)

let d = 9
let v = (d + 1) / 2
let red = ''
//Upper triangle including middle row
for (let j = v - 1, k = 0; j >= 0; j--, k++) {
    for (let i = 0; i < j; i++) {
        red += ' '
    }
    red += '*'.repeat((k * 2) + 1) + '\n';
}
//Lower triangle below middle row
for (let k = (v - 1) - 1, j = 1; k >= 0; k--, j++) {
    for (let i = 0; i < j; i++) {
        red += ' ';
    }
    red += '*'.repeat((k * 2) + 1) + '\n';
}
console.log(red)

