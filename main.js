    //pegar de dentro dos inputs, o value deles e atribuir a uma váriavel;
    let campoA = document.querySelector('#campoA');
    let campoB = document.querySelector('#campoB');

    let formEValido = false;


    function validando(a,b){
        if(a < b){
            return formEValido = true
        }
    }




    // anular o botao submit, por meio do prevent default
    const form = document.querySelector('.formulario');
    form.addEventListener('submit', function(){
      
       

        validando(campoA.value,campoB.value)

        if(formEValido){
            alert('campo validado')
            campoA.value = ''
            campoB.value = ''
        }else if (formEValido === false) {
            alert('campo não é válido')
            campoA.value = ''
            campoB.value = ''
        }
        

    });



