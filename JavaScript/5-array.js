'use strict';

const letters = [];
letters.push('B');
console.dir({ letters });
letters.unshift('A');
console.dir({ letters });
letters.push('C');
console.dir({ letters });

const numbers = [];

const languages = ['C++', 'JavaScript', 'Python', 'Haskell', 'Swift'];
console.dir({
  length: languages.length,
  'languages[0]': languages[0],
  'languages[languages.length-1]': languages[languages.length - 1]
});
