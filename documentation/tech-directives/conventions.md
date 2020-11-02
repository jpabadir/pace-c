# Comprehensive list of the code standards the team follows
## When possible, IDE code-linting rule files will be made and shared with the team to facilitate code standardizing. 

## General: 
### Front-end
We will use the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), which will be enforced by ESLint. 

### Back-end
We will use the [JavaScript Standard Style Guide](https://standardjs.com/), which will be enforced by ESLint. 

### (Below is probably deprecated. Keeping until we are sure that it isn't needed)
- Add inline comments before the code they document:<br>
// Place comment here<br>
computeResult();<br>
computeResult(); // Not here
- Only add comments where they are required to understand the code. There is, generally speaking, no need for a comment before a unit test, or a variable assignment, for instance. 
- Name methods with a verb, not an adjective:<br>
// Like so: getDouble();<br>
// Not like so: doubled();<br>
- Use tabs, not spaces.<br>
- Put a space after a word:<br>
// Incorrect: if(true){<br>
// Correct: if (true) {

## File naming
In general, prefer kebab-case-for-file-naming. 