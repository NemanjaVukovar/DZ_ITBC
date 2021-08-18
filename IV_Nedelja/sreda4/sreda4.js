'use strict'

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

let pokIme = [pok1.ime, pok2.ime, pok3.ime, pok4.ime]
let pokKarakteristike = [pok1.karakteristike, pok2.karakteristike, pok3.karakteristike, pok4.karakteristike]

let toggled = false;
function toggle() {
    if (toggled) {
        toggled = false;
        document.getElementById("p2").style.display = "none";
        return;
    }
    if (!toggled) {
        toggled = true;
        document.getElementById("p2").style.display = "block";
        return;
    }
}

let toggled2 = false;
function toggle2() {
    if (toggled2) {
        toggled2 = false;
        document.getElementById("p3").style.display = "none";
        return;
    }
    if (!toggled2) {
        toggled2 = true;
        document.getElementById("p3").style.display = "block";
        return;
    }
}

let divWrapp = document.createElement('div')
divWrapp.classList.add('wrapper')

let div1 = document.createElement('div')
div1.classList.add('section')

let p1 = document.createElement('p')
p1.textContent = 'POKEMONI'


div1.appendChild(p1)

let div2 = document.createElement('div')
//div2.classList.add('section', 'main')

let p2 = document.createElement('p')
p2.textContent = pokIme.toString().split(',').join(' ')
p2.id = 'p2'
p2.style.display = "none";

let btnKlik = document.createElement('button')
btnKlik.id = 'btnKlik'
btnKlik.textContent = 'Prikazi Pokemone'
btnKlik.addEventListener('click', () => {
    toggle()
})

div2.append(p2, btnKlik)

let div3 = document.createElement('div')
let lista = document.createElement('ol')

let p3 = document.createElement('p')
for (let i = 0; i < pokKarakteristike.length; i++) {
    let item = document.createElement('li')
    item.textContent += ' Napad:' + pokKarakteristike[i].napad
    item.textContent += ' Odbrana: ' + pokKarakteristike[i].odbrana
    item.textContent += ' Brzina: ' + pokKarakteristike[i].brzina
    item.id = i + ''
    lista.appendChild(item)
}
p3.append(lista)
p3.id = 'p3'
p3.style.display = "none";

let btnKlik2 = document.createElement('button')
btnKlik2.id = 'btnKlik2'
btnKlik2.textContent = 'Karakteristike'
btnKlik2.addEventListener('click', () => {
    toggle2()
})
div3.append(p3, btnKlik2)


divWrapp.append(div1, div2, div3)
document.body.append(divWrapp)



