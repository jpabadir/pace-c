# How the project will be tested
## Front-end
On the front-end, we want to use React, with a few libraries as well. 

To test our React code, we will use Jest and React-testing-library. As per [this link](https://reactjs.org/docs/testing.html), that is the standard way of implementing testing in a React application. 

Jest is specifically aimed at unit testing JavaScript and, although it is not the only way to do so, it is the tool recommended by React, and it was developed by Facebook. Jest has other advantages. As per [this article](https://www.springload.co.nz/blog/why-were-migrating-unit-tests-jest-and-why-you-should-too/#:~:text=One%20of%20the%20advantages%20of,coverage%20feature%20is%20impressive%20too.), for instance: "One of the advantages of Jest is speed. Jest runs tests in parallel which makes running the whole test suite so much faster. Also, you’ve got the possibility to use “--watch” and only run the tests affected by your changes in the editor. The coverage feature is impressive too. It gives you a nice and simple rendering directly in your console after you run the coverage command (...)". Jest also has snapshot testing, which, according to [this article](https://blog.usejournal.com/jest-vs-mocha-whats-the-difference-235df75ffdf3), "make[s] testing basic UI components extremely simple with one line of code: expect(component).toMatchSnapshot();."

React-testing-library is a good way to test React. A significant advantage of this library is that it tests actual HTML elements within the DOM, and is thus very reliable, and tests the system similarly to how the user would "test" it (because the user sees HTML elements, not React technicals, such as whether or not a component is in a specific state). 

## Back-end
On the back-end, we are using Node.JS. 

On the back-end, we will mostly be doing unit testing. To do so, we will use Jest. There is a large number of frameworks which allow unit testing with JavaScript, but we chose Jest because it has the advantages described above, and we believe that using the same testing framework on the back-end and front-end reduces the amount that developers have to learn, and improves collaboration between the front-end and back-end "experts" of our team. 

## Database and authentication
The solution we will use for databases and authentication is Firebase. 

Firebase offers an emulator suite which allows for unit testing, as well as testing the database's security rules. We have little control over how we unit test Firebase, but we feel confident that the suite of testing tools provided by Firebase will be appropriate. In addition, Firebase allows us to use Jest to test our Firebase rules and setup as well, which means we can standardize our testing tools across front end, back-end, and database and authentication. 

## Continuous integration and regression testing
We will use GitHub Actions to do continuous integration and regression testing. We will use this feature to do several things, some of which include:

- Automatic linting
- Running all unit tests (regression testing)

We might add more features (smoke testing, for instance) to this continuous integration workflow later, as needed. 

For now, we have setup a GitHub Action, and we have [a basic script](https://github.com/jpabadir/pace-c/edit/continuous-integration/.github/workflows/link.yml) that runs on every pull request to our develop and master branches. We have added an ESLint action in this script, but we will need to wait until we have actual code in our repository before we can add more useful actions and commands to this script. 