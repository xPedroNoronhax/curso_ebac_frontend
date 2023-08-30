$(document).ready(function(){

    //Mascaras
    $('#telefone').mask('(00)00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000')

    //Validação
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required:true
            },
            endereco: {
                required:true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            email:'Por favor, insira seu e-mail',
            telefone:'Por favor, insira seu telefone',
            cpf:'Por favor, insira seu CPF',
            endereco:'Por favor, insira seu endereço',
            cep:'Por favor, insira seu CEP',
        }
    })


})