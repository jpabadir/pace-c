# Rules, code style standards, and naming conventions the team follows

## Front-end code style
We use the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), which is enforced by ESLint in continuous integration. 

## Back-end code style
We use the [JavaScript Standard Style Guide](https://standardjs.com/), which is enforced by ESLint in continuous integration. 

## File naming
Prefer kebab-case-for-file-naming. 

## Branches best practices and naming
### Git flow
When fixing a specific issue, make a new branch based on the develop branch, work in that branch, submit a PR, merge the PR, and then delete the branch you made once the PR is merged. 

### Naming
When fixing a specific issue, name the branch issue#-the-title-of-the-issue. For instance, if fixing issue #254 "Add linting to repo", name the branch 254-add-linting-to-repo. 