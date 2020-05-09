// var common = require('./count_module');
// common.func1();
// common.func2();

// console.log(common.counter(['Rajni','Saluja' ,' Akshaj']));
// console.log(common.counter('Rajni'));

var test = require("./count_module");
test.count(['Rajni','Saluja','Akshaj','Kamal']);
test.add(7,8);
test.multi(9,3);
console.log(test.pi);

// test.func1();
// test.func2();