const calcularImposto = require("./calc");

test("Faixa 1 – isento", () => {
    expect(calcularImposto(2000)).toBe(0);
});

test("Faixa 2 – 7,5%", () => {
    expect(calcularImposto(3000)).toBeCloseTo(3000 * 0.075);
});

test("Faixa 3 – 15%", () => {
    expect(calcularImposto(5000)).toBeCloseTo(5000 * 0.15);
});

test("Faixa 4 – 22,5%", () => {
    expect(calcularImposto(8000)).toBeCloseTo(8000 * 0.225);
});

test("Faixa 5 – 27,5%", () => {
    expect(calcularImposto(12000)).toBeCloseTo(12000 * 0.275);
});

test("Renda inválida deve gerar erro", () => {
    expect(() => calcularImposto(-10)).toThrow();
});
