
function menubar(){
   var when=document.getElementById('menubar').style.width='50%'
  
  document.getElementById('body').style.backgroundColor='rgba(0,0,0,0.7)'
  document.getElementById('visi').style.visibility='hidden'
}

function closenav(){
  var wen=document.getElementById('menubar')
  wen.style.width='0%'
  document.getElementById('body').style.backgroundColor='transparent'
  document.getElementById('visi').style.visibility='visible'
}
