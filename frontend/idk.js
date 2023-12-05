function submitForm(){
  const fname = document.getElementById("firstname").value
  console.log(fname)
  const lname = document.getElementById("lastname").value
  console.log(lname)
  const dob = document.getElementById("dob").value
  console.log(dob)
  const email = document.getElementById("email").value
  console.log(email)
  const username = document.getElementById("username").value
  console.log(username)
  const password = document.getElementById("password").value
  console.log(password)
  const confirmPassword = document.getElementById("confirmpassword").value
  console.log(confirmPassword)
  const data = {
    fname: fname,
    lname: lname,
    dob: dob,
    email: email,
    username: username,
    password: password,
    confirmPassword: confirmPassword
  } 
  sendDataToBackend(data)
  return false

}

function sendDataToBackend(data){
  const url = "http://localhost:8081/api/user"
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
  fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
