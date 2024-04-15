function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('Welcome to DOM IV !!!')



const animals = [
    {animal: 'Racoon', color: 'skyblue'},
    {animal: 'Fox', color: 'orange'},
    {animal: 'Wolf', color: 'gray'},
    {animal: 'Rabbit', color: 'pink'}
];


window.addEventListener('load', _ => {


// Įdėti žvėris ul tago li taguose
// Nuspalvinti žvėris reikiamom spalvom

    let html = '<ul>';

    animals.forEach(a => html += '<li style=>' + a.animal + '</li>');

    html += '</ul>';

    const test = document.querySelector('.test');

    test.innerHTML = html;




});