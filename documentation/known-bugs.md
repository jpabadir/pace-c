# Bugs found before peer testing 1 #
- Toast message should be displayed after verification and welcoming emails sent.
- When I finish filling out the form and clicking on 'here' in MentorCompletion page, the page switch to MentorHome rather than login page.
- When the default option in timezone field is selected, it is not recognized.

# Bugs found before peer testing 2 #
[Katrina] 1) When a Mentor logs in, they're routed to the AdminHome component for a split second (thus resulting in an error since Mentors do not have any pendingMentors). I think this is due to how the if statements is currently structured in Auth.js (we're checking whether the usertype is a mentor, but returning the AdminHome component right after). A quick fix (so that the app could run without any errors before the client meeting), was to restructure the render method to the following:
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
Further investigation might be required to see if there's a better way to change this.
