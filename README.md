# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @edgmsh/lotide`

**Require it:**

`const _ = require('@edgmsh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: Gets the first element of array.
- `tail(...)`: Gets all but the first element of array.
- `middle(...)`: Gets middle element of array.
- `eqObjects(...)`: Compares objects by the content 
- `takeUntil(...)`: Cloned array until specified element.
- `countLetters(...)`: Counts letters of a given string.
- `eqArrays(...)`: Compares arrays.
- `findKeys(...)`: Finds key on object by provided string. 
- `countOnly(...)`: Counts specific names from array.
- `findKayByValue(...)`: Finds object keys by given value.
- `letterPositions(...)`: Indexes all letters aby given string. 
- `without(...)`: Creates an array excluding all given values.
- `map(...)`: Creates an array of values by running each element in collection thru iteratee. 
- `flatten(...)`: Flattens array a single level deep.
- `reverse(...)`: Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

  

