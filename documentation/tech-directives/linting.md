# Following the team's linting rules
##### Our team enforces its code-style conventions through continuous-integration, and each developer can ensure they comply with these style rules by following this linting guide. 

## Linting and fixing as many issues as possible using the project's standards

- Globally: While in the root directory, run `eslint src/front-end/src/*.js src/back-end/src/*.js --fix` to lint the whole project. 
- On the front-end or back-end specifically: while in the src/front-end or src/back-end directory, run `eslint src/*.js --fix` to lint the front or back-end. 

After the above commands are run, you may still have issues. While you may have to fix some by hand, many of them can be fixed by auto-formatting using prettier. Make sure you setup prettier so that it reflects ESLint's requirements as closely as possible. After that, you can use VSCode's "Format Document" command (which you can find by opening the command palette, shortcut ctrl + shift + P) to auto-format. This command is mapped to shift + alt + F, by default. 

## Front-end initial Setup for Automatic Formatting

1. In VSCode, click on the "Extensions" icon on the leftmost navigation bar.
2. Install "Prettier - Code formatter 5.7.1" and "EsLint 2.1.13".
3. In the terminal type `cd src/front-end`
4. Run the follow script `npx install-peerdeps --dev eslint-config-airbnb`
   - For the first propmt, select npm by entering `2`
   - Enter `2` to indicate that you prefer the ESLint and Prettier configurations to be formatted as .json
   - When asked to "Write .eslintrc.js (Y/n)? Enter `Y`
   - For the max line length, say `80`
   - When asked about the trailing commas, enter `3`
     You _should_ be good to go! To doulbe check,run `eslint src/*.js --fix`, and see if there's any errors in the terminal or Problems, fixing where required.
