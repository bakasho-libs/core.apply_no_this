[![Build Status](https://travis-ci.org/bakasho-libs/core.apply_no_this.svg?branch=master)](https://travis-ci.org/bakasho-libs/core.apply_no_this)

## applyNoThis

Apply a function with no context binding. Internally run call for up to 7 arguments.

*[internal] do not use outside of core*

```javascript

var applyNoThis = require("core.apply_no_this");

function add(a,b) {
    return a + b;
}

// returns 30
applyNoThis(add, [10, 20]);


```
