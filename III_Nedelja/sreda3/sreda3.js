'use strict'
/*1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
 Ispis: "12345678987654321"*/

function najduziPalindrom(string) {
    let n = stringNew.length;
    let maxLength = 1, start = 0;

    // Ugnezdjena petlja za pocetnu i zadnju poziciju elementa
    for (let i = 0; i < stringNew.length; i++) {
        for (let j = i; j < stringNew.length; j++) {
            let flag = 1;

            // Provrea palindroma
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (stringNew[i + k] != stringNew[j - k])
                    flag = 0;

            // Palindrom
            if (flag && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
    console.log("Najduzi palindrom je: " + stringNew.substr(start, maxLength))

    console.log("start: " + start);
    console.log("start: " + maxLength);
}

let stringNew = "cirkusmaximus25252anavolimilovanacirkus";

najduziPalindrom(stringNew)
console.log(`Zadatak 1:----------------------------------------------`)

/////////////////////////////////////////////////////////////////////////////////
//2. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u 

function sumMult(array) {
    let sum = 0;
    let mult = 1;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        mult *= array[i];
    };
    let sumMult1 = { sum, mult };

    return sumMult1;
}

let array1 = [1, 2, 3, 4];

let newCont = sumMult(array1);

console.log(newCont);
console.log('Zadatak 2:------------------------------------------------------')

////////////////////////////////////////////////////////////////////////////////////
// 3. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...

function takeOut(array2) {

    let cleanArray = [];
    let count = 0;


    for (let i = 0; i < array2.length; i++) {
        if (array2[i] !== null && typeof array2[i] == 'number') {
            cleanArray[count] = array2[i];
            count++;
        }
    }

    return cleanArray;
};

let array = [5, 7, 'K', null, 2, "", 3, undefined, 7, 'Ty', 4, 'Ms', 6, 9, "S"];
console.log(takeOut(array))
console.log('Zadatak 3:----------------------------------------------------')

///////////////////////////////////////////////////////////////////

/*4. За првих 100 бројева исписати:
    ако је дељив са 3  Fizz, са 5  Buzz, 7 Zazz и са оба  FizzBuzz, у супротном Broj
    * Ако је дељив са 3, 5, 7 - FizzBuzzZazz
        * 3, 5 - FizzBuzz
        * 3, 7 - FizzZazz
        * 5, 7 - */

let strOutput = '';
let numOutput = '';
for (let i = 1; i < 100; i++) {

    strOutput = '';
    numOutput = '';

    if (i % 3 == 0) {
        strOutput = 'Fizz'
        numOutput = '3 '
    }
    if (i % 5 == 0) {
        strOutput += 'Buzz'
        numOutput += '5 '
    }
    if (i % 7 == 0) {
        strOutput += 'Zazz'
        numOutput += '7'
    }

    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
        console.log(i + ': ', numOutput, ' - ' + strOutput);
    }
}
console.log(`Zadatak 4:-----------------------------------------------------`)

/*
 5. Izvrsiti inverziju brojeva bez pomocne promenljive.
* Pr: x = 5 y = 9
    * Resenje: x = 9 y = 5
        * pom = "ne mozete koristiti"*/

function inverzijaBroj(x, y) {

    y = y + x
    x = y - x
    y = y - x

    return { x, y }
}

let brojevi = inverzijaBroj(55, 44);

console.log(`Zadatak 5:-------------------------------------------------`)
console.log(brojevi)



