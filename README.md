# Calculator

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Development Notes](#development-notes)
- [Testing](#testing)

## Introduction

This calculator was developed as an assignment in the open-source web development course known as The Oding Project (TOP). The link to the assignment page can be found [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator). 

An important note on the functionality of the calculator - it evaluates no more than a single pair of numbers at a time. This means that it does not have the complexities of say a scientific calculator, where the user enters multiple operations and the result is only computed after the user clicks 'equals'. 

The design of the calculator is based off the iOS calculator developed by Apple.

## Getting Started

Before we can start the live server we must first make sure that Node.js is installed. Check by opening your console and running `node -v`. If you can't see a version number you must install Node.js. 

To view the app locally you can begin by installing the dependencies...

`npm install`

...and then start by running:

`npm run serve`.

The application should be live on `http://localhost:8080/` if it doesn't open automatically.

## Development Notes

This was the final project that was part of the foundations path of TOP. To develop it you had to use all the skills learnt throughout the path. 

### Last Action Behaviour


The complexity of the project was developing the JavaScript logic. To control the behaviour of the app I modelled the state of the app by using a `lastAction` variable. The last-action states were `numCapture`, `operatorCapture` and `result`. The initial state of the app is `numCapture` and this changes to `operatorCapture` when the user clicks an operator button. To reach the `result` state the user has to click the equals button. 

The different states indicate what should be done to the `leftOperand` and `currentValue` values. As mentioned before, the calculator evaluates no more than a single pair of numbers at a time, and thus we only need two values at any time. For example, when the user clicks the equals button we display the result of `leftOperand` and `currentValue` after working out the arithmetic based off the chosen operator. The result is then saved to `leftOperand` and `currentValue`, because we always update the display with `currentValue`. If the user then clicks a number while in the `result` state, the environment is reset and `leftOperand` is set to an empty string and `currentValue` is set to the number clicked. 

If instead of clicking a number while in the `result` state, we click an operator and then click a number, we move from the `result` state, to the `operatorCapture` state, and then to the `numCapture` state. Because we saved the result of our last operation to `leftOperand` we can then click equals to compute the result of our previous result and the new input from the user, which was saved to `currentValue`. 

The process just described is how we can chain operations.

### Dealing With Exponentials

Dealing with smaller operations is fairly straightforward. We simply display the result of the operations without needing to mutate the number. However there is a 9 character limit for the display. If, say, we wanted to multiply 99999 by 99999 and display it we would end up with the result being 9999800001, which is 10 characters long, and the display would spill over.

To work around this I developed logic that, if a number was longer than 9 characters long *and did not contain a decimal point*, I would convert it to an exponential. I did so by simply using the built in `Number.toExponential(2)` javascript method. I passed it the `2` as an argument so that it would round the exponential to 2 decimal points.

If it did contain a decimal point, and the part of the number before the decimal was less than 9 characters long, I would round the number off at 2 decimal points using the `Number.toFixed(2)` method.

Displaying the result of the original operation of 99999 * 99999 using the exponential logic, the display would read 1.00e+10. 

The logic for converting exponentials also works for negative numbers.

## Testing

To run the testing environment we need to deploy the application first. The process is the same as what was outlined in the Getting Started section. We begin by making sure all the dependencies are installed by running `nmp install` in the console and then run the dev server by running `npm run serve`. 

Once the dev server is up and running we simply run `npm run e2e` and cypress should open a window where you run the tests by clicking the `sample_spec.js` file in the same window.
