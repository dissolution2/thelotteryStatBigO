test('callback passing test', (t, done) => {
    // done() is the callback function. When the setImmediate() runs, it invokes
    // done() with no arguments.
    setImmediate(done)
  });