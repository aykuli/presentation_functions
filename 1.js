'use not strinct';
const foo = () => {
  console.log('foo: ', this);
};
const foo1 = function () {
  console.log('foo1: ', this);
};

function foo2() {
  console.log('foo2: ', this);
}

// foo();
// foo1();
// foo2();
// --------------------------------------------------

let pet = 'Вася';

function tryChangeParams(param0, param1) {
  console.log('Before change: \nparam0:', param0, '\nparam1: ', param1);

  param0 = param0 + ' is changed';
  param1 = param1 + ' is changed too';
  console.log('\nAfter change: \nparam0:', param0, '\nparam1: ', param1);
}
const [param0, param1] = ['P0', 'P1'];
tryChangeParams(param0, param1);
console.log('\n\nOut of func: \nparam0:', param0, '\nparam1: ', param1);
