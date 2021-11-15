# Dia 4: Condicionais

## Parte 2

### Operações lógicas

• Expressões construidas a partir de operações booleanos. (Retornam excluisamente apenas dois valores: true ou false). \
Tabela verdade: tabela de resultados de operações booleanos. As operações básicas na programação hoje são 3:
• E (and)
• OU (or)
• NÂO (not) \
Ex: (10 > 4 *ou* 5<=5>). \
Ex 2: (0 >= *ou* 5 > 6 *e* 1 > 0)

• Tabela verdade do - E (and) (representeado por &&).

p     | q    |p && q |
:---: |:---: |:-----:|
true  |true  |true   |
true  |false |false  |
false |true  |false  |
false |false |false  |

• Tabela verdade do - OU (or) (representado por ||)

p     | q    |p () q |
:---: |:---: |:-----:|
true  |true  |true   |
true  |false |true   |
false |true  |true   |
false |false |false  |

• Tabela verdade do - NÂO (not!()) (representado por !())

p     | !q   |
:---: |:---: |
true  |false |
false |true  |

• Ex: ```let velocity = 20 | console.log(!(velocity > 19``` | NÂO Verdadeiro (velocity é maior do que 20) então o resultado é falso