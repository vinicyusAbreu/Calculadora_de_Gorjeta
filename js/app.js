(function() {
    "use strict";
    const gasto = document.getElementById('gasto');
    const pessoas = document.getElementById('pessoas');
    const selecao = document.getElementById("selecao")
    const btn = document.querySelector(".containerBtn");
    const gorjeta = document.querySelector('.gorjeta')
        //R$10 de gorjeta para cada pessoa

    btn.addEventListener("click", calcularGorjeta)


    function calcularGorjeta() {
        if (gasto.value !== "") {
            if (pessoas.value == "") {
                pessoas.value = 1;
            }
            let total = (gasto.value * selecao.value) / pessoas.value;

            gorjeta.classList.add("show")
            gorjeta.textContent = `R$${(total).toFixed(2)} de gorjeta para cada pessoa`
            setTimeout(function() { gorjeta.classList.remove("show") }, 5000)
        }



    }

})()