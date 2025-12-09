function calcularImposto(renda) {
    if (typeof renda !== "number" || renda < 0) {
        throw new Error("Renda inválida");
    }

    if (renda <= 2259.20) {
        return 0;
    } else if (renda <= 4000.00) {
        return renda * 0.075;
    } else if (renda <= 6000.00) {
        return renda * 0.15;
    } else if (renda <= 10000.00) {
        return renda * 0.225;
    } else {
        return renda * 0.275;
    }
}

module.exports = calcularImposto;
