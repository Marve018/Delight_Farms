 
  

function button(){
   var email = document.getElementById('email').value
   var pass = document.getElementById('password')
   var messageElement = document.getElementById('message');
   
   messageElement.textContent = `User ${email} signed up successfully!`;
   document.getElementById('image').style.display='block'
    setTimeout(function () {
     window.location.href = "index.html"; // Replace with your actual index page URL
 }, 2000);
 }
 
 
function login(){
    Window.location.href = "login.html"
}
function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        document.getElementById('error').innerHTML='passwords dont match'
        return false;
    }

    // Additional validation logic can be added here

    return true;
}

