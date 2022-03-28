let counter = 0;

$(document).ready(function () {
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");

});

$("#add").click(function(){
    counter++;
    $("#counter").text(counter);
    color();
});

$("#low").click(function(){
    counter--;
    $("#counter").text(counter);
    color();
});

function color() {
   if(counter < 0) {
    $("#counter").addClass("negativo");
   }
   else if (counter > 0){
    $("#counter").addClass("positivo");
    $("#counter").removeClass("negativo");
   }
   else {
    $("#counter").removeClass("negativo");
    $("#counter").removeClass("positivo");
   }
    
}
