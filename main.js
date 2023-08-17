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
    form.addEventListener('submit', function(e){
        e.preventDefault();
        campoA = campoA.value
        campoB =campoB.value

        validando(campoA,campoB)

        if(formEValido){
            alert('Campo validado com sucesso')
        } else{
            alert('campo não foi validado, tente novamente')
        }
        

    });



