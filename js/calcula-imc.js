//introdução
var titulo = document.querySelector(".titulo");
titulo.textContent = "Luiza Care";

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso/(altura * altura);
    return imc.toFixed(2);
      
}
function validaPeso(peso) {
    if(peso >= 0 && peso <=1000) {
        return true;
    }
    else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >=0 && altura <=3) {
        return true;
    }
    else {
        return false;
    }
}
// calculo do imc e como pegar coisas da tela
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0;i < pacientes.length;i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = parseFloat(tdPeso.textContent);

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = parseFloat(tdAltura.textContent);

    var tdImc = paciente.querySelector(".info-imc");

    // validação
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido) {
        tdImc.textContent = "Peso Inválido!";
        pesoValido = false;
    // paciente.classList.add("paciente-invalido");
        tdPeso.classList.add("paciente-invalido");
        tdImc.classList.add("paciente-invalido");   
}
    if(!alturaValida) {
        console.log("Altura Inválida!");
        tdImc.textContent = "Altura Inválida!";
        alturaValida = false;
        tdAltura.classList.add("paciente-invalido");
        tdImc.classList.add("paciente-invalido");
    }
    if(alturaValida == false && pesoValido == false) {
        tdImc.textContent = "Altura e peso inválidos!"
    }
    if(pesoValido && alturaValida) {
        tdImc.textContent = calculaImc(peso,altura);
    }
}



