// Server initialization
const express = require('express')
const bodyParser = require('body-parser')
const port = 8000
const cors = require('cors')
const app = express()
app.use(cors())
const jsonParser = bodyParser.json()
const firebase = require('firebase')

// Firebase initialization
const firebaseConfig = {
  apiKey: 'AIzaSyAdutyXDo_0GvanZ58V1l702Co_zQu4a3M',
  authDomain: 'mentormatch-afa46.firebaseapp.com',
  databaseURL: 'https://mentormatch-afa46.firebaseio.com',
  projectId: 'mentormatch-afa46',
  storageBucket: 'mentormatch-afa46.appspot.com',
  messagingSenderId: '515592331593',
  appId: '1:515592331593:web:c38e0d3defadf9886cfa98'
}
firebase.initializeApp(firebaseConfig)

// Server logic
app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('Server received GET request! 🚀');
})

app.post('/save-signup-form', jsonParser, (req, res) => {
  saveForm(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Firebase logic
function saveForm (form) {
  firebase.database().ref('filled-forms').push().set(form)
}
