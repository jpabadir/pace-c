# Comprehensive list of the code standards the team follows

###### When possible, IDE code-linting rule files will be made and shared with the team to facilitate code standardizing.

### Front-end

While in the src/front-end directory, run `eslint src/*.js --fix` to lint your code using the project's ESLint standard presets.

#### Initial Setup for Automatic Formatting

1. In VSCode, click on the "Extensions" icon on the leftmost navigation bar.
2. Install "Prettier - Code formatter 5.7.1" and "EsLint 2.1.13".
3. In the terminal type `cd src/front-end`
4. Run the follow script `npx install-peerdeps --dev eslint-config-airbnb`
   - For the first propmt, select npm by entering `2`
   - Enter `2` to indicate that you prefer the ESLint and Prettier configurations to be formatted as .json
   - When asked to "Write .eslintrc.js (Y/n)? Enter `2`
   - For the max line length, say `80`
   - When asked about the trailing commas, enter `3`
     You _should_ be good to go! To doulbe check,run `eslint src/*.js --fix`, and see if there's any errors in the terminal or Problems, fixing where required.

### Back-end

While in the src/back-end directory, run `eslint src/*.js --fix` to lint your code using the project's ESLint standard presets.
