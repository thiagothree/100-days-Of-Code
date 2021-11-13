# Dia 2: Declarando  Variáveis e Caixas de dialogo

## Tipos de Variáveis

• let "nomeVariavel" = "valor da variavel" \
-Nesse tipo de variável é possivel sobscrever o conteudo apenas escrevendo seu nome e uma nova atribuição. \
Ex: nomeVariavel = "novo valor da variavel" 

• const "nomeVariavel" = "valor da variavel" \
-Nesse tipo de variável não é possivel sobscrever o seu valor pois é uma variavel cosntante, não muda. 

• var "nomeVariavel" = "valor da variavel" \
-O tipo var funciona da mesma forma que o tipo let, ele veio de herança junto de versões antigas do JS (ECMAscript). 

*• Mas o que diferencia o tipo let do tipo var?* \
O tipo let so tem definição dentro de um bloco de código, ou seja, se estiver dentro de um operador e for chamado para fora, essa variável se tornara indefinida. \
Ex: ```if (true){ 
    let testeDeVariavel = "Infelizmente não foi possivel definir" 
    console.log(testeDeVariavel) 
}```  \
Dentro desse bloco o console.log conseguirá extrair o valor da variavel, mas se tentarmos puxar ela pra fora apenas com o console.log ele não irá conseguir puxar o valor dela. \
Ex: ```console.log(testeDeVariavel) 
       undefined``` 

Já o tipo var tem valor dentro e fora do bloco de código. \
Ex: ```if (true) { 
    var testeDeVariavel = "Conseguimos concluir o teste. Parabens" 
    console.log(testeDeVariavel) 
}``` \
-Agora quando tentarmos puxar de fora o valor também será possivel. \
Ex: ```console.log(testeDeVariavel) \
       Conseguimos concluir o teste. Parabens``` 

### Tipos de caixa de dialogo

• confirm("Exemplo de mensagem.") - esse tipo de caixa irá exibir a mensagem em pop-up e irá retornar um valor booleano. Então ele so aceita um retorno de true(ok) ou false(cancel). 

• prompt("Exemplo de mensagem.") - esse tipo aceita um valor do tipo texto ou numero. Emiti um pop-up onde o usuario poderá inserir um valor. 

• alert("Exemplo de mensagem.") - esse tipo emite uma mensagem estática. O usuario não consegue interagir com esse tipo de caixa. 

#### Utilidades no JavaScript

• Notação chamada de camelCase é uma forma bem conhecida de declarar variaveis em javaScript, tem esse nome devido o formato de um camelo. Primeira letra sempre minuscula e a primeira de cada proxima palavra sempre maiuscula. 

• Quebra de linha no javascript - \n 

• Comentarios em javaScript: 
// comentario de uma linha  
/* Comentario de varias linhas */ 

• Sempre se deve linkar o arquivo do javascript como ultimo item da tag body (para dar tempo de carregar o HTML e CSS antes do javascript).
