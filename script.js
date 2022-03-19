document.getElementById('calcular').addEventListener("click" , calcular);

function calcular(){
    /* Definir Variables Principales */

    let cuenta = parseInt(document.getElementById('totalcuenta').value);
    let porcentaje = parseInt(document.getElementById('porcentajecuenta').value);

    /* Se realiza procedimiento de pasar el valor total*/
    let totalF = cuenta
    document.getElementById('totalresult').innerHTML = totalF + " $";

    /* Se realiza procedimiento de calculo de porcentaje*/
    let propinaT = cuenta * porcentaje / 100;
    document.getElementById('totalpropin').innerHTML = propinaT + " $";

    /* Se realiza Cálculo total final */
    let totalG = totalF + propinaT;
    document.getElementById('totalpay').innerHTML = totalG + " $";
}

