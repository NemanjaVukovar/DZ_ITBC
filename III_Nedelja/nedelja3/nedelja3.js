'use strict'
//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5

function printElDiv5(array) {

    let newAr5 = [];
    let count = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 5 == 0) {
            newAr5[count] = array[i];
            count++
        };

    }
    // console.dir(newAr5, { 'maxArrayLength': null })
    console.log(`Zadatak 1:`)
    console.log(newAr5)
};


let array2 = [];

for (let i = 0; i < 130; i++) {
    array2[i] = i;
}
printElDiv5(array2);


///////////////////////////////////////////////////////////////////
//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime 
// * Vrsta 
// * Sposobnosti (niz sposobnosti pokemona) 
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)

let pok1 = {
    ime: 'Bulbasaur',
    vrsta: 'elementarni',
    sposobnosti: 'bujanje',
    karakteristike: {
        napad: 27,
        odbrana: 20,
        brzina: 15
    }
};

let pok2 = {
    ime: 'Charmander',
    vrsta: 'vatreni',
    sposobnosti: 'bljesak',
    karakteristike: {
        napad: 18,
        odbrana: 12,
        brzina: 35
    }

};

let pok3 = {
    ime: 'Blastoise',
    vrsta: 'vodeni',
    sposobnosti: 'bujica',
    karakteristike: {
        napad: 19,
        odbrana: 24,
        brzina: 22
    }

};

let pok4 = {
    ime: 'Pikachu',
    vrsta: 'elektricni',
    sposobnosti: 'elektro - magnetna sila',
    karakteristike: {
        napad: 38,
        odbrana: 51,
        brzina: 17
    }

};

let arrayPok = [pok1, pok2, pok3, pok4]


console.log(`\nZadatak 2:`)
console.log(arrayPok)
//console.log(arrayPok.length)


////////////////////////////////////////////////////////////////////
//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona


function pokSposobnost(newArray) {

    let nizSposobnosti = [];
    let counter = 0;

    for (let i = 0; i < newArray.length; i++) {
        nizSposobnosti[counter] = newArray[i].sposobnosti
        counter++
    }
    return nizSposobnosti;

}

console.log(`\nZadatak 3:`)
console.log('\nNiz sposobnosti pokemona:')
console.log(pokSposobnost(arrayPok))


////////////////////////////////////////////////////////////////
//4. Sortirati pokemone po brzini, rastuće.

function pokBrzina(newArray1) {

    console.log(newArray1)
    console.log(newArray1.length)

    newArray1.sort((a, b) => {
        console.log(a, b)
        return a - b;
    })


    return newArray1;

}

arrayPok = [pok1.karakteristike.brzina, pok2.karakteristike.brzina, pok3.karakteristike.brzina, pok4.karakteristike.brzina]

console.log(`\nZadatak 4:`)
console.log(pokBrzina(arrayPok))


//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.

function nizPokemon(arrayPok) {

    let maxPok = arrayPok[0];

    for (let i = 1; i < arrayPok.length; i++) {

        if (maxPok.karakteristike.napad < arrayPok[i].karakteristike.napad) {
            maxPok = arrayPok[i];
        }

    }
    return maxPok
};

console.log(`\nZadatak 5:`)
arrayPok = [pok1, pok2, pok3, pok4]
console.log(nizPokemon(arrayPok))