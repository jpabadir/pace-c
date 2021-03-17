# Bugs found before peer testing 1

- ~~Toast message should be displayed after verification and welcoming emails sent.~~
- ~~When I finish filling out the form and clicking on 'here' in MentorCompletion page, the page switch to MentorHome rather than login page.~~
- ~~When the default option in timezone field is selected, it is not recognized.~~

# Bugs found before peer testing 2

~~[Katrina] 1) When a Mentor logs in, they're routed to the AdminHome component for a split second (thus resulting in an error since Mentors do not have any pendingMentors). I think this is due to how the if statements is currently structured in Auth.js (we're checking whether the usertype is a mentor, but returning the AdminHome component right after). A quick fix (so that the app could run without any errors before the client meeting), was to restructure the render method to the following:

```javascript
render() {
    if (this.state.user) {
      if (!this.state.user.emailVerified) {
        return <EmailVerify />;
      }
      if (this.state.userType === 'admin') {
        return <AdminHome />;
      }
      if (this.state.userType === 'mentor') {
        return <MentorHome />;
      }
    }
    return <Login />;
  }
}
```

Further investigation might be required to see if there's a better way to change this.~~

[JP]

1. ~~After creating an account as an admin, we get are kept on the same page where we created the form~~
2. ~~We have to manually refresh the page to see the mentor we invited be added to the list after inviting a mentor~~
3. ~~When clicking on the link to access our account after signing up as a mentor, we are not routed to the right page~~
4. ~~We should refresh the mentor's suggested mentees when (s)he creates an account, otherwise they have to log in and out for that to happen~~

March update:
[JP]

- ~~There is an infinite loop somewhere in the code, and it fills the DB with info and crashes the front-end. It adds hundreds of times the same email address to the pendingMentors field of the DB.~~

[Katrina]

- During the client meeting, I noticied that a TypeError displaying 'Cannot set property 'id' of null' occurs when navigating to the 'Accepted Mentees' tab.
- ~~The 'Your Suggested Mentees have been updated' notification is displayed for both Mentor and Admin users upon login (the client mentioned that we could likely remove this notification altogether).~~



Updates after March 17th:

