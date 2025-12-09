const readline = require("readline");
const calcularImposto = require("./calc");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe sua renda mensal: ", (valor) => {
    const renda = Number(valor);

    if (isNaN(renda) || renda < 0) {
        console.log("Valor inválido!");
        rl.close();
        return;
    }

    const imposto = calcularImposto(renda);

    console.log(`Imposto devido: R$ ${imposto.toFixed(2)}`);

    rl.close();
});
