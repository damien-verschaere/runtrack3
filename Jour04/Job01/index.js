
// document.addEventListener('click', event => {
//     fetch("expression.txt")
//         .then(response => response.json())
//         .then(response => document.write(JSON.stringify(response)))
//         .catch(error => alert("Erreur : " + error));

// })

window.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelector("#button")
    let p = document.querySelector("p")
    button.addEventListener("click", () => {
        fetch("expression.txt")
            .then((response) => response.text())
            .then((response) => {
            p.innerHTML = response
            })
    })

})