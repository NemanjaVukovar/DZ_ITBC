'use strict'
/*
1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan).
Drvo svaki dan poraste za 1 cm.

Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima),
izracunati koliko je dana potrebno puzu da se popne na drvo
pomocu WHILE petlje.

Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :

Dan 1: Puz je presao 3cm, visina drveta 100cm
Dan 2: Puz je presao 6cm, visina drveta 101cm
...

Na kraju treba da se ispise poruka na primer:

Puz se popeo na drvo za 8 dana

Smatrati da drvo svakog dana raste fiksno 1cm.*/

let treeHeight = 100; // Tree height, default value is 100 cm 
let snailPath = 0; // Snail path 
const speedSnail = 3; // Snail speed 3 cm per day
let day = 0;
while (snailPath < treeHeight) {
    day++; // Day increases per iteration
    treeHeight++; // Tree height increases for 1 cm per iteration (day)
    snailPath += speedSnail; // Snail's path increases for 3 cm per iteration
    console.log(`Zadatak 1 : Dan ${day}: Puz je presao ${snailPath} cm, visina drveta ${treeHeight}. `);
}

console.log(`Zadatak 1 : Puz se popeo na drvo za samo ${day} dana i zato je proglasen za najbrzeg u basti :)`);

console.log("\n_____________________________________________________________________\n\n")
/*2. Treba izracunati poptust U DINARIMA koji ostvaruje kupac.

Pravila za ostvarivanje popusta su sledeca:

Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
Svi ostali ne ostaruju nikakav popust.

Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:

Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara
*/

// Customer consts
const employee = 0;
const student = 1;
const senior = 2;
const enterprise = 3;
// Discount consts
const employeeDis = 5 / 100;
const studentDis = 20 / 100;
const seniorDis = 30 / 100;
const enterpriseDis = 10 / 100;
const weekendDis = 5 / 100;
// Customer minSum
const employeeMinSum = 5000;
const studentMinSum = 3000;
const seniorMinSum = 2000;
const enterpriseMinSum = 10000;

// Variables for testing
let shopDay = 7; // Add discount of 5% on weekend (saturday - 6, sunday - 7)
let customer = 1; // Customer options
let moneySum = 5000; // Bill

let moneySumDis; // Discounted sum
let moneyDis; // Discount in curency / cash
let moneyDisWeekend; // Discount in curency / cash on weekends only


switch (customer) {
    case employee: {
        if (moneySum > employeeMinSum) {
            moneyDis = moneySum * employeeDis;
            moneySumDis = moneySum - moneyDis;
            console.log(`Zadatak 2 : Ostvaren je popust od ${moneyDis} dinara za zaposlena lica. Trenutna cena iznosi ${moneySumDis}`);
        } else {
            console.log(`Zadatak 2 : Ne ostvaruje popust.`);
        }
    }
        break;
    case student: {
        if (moneySum > studentMinSum) {
            moneyDis = moneySum * studentDis;
            moneySumDis = moneySum - moneyDis;
            console.log(`Zadatak 2 : Ostvaren je popust od ${moneyDis} dinara za studente. Trenutna cena iznosi ${moneySumDis}`);
        } else {
            console.log(` Zadatak 2 : Ne ostvaruje popust.`);
        }
    }
        break;
    case senior: {
        if (moneySum > seniorMinSum) {
            moneyDis = moneySum * seniorDis;
            moneySumDis = moneySum - moneyDis;
            console.log(`Zadatak 2 : Ostvaren je popust od ${moneyDis} dinara za penzionere. Trenutna cena iznosi ${moneySumDis}`);
        } else {
            console.log(`Zadatak 2 : Ne ostvaruje popust.`);
        }
    }
        break;
    case enterprise: {
        if (moneySum > enterpriseMinSum) {
            moneyDis = moneySum * enterpriseDis;
            moneySumDis = moneySum - moneyDis;
            console.log(`Zadatak 2 : Ostvaren je popust od ${moneyDis} dinara za preduzeca. Trenutna cena iznosi ${moneySumDis}`);
        } else {
            console.log(`Zadatak 2 : Ne ostvaruje popust.`);
        }
    }
        break;
    default: {
        console.log(`Zadatak 2 : Lice ne ostvaruje pravo na popust.`);
    }
        break;
}

if (shopDay == 6 || shopDay == 7) {
    moneyDisWeekend = moneySumDis * weekendDis
    moneySumDis += moneyDisWeekend
    console.log(`Zadatak 2 : Lice ostvaruje dodatni vikend popust od ${moneyDisWeekend} dinara. Ukupan popust iznosi ${moneyDis + moneyDisWeekend} dinara, a preostali iznos za uplatu glasi ${moneySum - (moneyDis + moneyDisWeekend)} dinara.`);
} else {
    console.log(`Zadatak 2 : Nema vikend popusta.`)
};

