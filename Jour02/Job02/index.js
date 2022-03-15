document.addEventListener("DOMContentLoaded",event=>{
  let butt= document.getElementById('butt');
  let cit=document.querySelector("article")
  console.log(cit)
  function showhide(){
    if ( cit.style.display != "block"){
        cit.style.display = "block";
    } 
    else if ( cit.style.display == "block") {
         cit.style.display = "none";
    }    
  }
  butt=addEventListener("click",event=>{
    showhide()
    })
})

