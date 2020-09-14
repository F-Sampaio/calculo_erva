const chai = require('chai');
const erva = require('../calculaErva');
const assert = chai.assert;
const expect = chai.expect;

console.log(erva.calculaIngredientesErvaMentaBoldo(1000));
console.log(erva.calculaIngredientesErvaMentaLimao(1000));


describe('TDD do calculo da quantidade em quilos de erva Menta-Boldo', () => {
    it('Teste: Retorna quantidade de Illex paraguaiensis', () => {
        assert.equal(erva.calculaillexParaguariensis(1000), 800);
    });
    it('Teste: Retorna quantidade de Menta piperita L', () => {
        assert.equal(erva.calculaMenthaPiperitaL_BOLDO(1000), 120);
    });
    it('Teste: Quantidade de boldo', () => {
        assert.equal(erva.calculaBoldo(1000), 80);
    });
});

describe('TDD do calculo da quantidade em quilos de erva Menta-Limão', () => {
    it('Teste: Retorna quantidade de Illex paraguaiensis', () => {
        assert.equal(erva.calculaillexParaguariensis(1000), 800);
    });
    it('Teste: Retorna quantidade de Menta piperita L', () => {
        assert.equal(erva.calculaMenthaPiperitaL_LIMAO(1000), 130);
    });
    it('Teste: Quantidade de boldo', () => {
        assert.equal(erva.calculaLimao(1000), 70);
    });
});