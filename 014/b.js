console.log('Labas, mano mylimi uzdaviniai!');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 10; i++) {

    let random = rand(0, 7);

    console.log('metimas:', i, 'rezultatas:', random);

    if (random == 2) {
        break;
    }
}

