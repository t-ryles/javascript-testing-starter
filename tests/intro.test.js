import { describe, test, it, expect} from "vitest";
import { fizzBuzz, max } from "../src/intro";

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
  it('Should return fizzBuzz', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  })

  it('Should return fizz', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  })

  it('Should return buzz', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  })

  it('Should return a string of the number given', () => {
    expect(fizzBuzz(7)).toBe("7");
  })
})