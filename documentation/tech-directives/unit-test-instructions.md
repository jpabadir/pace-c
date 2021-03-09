# Introduction

- The purpose of creating and running Unit test is to check functionality and quality of the code from each part of the software.

# Requirement

- Each **core** functional class are detected by a Unit Test Class.
- Within Unit test class, Each core method from the detected class should be attached with **at least two** test Unit Tests with different given input and expected result.
- All the Unit Tests should be **commented** to indicate the detected methods.
- To guarantee the functionality, all the Unit tests should be **passed**.
- The coverage should be **at least 80 percent** or higher.

# Setup Jest

## Frontend

1. Install Jest: run the following command in a terminal:
   `npm install --save-dev jest@26.6.0`
2. Install React test renderer: run the following command in a terminal when you are done #1:
   `npm install react-test-renderer`
3. Start server:
   run `cd src/front-end/ ` and then `npm start`
4. Now check your package.json file, jest and react-test-renderer should be in dependencies.
5. Here is an example for what you can do to create a test for a function.
   In _sum.js_:

   ```javascript
   function sum(a, b) {
     return a + b;
   }
   module.exports = sum;
   ```

   In _sum.test.js_:

   ```javascript
   const sum = require("./sum");
   test("adds 1 + 2 to equal 3", () => {
     expect(sum(1, 2)).toBe(3);
   });
   ```

   When you are done writing tests, run `npm run test` and the similar result should print:

   ```javascript
   PASS  ./sum.test.js
   ✓ adds 1 + 2 to equal 3 (5ms)
   ```

## Backend

- (TBA on W9)

# Components Requiring Testing as of March 4th, 2021

### Components Requiring Updated Testing

- Auth.js should be updated to reflect the changes to routing based on user type

### New Components that Have yet to be Tested

Disclaimer: A brief suggestion of what to test has been provided by each component. Likely, more tests should be utilized to ensure breadth of coverage.

- AccountMenuItem.js: Check the text of the nav items when logged out. Check the sub-nav of the logout button
- AdminSignup.js : Similar to the Mentor and Mentee form unit tests.
- MenteeFormAndEmbedder.js: Check the text on the page, as well as the 'Generate iFrame button'.
- EmailVerify.js: Check the text on the page, as well as the 'Resend Verification Email' button

### Notes of Uncertainty:

- I've excluded LandingPage.js from testing, since it will likely change after project completion. Given this, and how it doesn't contain any crucial functionality, I do not believe that it's worth testing. Please let me know if you feel otherwise.
- Akin to issues discovered while testing in January (specifically with the MentorSuggested.js, MentorHome.js, Mentorcompletion.js, and Mentoraccepted.js files) the AdminHome and ManageMentor components would likely face the same issue if firebase mocking is required. As such, I haven't assigned anyone to those components. However, if time allows, and if the team agrees with my methodology for testing, I could potentially research these components to figure out how to test them.

### Extraneous Tests:

- The "MenteeCompletion" folder can be removed since issue #465 (which is due at the end of this sprint) will redirect Mentee users to our application upon successful MenteeForm submission (eliminating the need for the MenteeCompletion component). The 'MentorCompletion.js' file can also be removed because it's no longer needed.
- The 'ForgotPassword'.js file in the same level of the directory as the 'components' folder can also be removed, since we have the ForgotPassword folder within 'components'
  - **If everyone agrees that these files can be removed**, I can incorporate them and fix any files that were dependent on them ASAP.

## Allocation of Tasks:

- Eric: Since you're working on task #465, please:

  - Update the unit tests for the MenteeDisplay component to reflect how you chose to modify the email field
  - Create unit tests for AccountMenuItem.js

- Aleks:

  - Please create unit tests for EmailVerify.js, AdminSignup.js, and MenteeFormEmbedder.js

- JP:
  - Since you created the original unit tests for Auth.js, please update the unit tests (it seems as though many of the tests were commented out at some point, but I'm not sure when).
  - _If time permits_, create some unit tests for app.js on the back-end. This will likely be time consuming, and given the other task that you're assigned to, testing app.js on the back-end could definitely be pushed back to a future week's sprint.

## Reference

1. https://jestjs.io/docs/en/getting-started.html
