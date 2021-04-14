## Updated Test Report

All of our front-end components within our application are in the 'components' folder within 'src'. Each component folder has a respective '.test.js' file for unit testing purposes. Generally, our team primarily focused on feature development during each sprint of the project's duration, which included rigorous manual testing before merging the PR. These features were then tested to assure quality by unit testing through Jest (a testing framework recommended by React, aimed at specifically testing JavaScript).

In addition, our Github repository has regression testing, which ensures that all unit tests have passed before any open PR can be merged (ensuring that no new additions to the repo will impact existing features in an adverse way). Continuous Integration within our repo assisted with quality assurance since it served to find any potential issues early in development once pushed. Before pushing, EsLint and Prettier screened for errors and warnings, displaying any areas requiring attention on the console.

In total, we have 15 test suites, with 57 tests that pass.

## Unimplemented Requirements

As our application stands, all features required to meet Minimum Viable Product functionality have been met. As such, there are no requirements that have been unimplemented or that are partially working. Any feature that might have limitations or that could benefit from future development are listed under the " Limitations and Future Improvements" header.

Although the majority of features have been unit tested, there are components that we were not able to fully unit test due to the time intensivity of Firebase mocking. Components requiring Firebase mocking have a comment disclosing this. For reference, the files that we were unable to fully test due to the fact that they require a Firebase call to render properly are as follows:

- AdminHome.test.js
- ManageMentors.test.js
- MentorAccepted.test.js
- MentorSuggested.test.js

Despite manually testing to ensure functionality, the back-end could benefit in the future from unit testing via Jest.

<br>

## Known Bugs

After testing each user flow of the application multiple times, no bugs have been found since we have worked to fix any bugs that we have come across. For reference, a comprehensive list of bugs that we have fixed can be found in our repository by going to the 'documentation' folder, then clicking on 'known-bugs.md'.

- Although this isn't necessarily a bug, it is important to note that a TypeError displaying 'Cannot set property 'id' of null' may occur when navigating to the 'Accepted Mentees' tab. If this occurs, reference the Firebase database to see if the logged in mentor has any suggested or accepted mentees’ IDs that don’t exist in the database. If a mentee ID appears in either field and that mentee doesn't exist as a user in the database, remove that UID. Note: The TypeError is only displayed when the app is being run on localhost, and would not crash the application if deployed.
