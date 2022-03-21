// document.addEventListener('DOMContentLoaded',() =>{
//     function jsonValueKey({"nom":"damien", "PRENOM": "damien",})
// })

var json = {name: "La Plateforme_", address: "8 rued'hozier", city: "Marseille", nb_staff: "11", 
creation:"2019"}

document.addEventListener("DOMContentLoaded", ()=> { 
    jsonValueKey(json)
    
})
function jsonValueKey(json) {
    let p = document.querySelector("p")
    p.innerHTML=json.city
}