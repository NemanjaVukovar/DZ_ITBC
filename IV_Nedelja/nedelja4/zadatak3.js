"use strict"

//3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.

function addTwoNumbers(textBox1, textBox2) {
    let x = document.getElementById(textBox1).value;
    let y = document.getElementById(textBox2).value;
    let sum = 0;
    sum = Number(x) + Number(y);
    alert("SUM is: " + sum);

}

function showCalculator() {
    //console.log("Poziv f je")
    let divCalc = document.getElementById("divCalc")
    let checkbox = document.getElementById("myCheckB")
    let img = document.getElementById("imgCalc")

    if (checkbox.checked) {
        //console.log("checked")
        img.style.display = "block";
        divCalc.style.display = "block"
    } else {
        //console.log("not checked")
        img.style.display = "none";
        divCalc.style.display = "none"
    }
}

/*
function checkB() {
    let myDiv = document.getElementById("myDiv");

    // creating checkbox element
    let checkbox = document.createElement('input');

    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "idCheckbox";

    // creating label for checkbox
    let label = document.createElement('label');

    // assigning attributes for
    // the created label tag
    label.htmlFor = "idCheckbox";

    // appending the created text to
    // the created label tag
    let textLabel = document.createTextNode('Show/hide calculator')
    label.appendChild(textLabel);

    // appending the checkbox
    // and label to div
    myDiv.appendChild(checkbox);
    myDiv.appendChild(label);
}*/