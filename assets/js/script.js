//Jquery FIle
//alert("entre al javascript");

$(document).ready(function()
{

//resaltar el icono al pasar el mouse sobre cada seccion de quienes somos
  $( "#resaltaqs1" ).hover(function() {$( this ).addClass( "text-danger" );}, function() {$( this ).removeClass( "text-danger" );})

  $( "#resaltaqs2" ).hover(function() {$( this ).addClass( "text-danger" );}, function() {$( this ).removeClass( "text-danger" );})

  $( "#resaltaqs3" ).hover(function() {$( this ).addClass( "text-danger" );}, function() {$( this ).removeClass( "text-danger" );})

    //Activar memsaje cuando se realice Click en boton Enviar Correo
    $('#enviarCorreo').click(function() {
        alert("El correo fue enviado correctamente...");
      });

}); //cierre del $(docuemnt)
