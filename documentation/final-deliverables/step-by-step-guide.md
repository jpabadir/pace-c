# Step-by-Step Guide for Pace Group C - MentorMatch

## Where to Find the Code

The code for MentorMatch can be found in the GitHub repository: <https://github.com/jpabadir/pace-c>. This repo can be forked in order for the code to be used by anyone. 

## Setup Installation Details

### General

Install Node:

1. Install nvm: run the following command in a terminal: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash`
2. Run `nvm install node` (this will install the latest version of node for you)
3. Run `node -v` to check that node is installed and that you're using the latest version.
4. Open your IDE, checkout the develop branch, and pull (`git checkout develop`, `git pull`)

### Front-end

1. In your terminal, navigate to `pace-c/src/front-end` (`cd pace-c/src/front-end`)
2. Run `npm install`. This will look into the package.json, and install all required dependencies
3. Run `npm start`. This will start the MentorMatch app! You should see the homepage of MentorMatch open in your browser.
4. Your front-end setup is done!

### Back-end

Note that for the website to work properly, you need to run the backend at the same time as you run the frontend. Therefore, we suggested opening another terminal window or tab before running the instructions below.

1. In your terminal, navigate to `pace-c/src/back-end`.
2. Run `npm install`. This will install all required dependencies.
3. Run `nodemon src/app.js`. Nodemon is a small package that helps us develop faster. All it does is detect when the file `app.js` has been modified, and stops and re-runs the server so we don't have to do it manually.
4. Your back-end setup is done!

## Unit Testing Packages Installation Details

1. Install Jest: run the following command in a terminal:
   `npm install --save-dev jest@26.6.0`
2. Install React test renderer: run the following command in a terminal:
   `npm install react-test-renderer`
3. Now, running `cd src/front-end/; npm run test` from the project's top-level directory will run the test suites.

## Linting Installation Details

Our team decided to share linting rules, and to enforce these with our continuous integration pipeline. Should your team choose to do the same, you can follow the instructions below in order to copy our setup.

1. In VSCode (assuming you are using VSCode), click on the "Extensions" icon on the leftmost navigation bar.
2. Install "Prettier - Code formatter" and "ESLint".
3. In the terminal type `cd src/front-end`
4. Run the follow script `npx install-peerdeps --dev eslint-config-airbnb`
   - For the first prompt, select npm by entering `2`
   - Enter `2` to indicate that you prefer the ESLint and Prettier configurations to be formatted as .json
   - When asked to "Write .eslintrc.js (Y/n)? Enter `Y`
   - For the max line length, say `80`
   - When asked about the trailing commas, enter `3`
5. Now, running `eslint src/front-end/src/**/*.js src/back-end/src/**/*.js` from the project's top-level directory will lint the entire codebase.

## About Continuous Integration
As mentioned, our team uses continuous integration (CI). Our CI pipeline does two things. First, it runs ESLint on the code, and fails if the code is not properly linted. Then, it runs the project's tests, and fails if any of them fail. It is set-up to do so when a Pull Request is made to develop or master, our two default, protected branches. This is all piloted by the `link.yml` file in this repo, please look there to fully understand and modify the CI steps. 

## Maintenance Issues

There are two required associated external entities that anyone interested in using this project will want to be aware of: an email address to message users, and a Firebase project. For Pace, who is the original client of this project, there is an option to receive ownership of these two accounts directly from our team. Anyone else using this project in an open-source fashion will need to setup their own Firebase project and email accounts, and change the code in order to link this software to the new accounts.

### Gmail Account Details

Our team created the following Gmail address, which is currently being used to message users: "pacementormatch@gmail.com". Our team is happy to transfer the password to this email account, should Pace wish to use it. Otherwise, the email address used to message users can easily be changed in the `email-helpers.js` file.

### Firebase Account Details

Ownership of the Firebase project we created can be transferred to Pace, and our team is happy to schedule a meeting in order to do so, should Pace choose to use the same project. Otherwise, the project being used can be changed in the Firebase configuration files, in the code.

## Untested Existing Features, Unimplemented Features

Please see the "Updated Test Report" as well as the "Unimplemented Requirements" sections for a note about this.
