// O que são estruturas de Repetição:
/* São estruturas utilizadas para repetir um bloco de código. Pode ser um determinado número de vezes ou até que uma determinada condição seja atendida */
// Temos aqui 3: While, For e Do-while

/* While: O while é escolhido quando so é necessario um expressão, ou seja, um pequeno código ja resolve.
* O while tem o seguinte formato:

while (condition) {
  <bloco de código a ser executado>
}
Veremos um exemplo a seguir onde iremos simular o sistema de navegação de uma nave interagindo com o usuário. */

let spaceshipName = prompt("Informe o nome da sua nave:")
let dobraEspacial = prompt("Deseja entrar em dobra espacial?\n\n1- Sim\n2- Não")
let dobraEspacialQuanti = 0
let proxDobraEspacial

if (dobraEspacial == "1") {
  dobraEspacialQuanti += 1
  proxDobraEspacial = prompt("Deseja realizar a próxima dobra?\n\n1- Sim\n2- Não")
} else {
  alert("Nome da nave: " + spaceshipName + "\nQuantidade de dobras: " + dobraEspacialQuanti)
}

  while (proxDobraEspacial == "1") {
    dobraEspacialQuanti += 1
    proxDobraEspacial = prompt("Deseja realizar a próxima dobra?\n\n1- Sim\n2- Não")
} 
  alert("Nome da nave: " + spaceshipName + "\nQuantidade de dobras: " + dobraEspacialQuanti)



