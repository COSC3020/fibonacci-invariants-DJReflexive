# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

# My Invariant Solution

In this implementation of the fibonacci sequence, before the algorithm ever 
starts, we know that the last element in the array will be at an index of n. 
As the algorithm begins, it will recursively call down until it reaches the
two base cases. When n = 0, 0 will always be the first value stored at the
0th index of the array. When n = 1, 1 will always be the second value
stored at the 1st index of the array. 

$F(0) = 0 and F(1) = 1$

Past this point, where n > 1, is where the recursive calles begin so that

$F(n) = F(n-2) + F(n-1)$

We can now assume the following invariant: **Any n value passed through 
fibCalc(n) will result in the correct fibonacci value $F(n)&.** 

As the recusion reaches the base cases, it is defined that n=0 will 
return 0 and n=1 will return 1. As the algorithm goes back up the 
recursive calls, it then reveals the next value in the sequence as 
n increase by 1 every call and depends on the return values of the 
previous two partitions. Once the recursion finishes, the final
recursive call will return last value to be stored within the array
which is $F(n)$.


# Sources

- ChatGPT: For the in depth description of what an invarient is, 
            examples (not related to this assignment), and steps 
            in how to find one.

## Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice.