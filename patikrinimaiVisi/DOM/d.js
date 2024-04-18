function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('TESTAS 4 DOMAS')



window.addEventListener('load', _ => {

// UZDUOTIS 1

const h21 = document.querySelector('h2');
const h22 = document.querySelector('h2 + h2');
const b1 = document.querySelector('.u1')

b1.addEventListener('click', _ => {

    const r1 = rand(1, 6);
    const r2 = rand(1, 6);

    if (r1 == r2) {
        h21.style.color
    }

})

});