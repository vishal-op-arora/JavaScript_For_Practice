/**
 * "use strict"; Defines that JavaScript code should be executed in "strict mode".
 * 
    The "use strict" Directive
    The "use strict" directive was new in ECMAScript version 5.

    It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

    The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

    With strict mode, you can not, for example, use undeclared variables.
 */

x = 3.14;       // This will not cause an error.

console.log(x);

function myFunction() {
   "use strict";
   y = 3.14;   // This will cause an error
}

myFunction();