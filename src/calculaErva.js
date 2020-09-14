const ervaTerere = module.exports = {
    calculaillexParaguariensis :  peso => {
            return illexParaguariensis = (peso / 100) * 80;
    },

    calculaMenthaPiperitaL_BOLDO:  peso => {
            return menthaPiperitaL = (peso / 100) * 12;
    },
    calculaMenthaPiperitaL_LIMAO:  peso => {
        return menthaPiperitaL = (peso / 100) * 13;
},

    calculaBoldo: peso => {
            return boldo = (peso / 100) * 8;
    },

    calculaLimao: peso => {
        return limao = (peso / 100) * 7;
    },

    calculaIngredientesErvaMentaBoldo: (peso) => {
        return medidas = [ervaTerere.calculaillexParaguariensis(peso), ervaTerere.calculaMenthaPiperitaL_BOLDO(peso), ervaTerere.calculaBoldo(peso)]
    },
    calculaIngredientesErvaMentaLimao: (peso) => {
        return medidas = [ervaTerere.calculaillexParaguariensis(peso), ervaTerere.calculaMenthaPiperitaL_LIMAO(peso), ervaTerere.calculaLimao(peso)]
    },
}








