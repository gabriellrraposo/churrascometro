let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")


let resultado = document.getElementById("resultado")

function calcular() {
    console.log('Calculando')
    
    let adultos = Number(inputAdultos.value)
    let criancas = Number(inputCriancas.value)
    let duracao = Number(inputDuracao.value)
    
    // let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 + criancas)
    // console.log(qtdTotalCarne)
    let quantCarne = 0
    let quantCerveja = 0
    let quantBebida = 0
    
    if (duracao <= 6) {
        quantCarne = adultos * 400 + criancas * 200
        quantCerveja = adultos * 1.2
        quantBebida = adultos + criancas * 0.5
    } else {
        quantCarne = adultos * 650 + criancas * 325
        quantCerveja = adultos * 2
        quantBebida = adultos * 1.5 + criancas * 0.75
    }

    resultado.innerHTML = `<p>${quantCarne} gramas de carne</p>`
    resultado.innerHTML += `<p>${quantCerveja}L de cerveja</p>`
    resultado.innerHTML += `<p>${quantBebida}L de bebidas não alcoólicas</p>`
}

// function carnePP(duracao) {
//     if (duracao >= 6) {
//         return 650
//     } else {
//         return 400
//     }
// }
