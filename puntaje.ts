interface puntaje{
    puntos : number;
}
let Tribu_A : puntaje = {
    puntos : 0
}
let Tribu_B : puntaje = {
    puntos : 0
}

const Handball_Imput_Tribu_A = document.getElementById('Handball_Input_Tribu_A')as HTMLInputElement;
const Ajedrez_Input_Tribu_A= document.getElementById('Handball_Input_Tribu_A')as HTMLInputElement;
const Resistencia_Imput_Tribu_A = document.getElementById('Handball_Input_Tribu_A')as HTMLInputElement;

const Handball_Imput_Tribu_B = document.getElementById('Handball_Input_Tribu_B')as HTMLInputElement;
const Ajedrez_Input_Tribu_B= document.getElementById('Handball_Input_Tribu_B')as HTMLInputElement;
const Resistencia_Imput_Tribu_B = document.getElementById('Handball_Input_Tribu_B')as HTMLInputElement;

const OutPutPuntajeA = document.getElementById('PuntajeA') as HTMLInputElement;
const OutPutPuntajeB = document.getElementById('PuntajeA') as HTMLInputElement;

const TribuGanadora = document.getElementById('EquipoGanador') as HTMLInputElement;

function contar(): void {
    let Valor_A_Ingresado_Resistencia: number = parseInt(Resistencia_Imput_Tribu_A.value, 10);
    let Valor_A_Ingresado_Ajedrez: number = parseInt(Ajedrez_Input_Tribu_A.value, 10);
    let Valor_A_Ingresado_Handball: number = parseInt(Handball_Imput_Tribu_A.value, 10);

    let Valor_B_Ingresado_Resistencia: number = parseInt(Resistencia_Imput_Tribu_B.value, 10); 
    let Valor_B_Ingresado_Ajedrez: number = parseInt(Ajedrez_Input_Tribu_B.value, 10);
    let Valor_B_Ingresado_Handball: number = parseInt(Handball_Imput_Tribu_B.value, 10);

    Tribu_A.puntos += Valor_A_Ingresado_Resistencia + Valor_A_Ingresado_Ajedrez + Valor_A_Ingresado_Handball;
    Tribu_B.puntos += Valor_B_Ingresado_Resistencia + Valor_B_Ingresado_Ajedrez + Valor_B_Ingresado_Handball;

    OutPutPuntajeA.innerText += Tribu_A.puntos.toString()
    OutPutPuntajeB.innerText += Tribu_B.puntos.toString()

    if (Tribu_A.puntos>Tribu_B.puntos){
        TribuGanadora.innerText += 'Tribu_A';
    }

}

