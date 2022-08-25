var px = 0;
var py = 0;

document.addEventListener("keydown", function(event)
{
    var obj = document.getElementById("mario_sprite")
    var tecla = event.key

        // console.log(event.key); <=== Mapeia qual tecla foi clicada
    if(tecla == "ArrowRight"){
        px +=10;
        obj.style.left = px +"px"
    } else if(tecla == "ArrowLeft"){
        px -=10;
        obj.style.left = px +"px"
    }
});
