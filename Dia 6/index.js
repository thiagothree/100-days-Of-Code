let distanciaViajem = prompt('Quantos km você irá viajar?')
let combustivelUtilizado = prompt(
  'Qual combustivel você irá utilizar?\n1- Gasolina\n2- Alcool\n3- Diesel'
)

/*Cada próxima variavel representa a quantidade de km que o caro faz com um litro*/

let litroGasolina = 14
let litroAlcool = 11
let litroDiesel = 09
let converterQuilometros
let resultadoFinal
let valorCombustivel

switch (combustivelUtilizado) {
  case '1':
    converterQuilometros = (distanciaViajem / litroGasolina)
    resultadoFinal = converterQuilometros.toFixed(2)
    valorCombustivel = resultadoFinal * 7,20
    alert('Você irá utilizar: ' + resultadoFinal + 'L de Gasolina\n' + "Você irá gastar: R$ " + valorCombustivel.toFixed(2))
    break
  case '2':
    converterQuilometros = (distanciaViajem / litroAlcool)
    resultadoFinal = converterQuilometros.toFixed(2)
    valorCombustivel = resultadoFinal * 4,80
    alert('Você irá utilizar: ' + resultadoFinal + 'L de Alcool\n' + "Você irá gastar: R$ " + valorCombustivel.toFixed(2))
    break
  case '3':
    converterQuilometros = (distanciaViajem / litroDiesel)
    resultadoFinal = converterQuilometros.toFixed(2)
    valorCombustivel = resultadoFinal * 5
    alert('Você irá utilizar: ' + resultadoFinal + 'L de Diesel\n' + "Você irá gastar: R$ " + valorCombustivel.toFixed(2))
    break
  default:
    alert(
      'Combustivel indisponivel. Por faovr, selecione um combustivel disponivel'
    )
}
