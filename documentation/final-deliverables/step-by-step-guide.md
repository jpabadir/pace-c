# Step-by-Step Guide for Pace Group C - MentorMatch

## Where to Find the Code

The code for MentorMatch can be found in the GitHub repository: <https://github.com/jpabadir/pace-c>

<br>

## Setup Installation Details

### General

Install Node:

1. Install nvm: run the following command in a terminal: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash`
2. Run `nvm install node` (this will install the latest version of node for you)
3. Run `node -v` to check that node is installed and that you're using the latest version. It should be v15.0.1.
4. Open your IDE, checkout the develop branch, and pull (`git checkout develop`, `git pull`)

### Front-end

1. In your terminal, navigate to pace-c/src/front-end (`cd pace-c/src/front-end`)
2. Run `npm install`. This will look into the package.json, and install all required dependencies
3. Run `npm start`. This will start the MentorMatch app! You should see a the homepage of MentorMatch open in your browser.
4. Your front-end setup is done!

### Back-end

1. In your terminal, navigate to pace-c/src/back-end. Assuming you're still in the front-end folder, you need to run `cd ../` to go up a level before running `cd pace-c/src/front-end` to access the back-end folder.
2. Run npm install. This will install all required dependencies.
3. Run nodemon `src/app.js`. Nodemon is a small package that helps us develop faster. All it does is detect when the file app.js has been modified, and stops and re-runs the server so we don't have to do it manually.
4. Your back-end setup is done!

<br>

## Unit Test Installation Details

1. Install Jest: run the following command in a terminal:
   `npm install --save-dev jest@26.6.0`
2. Install React test renderer: run the following command in a terminal when you are done #1:
   `npm install react-test-renderer`
3. Start server:
   run `cd src/front-end/` and then `npm start`
4. Now check your package.json file, jest and react-test-renderer should be in dependencies.
5. Done!

<br>

## Linting Installation Details

1. In VSCode, click on the "Extensions" icon on the leftmost navigation bar.
2. Install "Prettier - Code formatter 5.7.1" and "EsLint 2.1.13".
3. In the terminal type `cd src/front-end`
4. Run the follow script `npx install-peerdeps --dev eslint-config-airbnb`
   - For the first propmt, select npm by entering `2`
   - Enter `2` to indicate that you prefer the ESLint and Prettier configurations to be formatted as .json
   - When asked to "Write .eslintrc.js (Y/n)? Enter `Y`
   - For the max line length, say `80`
   - When asked about the trailing commas, enter `3`

<br>

## Maintenance Issues

Gmail account details: (to be added)

Firebase account details: (to be added)

<br>

## Untested Existing Features

(to be added)

<br>

## Unimplemented Features

None!
