'use strict';

let person = {
  name: 'Marcus',
  city: 'Roma',
  born: 121
};

let s = JSON.stringify(person);
console.log(s);

let obj = JSON.parse(s);
console.dir(obj);

let letters = ['A', 'B', 'C', 'D'];
console.log(letters + '');
console.log(JSON.stringify(letters));
