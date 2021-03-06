# Overview

Wraps a function with a memoized function

### setup

`npm i -save bm-better-memoization`

`const m3m = require('bm-better-memoization');`

# Basic Example

### our functions

```
let sum = (a, b) => ({sum: a + b});
let sum$ = m3m(sum);
```

### using un-memoized function

```
let sum1 = sum(10, 3);
let sum2 = sum(10, 3);
// sum1 !== sum2;
```

### using memoized function

```
let sum$1 = sum$(10, 3);
let sum$2 = sum$(10, 3);
// sum$1 === sum$2;
```

### parameters

```
let thirteen = sum$(10, 3);
let five = sum$(2, 3);
let eleven = sum$(10, 1);
let elevenAgain = sum$(1, 10);
// thirteen !== five !== eleven !== elevenAgain
```

### clearing cache

```
let four = sum$(2, 2);
let fourAgain = sum$(2, 2);
sum$.clear();
let fourAfter = sum$(2, 2);
let fourAfterAgain = sum$(2, 2);
// (four === fourAgain) !== (fourAfter === fourAfterAgain)
```


<br><br><sub><sub>this markdown was generated by [de-document-examples](https://www.npmjs.com/package/de-document-examples)</sub></sub>