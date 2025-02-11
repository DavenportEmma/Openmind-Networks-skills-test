// Write a recursive function to find the nth term of the fibonacci series and print it.
// Nth term of the Fibonacci series is the sum of (n-1)th and (n-2)th term

// Series : 0 1 1 2 3 5 8 13 21 …
// NOTE: The input N starts from 1

// Example:
// Input N = 3
// (N-1)th term = 2nd term
// (N-2)th term = 1st term
// Value of Nth term = 0 + 1 = 1

// Apply any validations on the input


// Code here
function fibonacci(n) {
    if(n <= 1)
        return n;

    return fibonacci(n-1) + fibonacci(n-2);
}

const args = process.argv.slice(2);

const n = Number(args[0]);
if(!Number.isInteger(n))
    console.log("Input is not an integer");
    return -1;

const result = fibonacci(n);
console.log(result);