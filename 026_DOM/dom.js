function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Welcome to DOM II !!')

window.addEventListener('load', _ => {


// Sukurti H1 tagą su užrašu "DOM 2
    // const body = document.querySelector('body');

    // body.innerHTML = '<h1>DOM 2</h1>'





// Sukurti H1 tagą su užrašu "DOM 2" arba tagą H2 su užrašu "Sub DOM 2, atsitiktinai su tikimybe 50/50

    // let kaRodyti;

    // if(rand(0, 1) == 0) {
    //     kaRodyti = '<h1>DOM 2</h1>';
    // } else {
    //     kaRodyti = '<h2>Sub DOM 2</h2>'
    // }

    // body.innerHTML = kaRodyti            //(vienos eilutes variantas su terneriu) body.innerHTML = rand(0, 1) ? '<h1>DOM 2</h1>' : '<h2>Sub DOM 2</h2>'





// Į sugeneruoto tago vidų įdėkite <span> tagą su užrašu "Vlio!"

    // if (document.querySelector('h1')) {
    //     document.querySelector('h1').innerHTML = '<span>Valio!</span>';
    // }
    // if (document.querySelector('h2')) {
    //     document.querySelector('h2').innerHTML = '<span>Valio!</span>';
    // }

// UZDAVINIU PABAIGA !!!!



    const animals = document.querySelectorAll('.animals span');

    // console.log(animals);

    animals.forEach(a => console.log(a.innerText));


    const animalArray = [...animals];

    console.log(animalArray);


    // animals.forEach(a => a.innerText == 'Rabbit' && (a.innerText = 'Bunny'));
    //paprasciau apacioje :)

    animals.forEach(a => {
        if (a.innerText == 'Rabbit') {
            a.innerText = 'Bunny';
        }
    });




    const h1 = document.querySelector('h1');

    h1.style.color = 'skyblue';
    h1.style.fontSize = '52px';



    // setInterval(_ => {
    //     h1.style.color = h1.style.color == 'skyblue' ? 'crimson' : 'skyblue'
    // }, 1000)



    const blueRed = _ => {
        if(h1.style.color == 'skyblue') {
            h1.style.color = 'crimson';
        } else {
            h1.style.color = 'skyblue'
        }
    }

    // setInterval(blueRed, 1000);



    
    const ball = document.querySelector('.bin div');

    const ballGo = _ => {
        ball.style.top = rand(0, 450) + 'px';
        ball.style.left = rand(0, 450) + 'px'
    }

    setInterval(ballGo, 500);


});