# Comprehensive list of the code standards the team follows
## When possible, IDE code-linting rule files will be made and shared with the team to facilitate code standaridzing. 

## General: 
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