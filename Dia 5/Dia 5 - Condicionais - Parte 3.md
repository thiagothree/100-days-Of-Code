# Dia 5: Condicionais

## Parte 3

### Operadores condicionais

• São blocos de código que são executados baseados no resultado de uma expressão lógica. São conhecidos como _controle de fluxo._ \

• if (significa "**se**") - | condição (expressão) {
apresenta a função designada caso seja escolhida.
}

• Ex: \
`let velocity = 20` \
`if (velocity > 19) {` \
`console.log("Você está em uma velocidade elevada. Considere diminuir!)` \
`}`

• else (significa "**se não**") é executado apenas quando a expressão não atende ao *if* [não existe sem o *if*]. \

• Ex: \
`let velocity = 20` \
`if (velocity > 19) {` \
`console.log("Você está em uma velocidade elevada. Considere diminuir!)` \
`} else {` \
`console.log("Você está numa ótima velocidade")`

• E ainda mais: se você outras condições, poderá adicionar utilizando o: \

• else if (é uma alternativa caso existam varias condições) \

`if (velocitySpaceship <= 0 ) {`
  `alert("Nave está parada. Considere partir e aumentar a velocidade!")`
`} else if (velocitySpaceship > 0 && velocitySpaceship < 40) {`
  `alert("Você está devagar, podemos acelerar mais!")`
`} else if (velocitySpaceship >= 40 && velocitySpaceship < 80) {`
  `alert("Parece uma boa velocidade para manter!")`

• *Operador ternário:* (conhecido como if de uma linha) \
O que ele faz? Verifica se a primeira expressão é verdadeira, caso não seja, ele imprime o proximo comando.Porém é recomendado somente quando a expressão ou bloco de codigo for pequeno (pois se não gera um codigo macarronico (código dificil de entender)).