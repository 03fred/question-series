

function teste() {
    var aux = 0;

    array = [];
    var resposta = $("#resposta").val();
    var resposta1 = $("#resposta1").val();
    var resposta2 = $("#resposta2").val();
    array = [resposta1, resposta, resposta2];

    //alert(array[0]+''+array[2]+''+array[1]);

    array.forEach(element => {
        if (element == 1) {
            aux++;
            console.log(aux);

        }

    });



    var image = `<img src="./img/naruto.png"/>`

    if (aux == 2 || aux > 2) {
        $("#image").append(image)
    } else {
        $("#image").empty();
    }


}