// document.addEventListener("DOMContentLoaded",()=>{

//     // getPokemon();
//     document.addEventListener('click',()=>{
       
//     })
// })

// function getPokemon(){
//     let button = document.querySelector("#button")
//     document.addEventListener("click",()=>{
//         let id=document.querySelector("#id")
//         let nom=document.querySelector("#nom")
//             fetch("pokemon.json")
//                 .then((response) => response.text())
//     })
// }
const pokemon = fetch("pokemon.json");
pokemon.then((response)=>{
    // console.log(response)
    const PokeData=response.json();
    // console.log(PokeData)
    PokeData.then((pokemon)=>{
        let button=document.querySelector("#button");
        button.addEventListener("click",function(e){
            e.preventDefault();
            // let nom=doucment.querySelector("#nom")
             let id=document.querySelector("#id")
        console.log(pokemon[id.value - 1])
        })
       
    })
})