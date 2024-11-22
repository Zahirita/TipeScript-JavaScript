interface Puntaje {
    puntos: number;
}

let Tribu_A: Puntaje = {
    puntos: 0
}
let Tribu_B: Puntaje = {
    puntos: 0
}

const Handball_Input_Tribu_A = document.getElementById('Handball_Input_Tribu_A') as HTMLInputElement;
const Ajedrez_Input_Tribu_A = document.getElementById('Ajedrez_Input_Tribu_A') as HTMLInputElement;
const Resistencia_Input_Tribu_A = document.getElementById('Resistencia_Input_Tribu_A') as HTMLInputElement;

const Handball_Input_Tribu_B = document.getElementById('Handball_Input_Tribu_B') as HTMLInputElement;
const Ajedrez_Input_Tribu_B = document.getElementById('Ajedrez_Input_Tribu_B') as HTMLInputElement;
const Resistencia_Input_Tribu_B = document.getElementById('Resistencia_Input_Tribu_B') as HTMLInputElement;

const OutPutPuntajeA = document.getElementById('PuntajeA') as HTMLElement;
const OutPutPuntajeB = document.getElementById('PuntajeB') as HTMLElement;

const TribuGanadora = document.getElementById('EquipoGanador') as HTMLElement;

function sumar(): void {
    // Obtener valores de los inputs
    let Valor_A_Ingresado_Resistencia: number = parseInt(Resistencia_Input_Tribu_A.value, 10) || 0;
    let Valor_A_Ingresado_Ajedrez: number = parseInt(Ajedrez_Input_Tribu_A.value, 10) || 0;
    let Valor_A_Ingresado_Handball: number = parseInt(Handball_Input_Tribu_A.value, 10) || 0;

    let Valor_B_Ingresado_Resistencia: number = parseInt(Resistencia_Input_Tribu_B.value, 10) || 0;
    let Valor_B_Ingresado_Ajedrez: number = parseInt(Ajedrez_Input_Tribu_B.value, 10) || 0;
    let Valor_B_Ingresado_Handball: number = parseInt(Handball_Input_Tribu_B.value, 10) || 0;

    // Calcular puntos para cada tribu
    Tribu_A.puntos = Valor_A_Ingresado_Resistencia + Valor_A_Ingresado_Ajedrez + Valor_A_Ingresado_Handball;
    Tribu_B.puntos = Valor_B_Ingresado_Resistencia + Valor_B_Ingresado_Ajedrez + Valor_B_Ingresado_Handball;

    // Actualizar el texto del puntaje en el HTML
    OutPutPuntajeA.innerText = Tribu_A.puntos.toString();
    OutPutPuntajeB.innerText = Tribu_B.puntos.toString();

    // Determinar el ganador
    if (Tribu_A.puntos > Tribu_B.puntos) {
        TribuGanadora.innerText = 'Tribu_A';
    } else if (Tribu_A.puntos < Tribu_B.puntos) {
        TribuGanadora.innerText = 'Tribu_B';
    } else {
        TribuGanadora.innerText = 'Empate';
    }
}


