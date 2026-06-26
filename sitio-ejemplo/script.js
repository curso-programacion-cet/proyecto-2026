function traerValorInput(id) {
    const input = parseInt(document.getElementById(id).value) || 0;
    return input;
}


function calcularAhorro() {

    // Traer valores de los inputs del HTML
    
    const vecesCepilladoDientes = traerValorInput('cepillar-dientes');
    const vecesLavadoPlatos = traerValorInput('lavar-platos');
    const minutosDucha = traerValorInput('ducha');
    const vecesRegarPlantas = traerValorInput('regar-las-plantas');

    console.log("Valores obtenidos: cepillado: " + vecesCepilladoDientes + ", lavado: " + vecesLavadoPlatos + ", ducha: " + minutosDucha + ", regar: " + vecesRegarPlantas);    

    // Asumimos cuánto ahorramos (litros ahorrados por acción)
    const ahorroCepilladoPorVez = 6;
    const ahorroLavadoPorVez = 10;
    const ahorroDuchaPorMinuto = 5;
    const ahorroRegarPlantasPorVez = 15;


    // Calculamos ahorro total
    const ahorroTotal =
        (vecesCepilladoDientes * ahorroCepilladoPorVez) +
        (vecesLavadoPlatos * ahorroLavadoPorVez) +
        (minutosDucha * ahorroDuchaPorMinuto) +
        (vecesRegarPlantas * ahorroRegarPlantasPorVez);


    // Mostramos resultado
    const elementoResultado = document.getElementById('resultado');

    const elementoAhorro = document.getElementById('ahorro');

    elementoAhorro.textContent = ahorroTotal.toFixed(1);

    elementoResultado.style.display = 'block';
}