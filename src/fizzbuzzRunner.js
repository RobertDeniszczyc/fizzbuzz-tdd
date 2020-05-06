const fizzbuzz = require('./fizzbuzz');

/**
 * Application runner.
 * Cycles through numbers 1 - 100 inputting them into the fizzbuzz function.
 * 
 * NOTE: You don't need to change this file for the workshop.
 */
function fizzbuzzRunner()
{
    for(let i = 1; i <= 100; i++) {
        console.log(fizzbuzz(i));
    }
}

fizzbuzzRunner();