```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth.uid == $uid",
    		".write": "auth.uid == $uid"
      }
    },
    "organizations": {
      "$organization": {
        ".read": "root.child('users').child(auth.uid).child('userType').val() == 'admin' && 
        				  root.child('users').child(auth.uid).child('organization').val().toLowerCase() == $organization.toLowerCase()",
    		".write": "root.child('users').child(auth.uid).child('userType').val() == 'admin' && 
        				  root.child('users').child(auth.uid).child('organization').val().toLowerCase() == $organization.toLowerCase()"
      }
    }
  }
}
```

https://firebase.google.com/docs/database/admin/start#authenticate-with-limited-privileges
