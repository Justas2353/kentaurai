console.log('Have fun with functons!');


function gabalas() {
    console.log ('--------------------');
}

function gabalas2() {
    console.log ('----------||----------');
}


console.log('START');

gabalas();

console.log('STEP 1');

gabalas2();

console.log('STEP 2');

gabalas();

console.log('END');

console.clear();

// 1. Sukurti funkciją blueDash, kuri atspausdina 10 mėlynų brūkšnelių. Tą funkciją iškviesti 10 kartų.
console.log('----------1UZD----------')



function blueDash() {
        console.log('%c----------', 'color: blue; font-size: 20px');
}

for (let i = 0; i < 10; i++) {
    blueDash();
}

console.clear();



function sum(a, b) {        // a ir b yra funkcijos parametrai
    const rez = a + b;
    console.log(rez);
}


sum(4, 5);       // 4 ir 5 yra funkcijos argumentai

sum(8, 7);




//2. Parašyti funkciją, kuri gauna skaičių ir atrspausdina to skaičiaus sandauga su 6.
console.log('---------2UZD----------')


function sandauga6(x) {
    console.log(x * 6);
}

sandauga6(10);
sandauga6(20);


console.clear();


function sandauga(x, y = 6) {
    const rez = x * y;
    console.log(rez);
}

sandauga(4, 5);  // 20
sandauga(5); // 30


function dalyba(x = 5, y = 10) {
    const rez = x / y;
    console.log(rez);
}

dalyba(100, 25); // 4
dalyba(100);  // 10


console.clear();




function megaSum(...all) {
    rez = 0;
    for (let i = 0; i < all.length; i++) {
        rez += all[i];
    }
    console.log(rez);
}


megaSum(10, 10, 10 , 10, 10);


function lastLetter(word) {
    const size = word.length;
    const last = word[size - 1];
    console.log(last);
}

lastLetter('Labas')
lastLetter('Habibi')

console.clear();





function twoWordsWithDash(w1, w2) {
    console.log(w1 + '-' + w2);
}

twoWordsWithDash('Labas', 'Zdarova');
twoWordsWithDash('Zdarova');

console.clear();





function returnSum(a, b) {
    const rez = a + b;
    return rez;
}

const s1 = returnSum(8, 5);
console.log(s1)


// 3. Parašyti funkciją, kuri gauna skaičių ir grąžina to skaičiaus kvadratą

function kvadratu(x) {
    const rez = x * x;
    return rez;
}

const k1 = kvadratu(4);

console.log(k1);



function wt() {
    return 'labas';
    console.log('nebus atspausdintas');
}

const w = wt();

console.log(w);

console.clear();



function wordIsLongerThan5Letters(word) {
    if (word.length > 5) {
        return true;
    }
    return false;
}

console.log('As', wordIsLongerThan5Letters('As'));

console.log('einu', wordIsLongerThan5Letters('einu'));

console.log('grybauti', wordIsLongerThan5Letters('grybauti'));



function multiAndSum(a, b) {
    const rezMulti = a * b;
    const rezSum = a + b;
    const rez = [rezMulti, rezSum];
    return rez;
}

const [a, b] = multiAndSum(4, 5);

console.log(a, b);

console.clear();





function mult10(a) {    // funkcija
    return a * 10;
}

function mult10(a) {    // funkcija
    return a * 30;
}

const mult10f = function(a) {   // anonimine funkcija
    return a * 10;
}

// const mult10a = (a) => {
//     return a * 10;
// }

 const mult10a = (a) => a * 11;


// const mult10a = a => a * 10; // arrow funkcija



console.log(mult10f);

console.log(mult10(4));

console.log(mult10f(4), typeof mult10f);

console.log(mult10f(4), typeof mult10a);
