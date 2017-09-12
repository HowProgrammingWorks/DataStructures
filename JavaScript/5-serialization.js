'use strict';

const person = {
  name: 'Marcus',
  city: 'Roma',
  born: 121
};

const s = JSON.stringify(person);
console.log(s);

const obj = JSON.parse(s);
console.dir(obj);

const letters = ['A', 'B', 'C', 'D'];
console.log(letters + '');
console.log(JSON.stringify(letters));
