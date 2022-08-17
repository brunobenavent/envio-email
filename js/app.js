//Variables
const formulario = document.querySelector('#enviar-mail');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//Cargar los eventos
cargarEventListeners();
function cargarEventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarAPP);
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

}

//funciones
function iniciarAPP(){
formulario.reset();
console.log('documento listo')
}
function validarFormulario(e){
    if(e.target.value.length === 0 ){
        mostrarMensaje('todos los campos son obligatorios');
        e.target.classList.remove('border-green-600');
        e.target.classList.add('border-red-600');
       
    }else{
        e.target.classList.remove('border-red-600');
        e.target.classList.add('border-green-600');
        const parrafo = document.querySelector('.error');
        parrafo.remove();
    };
    if(e.target.type==="email"){
        if(er.test(e.target.value)){
            e.target.classList.remove('border-red-600');
            e.target.classList.add('border-green-600');
            const parrafo = document.querySelector('.error');
            parrafo.remove();
        }else{
            mostrarMensaje('Introduce un email válido');
            e.target.classList.remove('border-green-600');
            e.target.classList.add('border-red-600');
        }
    }

}

function mostrarMensaje(mensaje){
    const errores = document.querySelectorAll('.error');
    console.log(errores);
    if(errores.length === 0){
        const parrafo = document.createElement('p');
        parrafo.textContent = mensaje;
        formulario.appendChild(parrafo);
        parrafo.classList.add('bg-red-600', 'font-bold', 'uppercase', 'mt-6', 'text-center', 'text-white', 'p-2','error');
    }
    
}