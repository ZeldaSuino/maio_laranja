const x = document.getElementById("huh")
function cssdenable(){
  if (document.getElementById("huh") == null){
    document.head.appendChild(x)
  }
  else
    document.getElementById("huh").remove()
}