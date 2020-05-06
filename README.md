# FizzBuzz TDD Workshop
The aim of this workshop is to introduce the concept of Test Driven Development. The contents of this repo are supporting material for a TDD workshop.

This workshop material is written in JavaScript using JestJS as the testing framework.

# Getting started
You will need `yarn` and `node` installed on your machine.

To install this workshop:
```
yarn install
```

To run tests:
```
yarn test
```

To run the application:

**Read the rules before running this**
```
yarn fizzbuzz
```

# Instructions
We are going to build a small application to perform the classic "FizzBuzz" operation. See below acceptance criteria and an example. To help build the application we are going to follow the Test Driven Development methodology and write tests **before** writing the application code.

Write your tests in the `src/fizzbuzz.test.js` file and the application code in the `src/fizzbuzz.js` file.

You don't need to touch the `src/fizzbuzzRunner.js`, this file is used only to run the application.

## Acceptance Criteria
1. **Given** I input a number into the application  
**Then** the output of the application is a string representation of the number I have inputted
1. **Given** I input a number into the application  
**When** the number is a multiple of three  
**Then** the output of the application is "Fizz"
1. **Given** I input a number into the application  
**When** the number is a multiple of five  
**Then** the output of the application is "Buzz"
1. **Given** I input a number into the application  
**When** the number is a multiple of three and five  
**Then** the output of the application is "FizzBuzz"

## Example
```
fizzbuzz(1) // returns "1"
fizzbuzz(3) // returns "Fizz"
fizzbuzz(5) // returns "Buzz"
fizzbuzz(15) // returns "FizzBuzz"
```

# Rules
1. You can only run the application **once**. If you run the application more than once you're cheating, that's not cool.
1. You can run the tests as many times as you like.

# Jest test example
The tests in this workshop are powered by [JestJS](https://jestjs.io/en/). If you are unfamiliar with Jest you may want to read the [Getting Started guide](https://jestjs.io/docs/en/getting-started) before starting this workshop.

The basic format of a test is like:
```
test('my test name here', () => {
   expect(actual).toBe(expected);
});
```

# Meta
Author: Robert Deniszczyc