var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event) {
    var alvo = event.target;
    var paiDoAlvo = alvo.parentNode;
    paiDoAlvo.classList.add("fadeOut");
    setTimeout(function() {
        paiDoAlvo.remove();
    },500)
  
});
    
