'use strict';

// Object/Hash
let person = {
  name: 'Marcus',
  city: 'Roma',
  born: 121
};

console.log('Person name is: ' + person.name);
console.log('Person name is: ' + person['name']);

delete person.name;
console.dir({ person });

delete person['city'];
console.dir({ person });

// With getter
let person2 = {
  name: 'Marcus Aurelius',
  getCity() {
    return 'Roma';
  }
};
