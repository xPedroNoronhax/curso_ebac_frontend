let cadastrar = document.querySelector('form')
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let telefone = document.querySelector('#telefone');

cadastrar.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Formulário cadastrado.')
    nome.value = '';
    email.value = '';
    telefone.value = ''; 
})

$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000',{
        // placeholder:'(xx)xxxxx-xxxx'
    })
    
})