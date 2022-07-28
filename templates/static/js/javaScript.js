$(function() { //Inicio de la funcion que contendra nuestras validaciones
  
    $("form[name='registration']").validate({ //relacion con nuestro formulario en HTML
     
      rules: { // Campos/Id a revisar e intrucciones a cumplir 
        
        usuario:{ //id del campo nombre con la instruccion de ser oligatorio para el formulario
          required: true,
          
        },
  
        contraseña: { //id del campo apellido con la instruccion de ser oligatorio para el formulario
          required: true,
          
        },
  
        curso: { //id del campo apellido con la instruccion de ser oligatorio para el formulario
            required: true,
            
          },
       
      },
     
      messages: { //mensajes a mostrar su ni se cumplen o ingresan los datos requeridos en los campos
        usuario: {
          required:"Por favor, introduzca su usuario"
         }, //mensajes para el campo nombre
          
        contraseña: {
          required:"Por favor, introduzca su contraseña"//mensajes para el campo apellido
         },
        curso: {
          required:"Por favor, introduce un curso"//mensajes para el campo nombre
         },
      },
      submitHandler: function(form) {
        form.submit();
        
      }
    });
  });