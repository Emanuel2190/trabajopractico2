// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else {
            event.preventDefault();
            const numero = document.getElementById('cantidad').value;
            const parrafo = document.querySelector('#parrafo');
            parrafo.innerHTML = numero;            
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

//valor de ticket es constante
const valorTicket = 200;  

//porcentajes de descuentos
const descuentoEstudiante = 0.8;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.15;

//tomar valores
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoriaSelect');
const botonCalcular = document.getElementById('calcular');
const botonReset = document.getElementById('reset');
const parrafo = document.querySelector('p');

//funcion total pagar
function totalPagar(){

  let totalValor = (cantidad.value) * valorTicket;
  
  if (categoria.value == 1){
    totalValor = totalValor - (totalValor * descuentoEstudiante)
  }else if (categoria.value == 2){
    totalValor = totalValor - (totalValor * descuentoTrainee)
  }else if (categoria.value == 3){
    totalValor = totalValor - (totalValor * descuentoJunior)

  }
  parrafo.innerHTML = `Total a pagar: $${totalValor}`;

}
//boton calcular
botonCalcular.addEventListener('click',totalPagar);
//boton reset
botonReset.addEventListener('click',()=>{
  parrafo.textContent='Total a pagar: ';
});





