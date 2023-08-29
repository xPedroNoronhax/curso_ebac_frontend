$(document).ready(function(){
    //deixar o botao cadastrar com evento default
    $('form').on('submit', function(e){
        e.preventDefault();
        //criar uma constante que ira capturar o valor da tarefa a ser add.
        const novaTarefa = $('#nova-tarefa').val();
        const escreve = ''
        // criar uma constante para adicionar o item a ul
        const novoItem = $('<li></li>').text(novaTarefa);
        $(novoItem).appendTo('ul')
        $('#nova-tarefa').val('')

    })

    $('ul').on('click', 'li',function(){
        $(this).css('text-decoration','line-through')
    })

})