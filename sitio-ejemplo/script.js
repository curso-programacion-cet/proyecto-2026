function calcularAhorro() {

    // Traer valores de los inputs del HTML
    const vecesCepilladoDientes = parseInt(document.getElementById('cepillar-dientes').value) || 0;

    const vecesLavadoPlatos = parseInt(document.getElementById('lavar-platos').value) || 0;

    const minutosDucha = parseInt(document.getElementById('ducha').value) || 0;


    // Asumimos cuánto ahorramos (litros ahorrados por acción)
    const ahorroCepilladoPorVez = 6;
    const ahorroLavadoPorVez = 10;
    const ahorroDuchaPorMinuto = 5;


    // Calculamos ahorro total
    const ahorroTotal =
        (vecesCepilladoDientes * ahorroCepilladoPorVez) +
        (vecesLavadoPlatos * ahorroLavadoPorVez) +
        (minutosDucha * ahorroDuchaPorMinuto);


    // Mostramos resultado
    const elementoResultado = document.getElementById('resultado');

    const elementoAhorro = document.getElementById('ahorro');

    elementoAhorro.textContent = ahorroTotal.toFixed(1);

    elementoResultado.style.display = 'block';
}