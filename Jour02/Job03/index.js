document.addEventListener("DOMContentLoaded",event=>{
    let butt=document.getElementById("butt");
    var compte=1
    function addOne(){
        
        for (let i = 0; i <= compte; i++) {
            var result=compte ++
            return result
        }
    }
    butt=addEventListener("click",event=>{
       console.log(addOne())
    }
    )
}
)