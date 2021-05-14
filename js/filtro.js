var filtro = document.querySelector("#filtro-paciente");

filtro.addEventListener("input",function() {
    var pacientesTd = document.querySelectorAll(".info-nome");
    pacientesTd.forEach( function(nome) {
        var pacienteTr = nome.parentNode;
        if(filtro.value.length > 0) {
            var exp = new RegExp(filtro.value, "i");
            if(!exp.test(nome.textContent)) {
                pacienteTr.classList.add("invisivel");
            }
            else {
                pacienteTr.classList.remove("invisivel");
            } 
        }   
        else {
            pacienteTr.classList.remove("invisivel");
        }
    });
});