'use strict';

const person = {
  name: 'Marcus',
  city: 'Roma',
  born: 121,
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

{
  const person = { name, city };
  console.dir({ person });
}

// Dynamic field name
{
  const fieldName = 'city';
  const fieldValue = 'Roma';
  const person = {
    name: 'Marcus Aurelius',
    [fieldName]: fieldValue,
  };
  console.dir({ person });
}

// Expression in field name
{
  const prefix = 'city';
  const person = {
    name: 'Marcus Aurelius',
    [prefix + 'Born']: 'Roma',
  };
  console.dir({ person });
}

// Function in field name
{
  const fn = (s) => s + 'Born';
  const person = {
    name: 'Marcus Aurelius',
    [fn('city')]: 'Roma',
  };
  console.dir({ person });
}
