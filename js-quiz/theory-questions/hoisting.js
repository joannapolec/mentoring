// Without running the script please mark which one of these console logs will return a string and which one will cause the program to fail. Explain why.

console.log(x()); // ANSWER:

console.log(y()); // ANSWER:

// EXPLANATION:

function x() {
  return 'I am a function declaration';
}

const y = function () {
  return 'I am a function expression';
};
