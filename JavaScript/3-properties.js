'use strict';

const person = {
  name: 'Marcus',
  city: 'Roma',
  born: 121
};

if ('name' in person) {
  console.log('Person name is: ' + person.name);
}

for (const key in person) {
  const value = person[key];
  console.dir({ key, value });
}

// Variables to hash
const name = 'Marcus Aurelius';
const city = 'Rome';

// Old style
const a = {
  name,
  city
};

// New style
const b = { name, city };

// Dynamic field name
const fieldName = 'city';
const fieldValue = 'Roma';
const person2 = {
  name: 'Marcus Aurelius',
  [fieldName]: fieldValue
};

// Expression in field name
const person3 = {
  name: 'Marcus Aurelius',
  ['city' + 'Born']: fieldValue
};

// Function in field name
function fn(s) {
  return s + 'Born';
}

const person4 = {
  name: 'Marcus Aurelius',
  [fn('city')]: fieldValue
};
