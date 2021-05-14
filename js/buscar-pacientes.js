function teste(texto) {
    console.log(texto);
}
var btnBuscar = document.querySelector("#buscar-pacientes");
btnBuscar.addEventListener("click",function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    var erroAJAX = document.querySelector("#erro-ajax")
    xhr.addEventListener("load", function() {
        if(xhr.status == 200) {
            erroAJAX.classList.add("invesivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach( function(paciente) {
            addPacienteNaTabela(paciente);
        });
        }
        else {
            erroAJAX.classList.remove("invisivel");

        }
    }); 

    xhr.send();
});
   




