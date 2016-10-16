'use strict';

let person = {
  name: 'Marcus',
  city: 'Roma',
  born: 121
};

if ('name' in person) {
  console.log('Person name is: ' + person.name);
}

for (let key in person) {
  let value = person[key];
  console.dir({ key, value });
}

// Variables to hash
let name = 'Marcus Aurelius',
    city = 'Rome';

// Old style
let a = {
  name: name,
  city: city
};

// New style
let b = { name, city };

// Dynamic field name
let fieldName = 'city',
    fieldValue = 'Roma';
let person2 = {
  name: 'Marcus Aurelius',
  [fieldName]: fieldValue
};

// Expression in field name
let person3 = {
  name: 'Marcus Aurelius',
  ['city' + 'Born']: fieldValue
};

// Function in field name
function fn(s) {
  return s + 'Born';
}

let person4 = {
  name: 'Marcus Aurelius',
  [fn('city')]: fieldValue
};
