/*1. Na osnovu kolicine i cene artikla ispisati ukupnu cenu
Kolicina je zadata u gramima
cena je zadata po kilogramu

2. Dopuniti 4. zadatak sa casa kolicinom novca, i ispisati racun (ako nema dovoljno novca ispisati poruku)*/


let novac = 540; // din
let cenaKg = 300; // kg
let kolicina = 578; // gr
let racun = cenaKg * (kolicina / 1000);

if (novac >= racun) {
    console.log(`Zadatak 1: Račun iznosi ${racun}`)
} else {
    console.log(`Zadatak 1 : Nema dovoljno novca!!!`)
};

/*Data su 4 stringa.
let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti"
1. Proveriti koji je string najduzi i ispisati samo njega

2. Ispisati najkraci string koji sadrzi rec "string"

3. sastaviti sve stringove bez prve reci "neki" osim ako string sadrzi deo recenice "string koji je", takve stringove*/

let string1 = "neki prvi string";
let string2 = "neki drugi string koji je i duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki cetvrti";
let maxString


if (string1.length > string2.length && string1.length > string3.length && string1.length > string4.length) {
    maxString = string1

} else if
    (string2.length > string3.length && string2.length > string4.length) {
    maxString = string2

} else if (string3.length > string4.length) {
    maxString = string3

} else {
    maxString = string4
};

console.log(`Zadatak 2-1: ${maxString}`);


//console.log(`Prvi string ima ${string1.length}, drugi string ima ${string2.length}, treći string ima ${string3.length} i poslednji četvrti ${string4.length} karaktera.     `);

//console.log(`Najduži string je string2 i ima ${string2.length} karaktera`);
let strString
if (string1.includes('string') || string1.length < string3.length || string1.length < string4.length) {
    strString = string1
} else if (string3.includes('string') || string3.length < string4.length) {
    strString = string3
} else if (string4.includes('string')) {
    strString = string4
} else {
    console.log(`Nema stringa.`)
}

console.log(`Zadatak 2-2: ${strString}`)


/* ## Moje shvatanje zadatka je da treba da spajamo sve stringove bez prve reči neki, a da ne spajamo one stringove koji sadrže datu reč "string koji je" */
let newString
let nekiString = 'neki' + ' '
if (!string1.includes('string koji je') && string1.includes('neki')) {
    newString = string1.substr(nekiString.length, string1.length - 1) + ' '
}

if (!string2.includes('string koji je') && string2.includes('neki')) {
    newString += string2.substr(nekiString.length, string2.length - 1) + ' '
}
if (!string3.includes('string koji je') && string3.includes('neki')) {
    newString += string3.substr(nekiString.length, string3.length - 1) + ' '
}
if (!string4.includes('string koji je') && string4.includes('neki')) {
    newString += string4.substr(nekiString.length, string4.length - 1)
}

console.log('Zadatak 2-3: ' + newString)