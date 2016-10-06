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
