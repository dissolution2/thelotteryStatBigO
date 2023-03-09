const testOne = require('./vikingLottoScript');

test('add 1 - 2 to equal 1', () =>{
  expect(testOne.subtract(1,2)).toBe(-1);
});

test('callback passing test', (t, done) => {
    // done() is the callback function. When the setImmediate() runs, it invokes
    // done() with no arguments.
    setImmediate(done)
  });