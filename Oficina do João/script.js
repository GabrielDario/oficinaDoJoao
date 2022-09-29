
//Abrir o dropdown da interface do calculo de serie
function abrirSerie() {
    fecharTudo();

    var serie = document.getElementById("serie");;
    serie.style.display = "block";
}
//Abrir o dropdown da interface do calculo do paralelo
function abrirPararelo() {
    fecharTudo();
    var pararelo = document.getElementById("pararelo");

    pararelo.style.display = "block";
}
//Abrir o dropdown da interface do calculo do misto
function abrirMisto() {
    fecharTudo();
    var misto = document.getElementById("misto")
    misto.style.display = "block";
}
//Abrir o dropdown da tabela de faixas dos resistores 
function abrirCores() {
    fecharTudo();
    var tabela = document.getElementById("tabela");
    var calcularRes = document.getElementById("calcularRes");

    tabela.style.display = "block";
    calcularRes.style.display = "block";
}

//Abrir o dropdown da interface do calculo da tensão e da corrente
function abrirMontar() {
    fecharTudo();
    var led = document.getElementById("led");
    led.style.display = "block";
}
function abrirCorrente() {
    fecharTudo();
    var corrente = document.getElementById("corrente");
    corrente.style.display = "block";
}
//Comando que permite quer as intrface sejam trocadas caso click em outra sendo assim fechando a anterior
function fecharTudo() {
    var serie = document.getElementById("serie");
    var pararelo = document.getElementById("pararelo");
    var misto = document.getElementById("misto");
    var tabela = document.getElementById("tabela");
    var calcularRes = document.getElementById("calcularRes");
    var led = document.getElementById("led");
    var corrente = document.getElementById("corrente");

    corrente.style.display = "none";
    tabela.style.display = "none";
    led.style.display = "none";
    serie.style.display = "none";
    pararelo.style.display = "none";
    misto.style.display = "none";
    calcularRes.style.display = "none";
}
//Codigo-calculo Serie
function calcularSerie() {
    //entrada-serie 
    //puxando os valores do html para o java scrip
    var serie1 = document.getElementById("serie1").value;
    var serie2 = document.getElementById("serie2").value;
    var serie3 = document.getElementById("serie3").value;
    var pSerie = document.getElementById("resultadoSerie");

    serie1 = Number(serie1);
    serie2 = Number(serie2);
    serie3 = Number(serie3);
    var resultadoSerie = Number(serie1 + serie2 + serie3);
    //saida-serie
    pSerie.textContent = `Resistência Equivalente =  ${resultadoSerie} Ω`;

}
//Codigo-calculo Misto
function calcularmisto() {
    //entrada-misto
    var mistoS = document.getElementById("mistoS1").value;
    var mistoP1 = document.getElementById("mistoP2").value;
    var mistoP2 = document.getElementById("mistoP3").value;
    var Mmisto = document.getElementById("resultadoMisto")

    mistoS = Number(mistoS);
    mistoP1 = Number(mistoP1);
    mistoP2 = Number(mistoP2);

    var RA = (1 / mistoP1) + (1 / mistoP2);
    RA = 1 / RA;
    RA = RA + mistoS;
    //saida-misto
    Mmisto.textContent = `Resistência Equivalente =  ${RA.toFixed(2)} Ω`;

}
//Codigo-calculo Paralelo
function calcularParalelo() {
    //entrada-paralelo
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
    //saida-paralelo
    pPararelo.textContent = `Resistência Equivalente =  ${resultadoParalelo.toFixed(2)} Ω`;

}

//Codigo-calculo Corrente
function calcularCorrente() {
    //entrada-corrente
    var tensao = document.getElementById("tensao1").value;
    var resistencia = document.getElementById("resistencia1").value;
    var valorCorrente = document.getElementById("valorCorrente");

    tensao = Number(tensao);
    resistencia = Number(resistencia);
    var corrente = tensao / resistencia;

    //saida-corrente
    valorCorrente.textContent = `Nesse circuito, o valor da corrente será de ${corrente.toFixed(2)} A`;

}
//Codigo-calculo Tensão
function calcularTensao() {
    //entrada-tensão
    var corrente = document.getElementById("corrente2").value;
    var resistencia = document.getElementById("resistencia2").value;
    var valorTensao = document.getElementById("valorTensao");

    corrente = Number(corrente);
    resistencia = Number(resistencia);
    var tensao = corrente * resistencia;

    //saida-tensão
    valorTensao.textContent = `Nesse circuito, o valor da Tensão será de ${tensao.toFixed(2)} V`;
}
//Codigo-calculo dimensionamento do led
function calcularResistorLed() {
    //entrada-dimensionamento do led
    var bateriaT = document.getElementById("bateriaT").value;
    var ledT = document.getElementById("ledT").value;

    var volts = document.getElementById("volts");
    var bolinha = document.getElementById("bolinha");
    var LedOn = document.getElementById("ledLig");
    var ledOff = document.getElementById("ledDesl");
    var valorResistor = document.getElementById("valorResistor");

    bateriaT = Number(bateriaT);
    ledT = Number(ledT);
    var corrente = Number(0.020);

    var resistencia = (bateriaT - ledT) / corrente;
    if (resistencia < 0) {
        valorResistor.textContent = `O Circuito não tem energia suficiente para ligar`;
        bolinha.style.color = "white";
        LedOn.style.display = "none";
        ledOff.style.display = "initial";
    } else {
        valorResistor.textContent = `Você precisa de um resistor de ${resistencia.toFixed(2)} Ω`;
        volts.textContent = `${bateriaT} V`;
        ledOff.style.display = "none";
        LedOn.style.display = "initial";
        verificarCor();
    }
}
//Mostra o led na interface quando o resultado for enviado
function verificarCor() {
    if (ledT.value == 1.8) {
        bolinha.style.color = "red";
        console.log(ledT.value);
    } if (ledT.value == 2) {
        bolinha.style.color = "yellow";
        console.log(ledT.value);
    }
    if (ledT.value == 2.5) {
        bolinha.style.color = "green";
        console.log(ledT.value);
    }
    if (ledT.value == 3) {
        bolinha.style.color = "blue";
        console.log(ledT.value);
    }


}
//Codigo-Calculo da faixas dos resistores
function calcularResistor() {
    //entrada-tabela de faixas
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

    if (calculo >= 1000 && calculo < 1000000) {
        calculo = calculo / 1000
        pResistor.textContent = ` ${calculo}k Ω com ${faixa4 * 100}% de tolerância`;
        pResistor2.textContent = `Entre ${min.toFixed(2)} Ω e ${max.toFixed(2)} Ω`;
    } else if (calculo >= 1000000) {
        calculo = calculo / 1000000
        pResistor.textContent = ` ${calculo}M Ω com ${faixa4 * 100}% de tolerância`;
        pResistor2.textContent = `Entre ${min.toFixed(2)} Ω e ${max.toFixed(2)} Ω`;

    } else {
        //saida-tabela de faixas
        pResistor.textContent = ` ${calculo.toFixed(2)} Ω com ${faixa4 * 100}% de tolerância`;
        pResistor2.textContent = `Entre ${min.toFixed(2)} Ω e ${max.toFixed(2)} Ω`;
    }
}
