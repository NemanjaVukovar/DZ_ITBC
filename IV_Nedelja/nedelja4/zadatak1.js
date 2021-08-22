"use strict"

//1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.

function insert_Row() {
    let x = document.getElementById('sampleTable').insertRow(0);
    let y = x.insertCell(0);
    let z = x.insertCell(1);
    y.innerHTML = "JS in action";
    z.innerHTML = "JS in action";

}

