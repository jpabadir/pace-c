# Introduction #
- The purpose of creating and running Unit test is to check functionality and quality of the code from each part of the software.

# Requirement #
  - Each **core** functional class are detected by a Unit Test Class.
  - Within Unit test class, Each core method from the detected class should be attached with **at least two** test Unit Tests     with different given input and expected result.
  - All the Unit Tests should be **commented** to indicate the detected methods.
  - To guarantee the functionality, all the Unit tests should be **passed**.
  - The coverage should be **at least 80 percent** or higher.

# Setup Jest #
  1. Install Jest: run the following command in a terminal: `npm install --save-dev jest@26.6.0`
  2. Install React test renderer: run the following command in a terminal when you are done #1: `npm install react-test-            renderer`
  3. Start server: run `cd src/front-end/ ` and then `npm start`
  4. Now check your package.json file, jest and react-test-renderer should be in dependencies.
  5. Here is an example for what you can do to create a test for a function.
     In *sum.js*:
  
     ```javascript
     function sum(a, b) {
       return a + b;
     }
     module.exports = sum;
     ```
    
     In *sum.test.js*:
     
     ```javascript
     const sum = require('./sum');
     test('adds 1 + 2 to equal 3', () => {
       expect(sum(1, 2)).toBe(3);
     });
     ```
     When you are done writing tests, run `npm run test` and the similar result should print:
     
     ```javascript
     PASS  ./sum.test.js
     ✓ adds 1 + 2 to equal 3 (5ms)
     ```
  
## Reference ##
1. https://jestjs.io/docs/en/getting-started.html
