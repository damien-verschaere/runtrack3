$(document).ready(function(){
    $("p").hide()
    $("#button").click(function(){
        $("p").show()
        $("#hideall").click(function(){
            $("html").hide()
        })
    })
})