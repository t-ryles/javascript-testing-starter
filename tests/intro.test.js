// npm test - run test command

import { describe, test, it, expect} from "vitest";
import { fizzBuzz, max, calculateAvg, factorial } from "../src/intro";

// First describe - creats test suite
describe('max', () => {
  it('Should return the first argument if it is greater', () => {
    // AAA pattern
    // Arrange - setup test enviroment
    // Only thing that matters, first value is greater.
    const a = 2;
    const b = 1;
    // Act - preform the test
    const result = max(a, b);
    // Assert - check the outcome
    expect(result).toBe(2);

    // or
    //expect(max(2,1)).toBe(2);
  })

  it('Should return the second argument if it is greater', () => {
    expect(max(1,2)).toBe(2);
  })

  it('Should return the first argument if both values are equal', () => {
    expect(max(2,2)).toBe(2);
  })
})

// FizzBuzz test
describe('fizzBuzz', () => {
  it('Should return fizzBuzz if argument is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  })

  it('Should return fizz if argument is divisible by 3', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  })

  it('Should return buzz if argument is divisible by 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  })

  it('Should return a string of the argument given if its not divisible by 3 or 5', () => {
    expect(fizzBuzz(7)).toBe("7");
  })
})

// TDD 
describe('calculateAvg', () => {
  it('Should return NaN if given an empty array', () => {
    expect(calculateAvg([])).toBe(NaN);
  })

  it('Given a array with one element, should return element value', () => {
    expect(calculateAvg([3])).toBe(3);
  })

  it('Given a array with two elements, should return the average of the two elements', () => {
    expect(calculateAvg([3,5])).toBe(4);
  })

  it('Given a array with three elements, should return the average of the two elements', () => {
    expect(calculateAvg([1,2,3])).toBe(2);
  })
})

// TDD Factorial
describe('factorial', () => {
  it('Should return 1 if given the number 0', () => {
    expect(factorial(0)).toBe(1);
  })

  it('Should return 1 if given the number 1', () => {
    expect(factorial(1)).toBe(1);
  })

  it('Should return the factorial of a given number greater than 1', () => {
    expect(factorial(3)).toBe(6);
  })
})