# Bug 'Cannot set property 'id' of null'
- Where: This bug occurs when a mentor user logs in and tries to view the accepted mentees under 'accepted mentees' tab.
- Why: Because there was a unauthorized UID in Database under the accepted mentees section of the corresponding account.
- Solution: Once the unauthorized UID was deleted, the bug was gone. The solution's correctness has been approved by manully adding an Unthorized UID like '12345678' into an account, which reproduced the bug.
- Related issue: [#492](https://github.com/jpabadir/pace-c/issues/492)
