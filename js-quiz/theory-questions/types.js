// What is the difference between

var x = 1;

let x = 1;

// and

const x = 1;

// ?

// ANSWER: var and let are re-declarable variables (let is improved version of var) and const can't be re-declared.

// Which of the following variables are primitives and which of them are referenced by their addresses in memory? Write variable names in the corresponding arrays

const a = 1;
const b = a;
const c = 'some string I am';
const d = function () {};
const e = [a, b, null];
const f = null;
const g = {
  key1: a,
  key2: undefined,
};

/* ANSWER
 *
 * Primitives: [a, b,c,f]
 *
 * Non-primitives: [d, e, g]
 *
 */
