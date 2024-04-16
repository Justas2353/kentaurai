function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Welcome to DOM III !!')

window.addEventListener('load', _ => {



// Konsolėje atspausdinti žvėri

    const animals = document.querySelectorAll('.test ul li');

    animals.forEach(a => console.log(a.innerText));



//Į ul tago galą pridėti li elementą su žvėriu "Beaver" (version 1)

    // const ul = document.querySelector('.test ul');

    // ul.innerHTML = ul.innerHTML + '<li>Beaver</li>';


//Į ul tago galą pridėti li elementą su žvėriu "Beaver" (version 2 - BETTER)

    const lastLi = document.querySelector('.test ul li:last-child');

    lastLi.insertAdjacentHTML('afterend', '<li>Beaver</li>');
    

//Porinius žvėrius nuspalvinti mėlynai, o neporiniams padidinti fontą iki 20px

    const animals2 = document.querySelectorAll('.test ul li');

    animals2.forEach((a, i) => {
        if(i % 2 == 0) {
            a.style.color = 'skyblue';
        } else {
            a.style.fontSize = '20px';
        }
    });

//Racoon ir Fox prie pavadinimo pridėti uodegą "----*"
    animals2.forEach(a => {
        if (a.innerText == 'Racoon' || a.innerText == 'Fox') {
            a.innerText += '----*';
        }
    });



    const button = document.querySelector('button');
    button.addEventListener('click', e => {
        console.log('ku ku', e.target)
    });

    button.addEventListener('mouseenter', e => {
        console.log('Opa', e.target)
    });



//Kvadratas raudonas 100X100 kai paspaudi ant jo pasidaro oranžinis

    const red =  document.querySelector('.red');

    red.addEventListener('click', _ => {
        if (red.dataset.squareColor == 'blue') {
            red.dataset.squareColor = 'red';
            red.style.backgroundColor = '#dc143c66';
            red.style.borderColor = '#dc143c';
        } else {
            red.dataset.squareColor = 'blue';
            red.style.backgroundColor = '#87ceeb66';
            red.style.borderColor = '#87ceeb';
        }
    });

});