

let obj = {
    name: 'Antanas',
    age: 99
}

obj.color = 'red';

let name = 'Jonas';
let age = 88;

console.log(obj, obj.name, obj.age);

console.log(name, age);

console.clear();

let A = 5;
const B = 10;
const C = {
    name: 'Jonas'
}

A++;
// B++;
C.name = 'Antanas';

console.log(A, B, C);

console.clear();

let V = 5;
let V2 = V;  // by value


V2++;

console.log(V, V2);

const O = {
    sk: 5,
    name: 'Jonas'
}

// sk: 5
// name: 'Jonas'   =====> { sk:5, name: 'Jonas' }

const O2 = O; //by reference

const O3 = {...O}; // copy by value

const O4 = { ...O, salt: 99};


O2.sk++;
O.sk++;

console.log(O, O2, O3, O4);