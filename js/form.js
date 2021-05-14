// como pegar informacoes do form e adicionar na tela coisa novas
function ObtemDadosDoForm(form) {
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)       
}
    return paciente;
}

function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    
    return pacienteTr;
}

function validaPaciente(paciente) {
    var erros = [];
    
    if(paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco ");
    }
    if(!validaAltura(paciente.altura)) {
       erros.push("Altura inválida");
    }
    if(!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }
    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco ");
    }
    if(paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco ");
    }
    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco ");
    }
     
    return erros;
}

function exibeMensagemErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
       
        var li =document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
       
        
    });
}

function addPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
   var add_na_Tabela = document.querySelector("#tabela-pacientes");
   add_na_Tabela.appendChild(pacienteTr);
}

var form = document.querySelector("#form-adicionar");
var btn =  document.querySelector("#adicionar-paciente");


btn.addEventListener("click",function (event) {
    event.preventDefault();
    var paciente = ObtemDadosDoForm(form);
    var erros = validaPaciente(paciente);
    if(erros.length > 0) {
        exibeMensagemErro(erros);
        return; // sai da funcao e n retorna nd
    }
    //adicionando dados na tabela
    addPacienteNaTabela(paciente);
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
     
   

});







    






