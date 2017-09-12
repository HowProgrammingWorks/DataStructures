'use strict';

const obj1 = {};
obj1.name = 'Marcus';
obj1.city = 'Roma';
obj1.born = 121;

const obj2 = new Object();
obj2.name = 'Marcus';
obj2.city = 'Roma';
obj2.born = 121;

const obj3 = {
  name: 'Marcus',
  city: 'Roma',
  born: 121
};

console.dir({ obj1, obj2, obj3 });
