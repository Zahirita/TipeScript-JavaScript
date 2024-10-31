var Tribu_A = {
    puntos: 0
};
var Tribu_B = {
    puntos: 0
};
var Handball_Imput_Tribu_A = document.getElementById('Handball_Input_Tribu_A');
var Ajedrez_Input_Tribu_A = document.getElementById('Handball_Input_Tribu_A');
var Resistencia_Imput_Tribu_A = document.getElementById('Handball_Input_Tribu_A');
var Handball_Imput_Tribu_B = document.getElementById('Handball_Input_Tribu_B');
var Ajedrez_Input_Tribu_B = document.getElementById('Handball_Input_Tribu_B');
var Resistencia_Imput_Tribu_B = document.getElementById('Handball_Input_Tribu_B');
var OutPutPuntajeA = document.getElementById('PuntajeA');
var OutPutPuntajeB = document.getElementById('PuntajeA');
var TribuGanadora = document.getElementById('EquipoGanador');
function contar() {
    var Valor_A_Ingresado_Resistencia = parseInt(Resistencia_Imput_Tribu_A.value, 10);
    var Valor_A_Ingresado_Ajedrez = parseInt(Ajedrez_Input_Tribu_A.value, 10);
    var Valor_A_Ingresado_Handball = parseInt(Handball_Imput_Tribu_A.value, 10);
    var Valor_B_Ingresado_Resistencia = parseInt(Resistencia_Imput_Tribu_B.value, 10);
    var Valor_B_Ingresado_Ajedrez = parseInt(Ajedrez_Input_Tribu_B.value, 10);
    var Valor_B_Ingresado_Handball = parseInt(Handball_Imput_Tribu_B.value, 10);
    Tribu_A.puntos += Valor_A_Ingresado_Resistencia + Valor_A_Ingresado_Ajedrez + Valor_A_Ingresado_Handball;
    Tribu_B.puntos += Valor_B_Ingresado_Resistencia + Valor_B_Ingresado_Ajedrez + Valor_B_Ingresado_Handball;
    OutPutPuntajeA.innerText += Tribu_A.puntos.toString();
    OutPutPuntajeB.innerText += Tribu_B.puntos.toString();
    if (Tribu_A.puntos > Tribu_B.puntos) {
        TribuGanadora.innerText += 'Tribu_A';
    }
}
