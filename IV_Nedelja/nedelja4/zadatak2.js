"use strict"

//2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.

function addTwoNumbers(textBox1, textBox2) {
    let x = document.getElementById(textBox1).value;
    let y = document.getElementById(textBox2).value;
    let sum = 0;
    sum = Number(x) + Number(y);
    alert("SUM is: " + sum);

}

