function menubar(){
   var when=document.getElementById('menubar')
  if(when.style.display==='block'){
    document.getElementById('menubar').style.display='none'
  }
  else{
    document.getElementById('menubar').style.display='block'
  }
  
}
function button(){
   var email = document.getElementById('email').value
   var password = document.getElementById('password')
   var messageElement = document.getElementById('message');
   messageElement.textContent = `User ${email} signed up successfully!`;
  document.getElementById('image').style.display='block'
   setTimeout(function () {
    window.location.href = "index.html"; // Replace with your actual index page URL
}, 1500);

}
