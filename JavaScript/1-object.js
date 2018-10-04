'use strict';

const person1 = {};
person1.name = 'Marcus';
person1.city = 'Roma';
person1.born = 121;

const person2 = new Object();
person2.name = 'Marcus';
person2.city = 'Roma';
person2.born = 121;

const person3 = {
  name: 'Marcus',
  city: 'Roma',
  born: 121,
};

console.dir({ person1, person2, person3 });
