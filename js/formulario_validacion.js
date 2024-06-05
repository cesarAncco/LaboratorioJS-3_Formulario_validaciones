// document.getElementById("miFormulario").addEventListener("submit", validar_campos)

// function validar_campos () {

// }

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.querySelectorAll('#formulario textarea');
const selects = document.querySelectorAll('#formulario select');
const radios = document.querySelectorAll('input[name="inputGenero"]');

const expresiones = {
  inputUsuario: /^[a-zA-Z0-9_]{4,16}$/,
  inputNombre: /^[A-Za-z\s]{4,50}$/,
  inputContrasena: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,50}$/,
  //inputRepetirContrasena: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,50}$/,
  inputCorreo:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  inputCelular: /^[+51]+[0-9]{9}$/,
  inputRuc: /[0-9]{11}$/,
  inputComentario: /^[a-zA-Z0-9]{1,100}$/
};

const campos = {
  inputUsuario: false,
  inputNombre: false,
  inputContrasena: false,
  inputRepetirContrasena: false,
  inputCorreo: false,
  inputCelular: false,
  inputRuc: false,
  inputComentario: false
};

const validarFormulario = (e) => {
  e.preventDefault();
  switch (e.target.name) {
    case "inputUsuario":
      validarCampo(expresiones.inputUsuario, e.target, 'inputUsuario');
      break;
    case "inputNombre":
      validarCampo(expresiones.inputNombre, e.target, 'inputNombre');
      break;
    case "inputContrasena":
      validarCampo(expresiones.inputContrasena, e.target, 'inputContrasena');
      break;
    case "inputRepetirContrasena":
      validarContrasena(e.target, 'inputRepetirContrasena');
      break;
    case "inputCorreo":
      validarCampo(expresiones.inputCorreo, e.target, 'inputCorreo');
      break;
    case "inputCelular":
      validarCampo(expresiones.inputCelular, e.target, 'inputCelular');
      break;
    case "inputRuc":
      validarCampo(expresiones.inputRuc, e.target, 'inputRuc');
      break;
    case "inputComentario":
      validarCampo(expresiones.inputComentario, e.target, 'inputComentario');
      break;
    case "inputCuidad":
      if(e.target.value !==''){
        document.getElementById('inputCuidad').classList.remove('is-invalid');
        document.getElementById('inputCuidad').classList.add('is-valid');
      } else {
        document.getElementById('inputCuidad').classList.remove('is-valid');
        document.getElementById('inputCuidad').classList.add('is-invalid');
      }
      break;
    case "inputImagen":
      if(e.target.value !==''){
        document.getElementById('inputImagen').classList.remove('is-invalid');
        document.getElementById('inputImagen').classList.add('is-valid');
      } else {
        document.getElementById('inputImagen').classList.remove('is-valid');
        document.getElementById('inputImagen').classList.add('is-invalid');    
      }
      break;
  }

}

const validarCampo = (expresion, input, campo) => {
  if(expresion.test(input.value)) {
    document.getElementById(`${campo}`).classList.add('is-valid');
    document.getElementById(`${campo}`).classList.remove('is-invalid');
    campos[campo] = true;
  } else{
    document.getElementById(`${campo}`).classList.add('is-invalid');
    document.getElementById(`${campo}`).classList.remove('is-ivalid');
    campos[campo] = false;
  }
}

const validarContrasena = (input, campo) => {
  let inputContrasena = document.getElementById("inputContrasena");
  if (input.value === inputContrasena.value && isNaN(input.value)) {
    document.getElementById(`${campo}`).classList.add('is-valid');
    document.getElementById(`${campo}`).classList.remove('is-invalid');
    campos[campo] = true;
  } else {
    document.getElementById(`${campo}`).classList.add('is-invalid');
    document.getElementById(`${campo}`).classList.remove('is-ivalid');
    campos[campo] = false;
  }
}

inputs.forEach((input) => {
  // input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario)
});

textarea.forEach((input) => {
  input.addEventListener('blur', validarFormulario)
});

selects.forEach((select) => {
  // console.log(select);
  select.addEventListener('blur' , validarFormulario);
});
