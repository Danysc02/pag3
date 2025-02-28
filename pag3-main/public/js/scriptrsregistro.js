'use strict';

const formulario= document.getElementById('formulario')

formulario.addEventListener('submit',(e)=> {
    e.preventDefault();
const datos= new FormData (formulario);
datos.get('nombre')
datos.get('apellidos')
datos.get('fechaNacimiento')
datos.get('email')
datos.get('contraseña')

console.log(datos.get('nombre'))
console.log(datos.get('apellidos'))
console.log(datos.get('fechaNacimiento'))
console.log(datos.get('email'))
console.log(datos.get('contraseña'))

alert('Formulario enviado');
console.log(datos);
})

