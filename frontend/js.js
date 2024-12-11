$("#button-blue").on("click", function() {
    
    var txt_nome = $("#name").val();
    var txt_email = $("#email").val();
    var txt_comentario = $("#comment").val();

    $.ajax({
        url: "http://172.25.41.167:30005/",
        
        type: "post",
        data: {nome: txt_nome, mensagem: txt_comentario, email: txt_email},
        beforeSend: function() {
        
            console.log("Tentando enviar os dados....");

        }
    }).done(function(e) {
        alert("Dados Salvos");
    })

});