 //LOGIN

  $("#username").focus();

 $("#login-button").click(function(event){
	event.preventDefault();
  
    var form_data = {username: $("#username").val(), password: $("#password").val()};
    //console.log("form_data: "+form_data);
    
    $.ajax({
      url: '/login', type: 'POST', contentType: 'application/json', 
      data: JSON.stringify(form_data),
      success: function(response)
        {
                      // console.log("response: "+response);
          if(response != 0){

              var redireccion = "window.location.href="+response.servicio;
                      //console.log("redireccion: "+redireccion);
              setTimeout(redireccion, 2000);
              
          } else {
            $('#message').css("display", "block");
            //$("#message").html("Password incorrecto."); 
          };

      }
    });
    
    return false;
  });

//   //USAR ENTER EN VEZ TENER QUE PRESIONAR EL BOTÓN
//   $("#username").keyup(function(event){
//     if(event.keyCode == 13){
//         $("#login-button").click();
//     }
//   });
//   $("#password").keyup(function(event){
//     if(event.keyCode == 13){
//         $("#login-button").click();
//     }
//   });
  
//   //BARRA AVISO COOKIES

//   function getCookie(c_name){
//   var c_value = document.cookie;
//   var c_start = c_value.indexOf(" " + c_name + "=");
//   if (c_start == -1){
//     c_start = c_value.indexOf(c_name + "=");
//   }
//   if (c_start == -1){
//     c_value = null;
//   }else{
//     c_start = c_value.indexOf("=", c_start) + 1;
//     var c_end = c_value.indexOf(";", c_start);
//     if (c_end == -1){
//       c_end = c_value.length;
//     }
//     c_value = unescape(c_value.substring(c_start,c_end));
//   }
//   return c_value;
// }

// function setCookie(c_name,value,exdays){
//   var exdate=new Date();
//   exdate.setDate(exdate.getDate() + exdays);
//   var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
//   document.cookie=c_name + "=" + c_value;
// }

// if(!getCookie('isowin_al')){
//   document.getElementById("barCookies").style.display="block";
// }

// function PonerCookie(){
//   setCookie('isowin_al','1',365);
//   document.getElementById("barCookies").style.display="none";
// }
