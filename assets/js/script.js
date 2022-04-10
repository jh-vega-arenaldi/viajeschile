//Jquery FIle
//alert("entre al javascript");

$(document).ready(function()
{

//resaltar el texto al pasar el mouse sobre el texto de quienes somos
  $( "#resalta-qs1" ).hover(function() {$( this ).addClass( "text-primary" );}, function() {$( this ).removeClass( "text-danger" );})
  $( "#resalta-qs2" ).hover(function() {$( this ).addClass( "text-success" );}, function() {$( this ).removeClass( "text-danger" );})
  $( "#resalta-qs3" ).hover(function() {$( this ).addClass( "text-warning" );}, function() {$( this ).removeClass( "text-danger" );})

    //Activar memsaje cuando se realice Click en boton Enviar Correo
    $('#enviarCorreo').click(function() {
        alert("El correo fue enviado correctamente...");
      });

}); //cierre del $(docuemnt)
