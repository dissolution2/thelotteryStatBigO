//import { mockRandom, resetMockRandom } from 'jest-mock-random';
const testOne = require('./myfunction');

test('adds 1 + 2 to equal 3', () => {
  expect(testOne.sum(1,2)).toBe(3);
});

test('add 1 * 2 to equal 2', () =>{
    expect(testOne.addtraction(1,2)).toBe(2);
});

test('add 1 - 2 to equal 1', () =>{
    expect(testOne.subtract(1,2)).toBe(-1);
});
/*
test('random 0 - 10, a times', () =>{
  expect(testOne.randomN(1)).toBe();
});
*/


  test('assigns random the values that we want to mock in order', () => {
    mockRandom([0.1, 0.2]);
    const actual = [Math.random(), Math.random(), Math.random(), Math.random()]; // [0.1, 0.2, 0.1, 0.2]
 
    expect(actual).toEqual([0.1, 0.2, 0.1, 0.2]);
 
    resetMockRandom();
  });
