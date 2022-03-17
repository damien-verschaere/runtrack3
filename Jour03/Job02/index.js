$(document).ready(()=>{
    $('#button').click(melange);
}
)

function melange(){
    let randomTable = TableauRandom();
    
    $("#melangees").empty();
    $("#rangees").empty();

    randomTable.forEach(i => {
        $(`<img id='arc${i}' src='image/arc${i}.png'>`).appendTo("#melangees");
        $(`#arc${i}`).click(function(event){
            passageDiv(this);
            victoire();
        })
    });
}

function passageDiv(element){
    if(element.parentNode.id == 'melangees'){
        $(element).appendTo('#rangees');
    } else {
        $(element).appendTo('#melangees');
    }
}

function TableauRandom(){
    let randomTable = [];
    while (randomTable.length<6) {
        let rdNumber = Math.trunc(Math.random()*7);
        if(!randomTable.includes(rdNumber) && rdNumber>0){
            randomTable.push(rdNumber);
        }
    }
    return randomTable;
}

function victoire(){
    let imgList = document.querySelector('#rangees').childNodes;
    $('#msg').remove();
    if(imgList.length == 6){
        let counter = 1;
        imgList.forEach(element => {
            if(element.id.replace('arc','') == counter){
                counter++
            }
        });
        if(counter == 7){
            $('<h1 id="msg">Vous avez gagné</h1>').appendTo("body");
        } else {
            $('<h1 id="msg">Vous avez perdu</h1>').appendTo("body");
        }
    }
}