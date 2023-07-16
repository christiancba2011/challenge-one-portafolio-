//Haz tú validación en javascript acá
//  const btnEnviar = document.getElementById('btn-enviar');

//  const validación = (e) => {
//    e.preventDefault();
//    const nombredeusuario = document.getElementById('nombre');
//    const direcciónEmail = document.getElementById('email');
//    if (nombre.value === "") {
//      alert("Por favor, escribe tu nombre de usuario.");
//      nombre.focus();
//      return false;
//    }
    
//    if (email.value === "") {
//     alert("Por favor, escribe tu correo electrónico");
//      email.focus();
//      return false;
//    }

//    if (!emailVálido(email.value)) {
//      alert("Por favor, escribe un correo electrónico válido");
//      emailAddress.focus();
//      return false;
//    }
  
//    return true; //Se pueden enviar los datos del formulario al servidor
//  }

//  const emailVálido = email => {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//  }

//  submitBtn.addEventListener('click', validate);

//VARIABLES PARA LEER EL FORM Y LOS INPUTS DE CONTACTO
var form = document.getElementById("form");
var nombre = document.getElementById("nombre");
var correo = document.getElementById("correoelectronico");
var asunto = document.getElementById("asunto");
var mensaje = document.getElementById("mensaje");

//CÓDIGO PARA CONTAR LOS CARACTERES DEL INPUT NOMBRE EN CONTACTO
var nombreResult = document.getElementById("nombre-counter");
var nombreLimit = 50;
nombreResult.textContent = 0 + "/" + nombreLimit;

nombre.addEventListener("input", function(){
    var nombreLength = nombre.value.length;
    var errorNombre = document.querySelector('.contact__error--nombre');
    nombreResult.textContent = nombreLength + "/" + nombreLimit;

    if(nombreLength > nombreLimit){
        errorNombre.innerText = 'El nombre debe tener máximo 50 caracteres';
        nombre.style.borderColor = "#FF2851";
        nombreResult.style.color = "#FF2851";
    }
    else{
        errorNombre.innerText = '';
        nombre.style.borderColor = "#f0f0f0";
        nombreResult.style.color = "var(--color-cenizo56)";
    }
});

//CÓDIGO PARA CONTAR LOS CARACTERES DEL INPUT ASUNTO EN CONTACTO
var asuntoResult = document.getElementById("asunto-counter");
var asuntoLimit = 50;
asuntoResult.textContent = 0 + "/" + asuntoLimit;

asunto.addEventListener("input", function(){
    var asuntoLength = asunto.value.length;
    var errorAsunto = document.querySelector('.contact__error--asunto');
    asuntoResult.textContent = asuntoLength + "/" + asuntoLimit;

    if(asuntoLength > asuntoLimit){
        errorAsunto.innerText = 'El asunto debe tener máximo 50 caracteres';
        asunto.style.borderColor = "#FF2851";
        asuntoResult.style.color = "#FF2851";
    }
    else{
        errorAsunto.innerText = '';
        asunto.style.borderColor = "#f0f0f0";
        asuntoResult.style.color = "var(--color-cenizo56)";
    }
});

//CÓDIGO PARA CONTAR LOS CARACTERES DEL TEXT AREA MENSAJE EN CONTACTO
var mensajeResult = document.getElementById("mensaje-counter");
var mensajeLimit = 300;
mensajeResult.textContent = 0 + "/" + mensajeLimit;

mensaje.addEventListener("input", function(){
    var mensajeLength = mensaje.value.length;
    var errorMensaje = document.querySelector('.contact__error--mensaje');
    mensajeResult.textContent = mensajeLength + "/" + mensajeLimit;

    if(mensajeLength > mensajeLimit){
        errorMensaje.innerText = 'El mensaje debe tener máximo 300 caracteres';
        mensaje.style.borderColor = "#FF2851";
        mensajeResult.style.color = "#FF2851";
    }
    else{
        errorMensaje.innerText = '';
        mensaje.style.borderColor = "#f0f0f0";
        mensajeResult.style.color = "var(--color-cenizo56)";
    }
});

//SE ELIMINA EL EVENTO SUBMIT
form.addEventListener('submit', e => {
    e.preventDefault();
});

//CÓDIGO PARA ENVIAR DATOS DE CONTACTO A TRAVÉS DE EMAILJS
function sendMail() {
    if(asunto.value != '' &&
       nombre.value != '' &&
       correo.value != '' &&
       mensaje.value != '' &&
       asunto.value.length <= asuntoLimit &&
       nombre.value.length <= nombreLimit &&
       mensaje.value.length <= mensajeLimit){
        var params = {
            subject: asunto.value,
            name: nombre.value,
            email: correo.value,
            message: mensaje.value
        };
    
        const serviceID = "service_lk5064b";
        const templateID = "template_d6ybiph";
    
        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                console.log(res);
                alert("Se ha enviado tu mensaje con éxito");
                asunto.value = '';
                nombre.value = '';
                correo.value = '';
                mensaje.value = '';
                nombreResult.textContent = 0 + "/" + nombreLimit;
                asuntoResult.textContent = 0 + "/" + asuntoLimit;
                mensajeResult.textContent = 0 + "/" + mensajeLimit;
            })
            .catch((err) => console.log(err));
    }
};


