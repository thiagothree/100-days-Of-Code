/* O while recebe apenas uma expressão
* Com o for é possível adicionar a variável que utilizaremos para controlar as iterações.
* O for segue o seguinte formato:

for (<variável>; <expressão>; <ação de controle>) {
  <bloco de códigos>
}
Nesse exemplo (exercicio) iremos utilizar o for para substituir um caracterere que o usuario irá informar
*/

let spaceshipName = prompt("Informe o nome da sua nave:")
let caractereParaSubstituir = prompt("Deseja substituir qual caractere?")
let caractereQueVaiSubstituir = prompt("Deseja substituir" + " por qual caractere?")
let novoNomeNave = ""

// aqui entra em ação o for
for (let position = 0; position < spaceshipName.length; position++) {
  if (spaceshipName[position] == caractereParaSubstituir) {
    novoNomeNave += caractereQueVaiSubstituir
  } else {
    novoNomeNave += spaceshipName[position]
  }
} 
alert("Novo nome: " + novoNomeNave)

/* Mas como explicar esse código que até na minha cabeça ainda estou confuso? haha, vamos lá */

// Vamos seguir por etapas:
/* 1- Declaramos as variáveis onde iremos receber o pedido do usuario
   2- Agora entrando no for: a variavel position é um variavel nova e oq ela faz? Ela indica a posição inicial que o código ira revisar a palavra (que no caso é o nome da nave), como todos devemos saber, na programação a posição inicial é 0.
   3- Esse código tem que percorrer até a ultima posição que é um caractere a menos que o comprimento (length) da string. E toda vez que o código for executado, position irá receber 1 valor a mais.
   4- "Se" spaceshipName (valor digitado do usuario) (na posição atual)for igual ao caractereParaSubstituir, então a variavel vazia novoNomeNave irá receber o valor de caractereQueVaiSubstituir (também digitado pelo usuario)
   Ex: batata. desejo substituir o "a" pelo o.
   novoNomeNave == bototo.
   De forma bem clara para fixar: se a string(na posição tal) for igual ao caractere que o usuario deseja SUBSTITUIR, então o novo nome da nave irá receber o caractere que o usuario deseja ADICIONAR no local do ANTIGO caractere.
   5- o bloco do else está apenas para se o if não precisar ser executado
*/