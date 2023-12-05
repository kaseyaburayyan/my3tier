const express = require('express');
const cors = require('cors');
const backend = express();
const port = 8081;

backend.use(express.json())
backend.use(cors())

backend.post('/api/user', (req, res) => {
  const firstName = req.body.fname
  const lastName = req.body.lname
  const dob = req.body.dob
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
  const confirmPassword = req.body.confirmPassword
  console.log("adding user to database with the following data:")
  console.log(firstName)
  console.log(lastName)
  console.log(dob)
  console.log(email)
  console.log(username)
  res.send("ok")
})






























backend.listen(port, () => {
    console.log("backend is listening on port " + port)
})

