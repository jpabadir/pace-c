# A document helping the team setup their local environment

## Setup steps
### General
Install node: 
1. Install nvm: run the following command in a terminal: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash`
2. Run `nvm install node` (this will install the latest version of node for you)
3. Run `node -v` to check that node is installed and that you're using the latest version. It should be v15.0.1. 

Then, open your IDE, checkout the develop branch, and pull (`git checkout develop`, `git pull`)
### Front-end
1. In your terminal, navigate to pace-c/src/front-end (`cd pace-c/src/front-end`)
2. Run `npm install`. This will look into the package.json, and install all required dependencies
3. Run `npm start`. This will start your front-end app! You should see a webpage open in your browser. 
Your front-end setup is done. Try editing the app.js file to see the changes take place in real time!

### Back-end
1. In your terminal, navigate to pace-c/src/back-end. Assuming you're still in the front-end folder, you need to run `cd ../` to go up a level before running `cd pace-c/src/front-end` to access the back-end folder. 
2. Run npm install. This will install all required dependencies. 
3. Run nodemon `src/app.js`. Nodemon is a small package that helps us develop faster. All it does is detect when the file app.js has been modified, and stops and re-runs the server so we don't have to do it manually.  

Your back-end setup is done! Try accessing the url given in your terminal after you run the server (it should be http://localhost:8000/) and refreshing it a few times. Every time you refresh, your terminal should say "Server received GET request! 🚀". Have a look at the code I added to gain a basic understanding of it. We are using a framework named Express to run our server.

When you're coding, you'll have to have both the front-end and the back-end running, so open two terminal tabs side-by-side and run `npm start` and `nodemon src/app.js` in each tab, respectively. 

If you run both the front-end and back-end, you can try the button I added on the react app, which makes a basic request to the server, to see the front-end <-> back-end communication in action. 

You're done! Happy hacking. 🍳

### Possible errors
#### nodemon: command not found
Google this error and try to fix it, I am not sure what the general fix is. Please note that instead of using nodemon, you can also simply run `node app.js` to run your server, you will simply have to stop and re-run your server if you make edits (if you're a front-end expert, this will not be an issue since you won't be editing the server much).  
