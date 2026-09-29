// Videojuego acumulacion de experiencia


let nombre = prompt("Ingrese el nombre del jugador");

let experiencia = 0;
let misiones = 0;
let continuar = "si";

while (continuar == "si") {

    let puntos = Number(prompt("Ingrese los puntos de experiencia obtenidos"));

    experiencia = experiencia + puntos;
    misiones = misiones + 1;

    continuar = prompt("¿Desea registrar otra misión? si/no");
}

let nivel;

if(experiencia<500){
    nivel="Novato"
}else if(experiencia >=500 && experiencia <=999){
    nivel="Avanzado"
}else if(experiencia >=1000 && experiencia <=1999){
    nivel="Experto"
}else{
    nivel="Leyenda"
}

document.write(`
    Nombre del jugador: ${nombre}<br>
    Misiones completadas: ${misiones}<br>
    Experiencia total: ${experiencia}<br>
    Nivel alcanzado: ${nivel}
`);

// Equipos
/*
let equipo1= prompt("Ingrese el nomnre del primer equipo");
let equipo2= prompt("Ingrese el nombre del segundo equipo");

let goles1= Number(prompt("Ingrese los goles de" + equipo1));
let goles2= Number(prompt("Ingrese los goles de" + equipo2));

let resultado;
let diferencia;

let puntos1;
let puntos2;

if(goles1>goles2){
    
    resultado="gano" + equipo1;

    diferencia= goles1-goles2
    puntos1=3;
    puntos2=0;
}else if(goles2>goles1){

resultado="gano" + equipo2;

diferencia=goles2-goles1;
 puntos2=3;
 puntos1=0;
}else{
    resultado="Empate";
    diferencia=0;

    puntos1=1;
    puntos2=1;
}

document.write(`
    Primer Equipo:${equipo1}<br>
    Goles:${goles1}<br>
    Puntos:${puntos1}<br>

    Segundo Equipo:${equipo2}<br>
    Goles:${goles2}<br>
    puntos:${puntos2}<br>

    Resultado:${resultado}<br>
    Diferencia:${diferencia}
    

`);
*/

