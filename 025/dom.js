function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('Welcome to DOM!')

window.addEventListener('load', _ => {

const div1 = document.querySelector('div');
const div2 = document.querySelector('.ate');

console.log(div1, div2);


const h2 = document.querySelector('h2 + h2');

console.log(h2);

const iTag = document.querySelector('span i + i')

console.log(iTag);



let textInside = iTag.innerText;

console.log(textInside);

textInside += '-------*';

iTag.innerText = textInside;


// Paselektink mane tekstą h2 tage pakeisti į tekstą "pakeistas"

h2.innerText = 'pakeistas';


// Į pirmą h3 tagą įrašyti "Vienas" į antrą - "Du"

const h3 = document.querySelector('h3')

h3.innerText = 'Vienas';

console.log(h3);

const h3Tag = document.querySelector('h3 + h3');

h3Tag.innerText = 'Du';

console.log(h3Tag);



const valio = document.querySelector('.valio');

console.log(valio.innerHTML);

valio.innerHTML = '<b>888</b>';



// Į ul tagą pridėti li tagą su tekstu "Pirmasis"

const ulTag = document.querySelector('ul');

ulTag.innerHTML = '<li>Pirmasis</li>';

console.log(ulTag);



// Į tagą ol pridėti du li tagus - vienas su "Zuikis", kitas su "Katinas"


const olTag = document.querySelector('ol');

olTag.innerHTML = `
      <li>Zuikis</li>
      <li>Katinas</li>
`;

console.log(olTag);


// 10 li taginiu zuikiu

const big = document.querySelector('.big');

let z = '';

for (let i = 0; i < 10; i++) {
    z += '<li>Zuikis</li>';
}

big.innerHTML = z;



// Į tagą su klase "random" pridėti 10 li elementų su atsitiktiniais skaičiais nuo 10 iki 99

const random = document.querySelector('.random');

let r = '';

for (let i = 0; i < 10; i++) {
    r += '<li>' + rand(10, 99) + '</li>';
}

random.innerHTML = r;

});