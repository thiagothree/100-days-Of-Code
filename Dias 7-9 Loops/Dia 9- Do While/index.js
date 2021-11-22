// Do While: É uma estrutura de repetição semelhante ao While.
/* Estrutura do Do While:
do {
    // bloco de código
} while (condição); */

// Ex: 
let velocity = 50
let acceleration = 5

do {
  console.log("Acelerando: Velocidade atual: " + velocity + "km/s")
  velocity += acceleration
} while (velocity <= 100); 

// O console.log irá rodar até atingir a condição (velocity <= 100) e então irá parar.
/* Mas qual a diferença do do while para o while? Então como vemos na sua estrutura, o while so irá rodar o bloco de código se a condição for verdadeira, então primeiro o while verifica a condição e apenas depois roda o código.
Mas e o do while? O do while é inverso, ele irá rodar ao menos uma vez o código antes de verificar a condição. Então devemos ficar atento.
* Ex: */

let velocity = 110
let acceleration = 5

do {
  console.log("Acelerando. Velocidade atual: " + velocity + "km/s")
  velocity+= acceleration
} while (velocity <=100)

/* O que podemos perceeber? a expressão do while diz que so poderia ser executado caso a velocidade fosse menor ou igual a 100, porém nossa velocidade era 110 e mesmo assim executou ao menos uma vez o código. Então está aí a diferença do while (que verifica a expressão primeiro) e do do while (que so verifica a expressão depois de executar o código ao menos 1 vez.) */

// E por ultimo aprendi sobre o break. O break é uma condição onde o código irá parar caso atinja seu objetivo. No exemplo abaixo o objetivo de parar é caso encontre a letra "e."

let nomeDaNave = prompt("Indique o nome da sua nave:")
let nomeInvertido = ""

for (let position = nomeDaNave.length - 1; position >= 0; position--) {
  if (nomeDaNave[position] == "e") {
    break
  } 
  nomeInvertido += nomeDaNave[position]
}
alert("Nome antigo: " + nomeDaNave + "\nNome atual invertido: " + nomeInvertido)