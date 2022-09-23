

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function abrirSerie() {
    var serie = document.getElementById("serie");
    var serieCont = document.getElementById("serieConteudo");
    var pararelo = document.getElementById("pararelo");
    var misto = document.getElementById("misto");
    var tabela = document.getElementById("tabela");
    var calcularRes = document.getElementById("calcularRes");

    tabela.style.display = "none";
    serieCont.style.display = "none";
    serie.style.display = "block";
    pararelo.style.display = "none";
    misto.style.display = "none";
    calcularRes.style.display = "none";
}
function verResSerie() {
    var series = document.getElementById("series").value;
    var serieCont = document.getElementById("serieConteudo");
    var serie1 = document.getElementById("serie1cont");
    var serie2 = document.getElementById("serie2cont");
    var serie3 = document.getElementById("serie3cont");
    serieCont.style.display = "block";

    series = Number(series);
    if(series == 1) {
        
        serie1.style.display = "block";
        serie2.style.display = "none";
        serie3.style.display = "none";
    }
    if(series == 2) {
        serie1.style.display = "none";
        serie2.style.display = "block";
        serie3.style.display = "none";
    }
    if(series == 3) {
        serie1.style.display = "none";
        serie2.style.display = "none";
        serie3.style.display = "block";

    }
}


function abrirPararelo() {


    var serie = document.getElementById("serie");
    var pararelo = document.getElementById("pararelo");
    var misto = document.getElementById("misto")
    var tabela = document.getElementById("tabela");
    var calcularRes = document.getElementById("calcularRes");

    serie.style.display = "none";
    pararelo.style.display = "block";
    tabela.style.display = "none";
    misto.style.display = "none";
    calcularRes.style.display = "none";
}
function abrirMisto() {

    var serie = document.getElementById("serie");
    var pararelo = document.getElementById("pararelo");
    var misto = document.getElementById("misto")
    var tabela = document.getElementById("tabela");
    var calcularRes = document.getElementById("calcularRes");

    serie.style.display = "none";
    pararelo.style.display = "none";
    tabela.style.display = "none";
    misto.style.display = "block";
    calcularRes.style.display = "none";
}
function abrirCores() {

    var serie = document.getElementById("serie");
    var pararelo = document.getElementById("pararelo");
    var misto = document.getElementById("misto")
    var tabela = document.getElementById("tabela");
    var calcularRes = document.getElementById("calcularRes");

    tabela.style.display = "block";
    calcularRes.style.display = "block";
    serie.style.display = "none";
    misto.style.display = "none";
    pararelo.style.display = "none";


}
function calcularSerie() {

    var serie1 = document.getElementById("serie31").value;
    var serie2 = document.getElementById("serie32").value;
    var serie3 = document.getElementById("serie33").value;
    var pSerie = document.getElementById("resultadoSerie");

    serie1 = Number(serie1);
    serie2 = Number(serie2);
    serie3 = Number(serie3);
    var resultadoSerie = Number(serie1 + serie2 + serie3);
    pSerie.textContent = resultadoSerie + " Ω";

}
function calcularmisto(){

    var mistoS = document.getElementById("mistoS1").value;
    var mistoP1 = document.getElementById("mistoP2").value;
    var mistoP2 = document.getElementById("mistoP3").value;
    var Mmisto = document.getElementById("resultadoMisto")
    
    mistoS = Number(mistoS);
    mistoP1 = Number(mistoP1);
    mistoP2 = Number(mistoP2);
    var RA = (mistoP1 * mistoP2) / (mistoP1 + mistoP2)
    var RA = RA + mistoS
    Mmisto.textContent = RA.toFixed(4) + " Ω";
    
}


function calcularParalelo() {
    console.info("Foi");

    var pararelo1 = document.getElementById("paralelo1").value;
    var pararelo2 = document.getElementById("paralelo2").value;
    var pararelo3 = document.getElementById("paralelo3").value;
    var pPararelo = document.getElementById("resultadoParalelo");

    pararelo1 = Number(pararelo1);
    pararelo2 = Number(pararelo2);
    pararelo3 = Number(pararelo3);
    var resultadoParalelo = Number(resultadoParalelo);
    resultadoParalelo = (1 / pararelo1) + (1 / pararelo2) + (1 / pararelo3);
    resultadoParalelo = 1 / resultadoParalelo;
    pPararelo.textContent = resultadoParalelo.toFixed(2) + " Ω";

}
function calcularResistor() {
    var faixa1 = document.getElementById("faixa1").value;
    var faixa2 = document.getElementById("faixa2").value;
    var faixa3 = document.getElementById("faixa3").value;
    var faixa4 = document.getElementById("faixa4").value;

    var pResistor = document.getElementById("resultadoResistor");
    var pResistor2 = document.getElementById("resultadoResistor2");

    var conc = faixa1 + faixa2;
    conc = Number(conc);
    console.log(faixa3);
    faixa3 = Number(faixa3);
    
    var max = Number(max);
    var min = Number(min);
    
    var calculo = conc * faixa3;
    max = (calculo * faixa4) + calculo
    min = calculo - (calculo * faixa4)
  


 
    pResistor.textContent = ` ${calculo} Ω com ${faixa4 * 100}% de tolerância`;
    pResistor2.textContent = `Entre ${min} e ${max}`;
}
