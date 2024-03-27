

const m = [5, 15, 25];

const r = m.push(6);

//1. do: prideda nauja elementa i masyvo gala
//2. return: masyvo ilgi


const r2 = m.splice(2, 2);




const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
 
console.log([...animals]);
 
const r3 = animals.slice(2, 3);

console.log(r3, animals);


console.clear();




const md1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.table(md1);

// console.log(md1[2][0]);

for (let i = 0; i < md1.length; i++) {
    for (let j = 0; j < md1[i].length; j++) {
        console.log(md1[i][j]);
    }
}


