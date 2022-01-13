//tipos primitivos
//boolean
//var VouF = false;
//console.log(typeof(VouF));
//number
//var numeroQualquer = 1;
//console.log(typeof(numeroQualquer));
//string
//var nome = "ok";
//console.log(typeof(nome));
//function
//var funcao = function() {}
//console.log(typeof(funcao));

//como declarar variavel
//var variavel = 'diana';
//variavel = 'martine';
//console.log(variavel);

//let variavel2 = 'xuxa';
//variavel2 = 'soprabaixinhos';
//console.log(variavel2);

//const nome = 'jennifer';
//console.log(nome);

//diferenca de variaveis globais e locais

var escopoGlobal = 'global';
//sera impresso pois foi declarada fora de um bloco de funcao
console.log(escopoGlobal);

function escopoLocal (){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();

/*iniciar com letras, underscore _ ou cifrão $;não iniciar com número
não usar espaço (use o camelCase ou _)
não usar palavras reservadas*/

/*'=' -> atribuição
'==' -> comparação
'===' -> identifação de tipo e conteúdo*/

/*operadores aritmeticos
var adicao = 1 + 1;
console.log(adicao);
var subtracao = 2 - 1;
console.log(subtracao);
var multiplicacao = 2 * 3;
console.log(multiplicacao);
var divisao_real = 6 / 2;
console.log(divisao_real);
var divisao_inteira = 5 % 2;
console.log(divisao_inteira);
var potenciacao = 2 ** 4;
console.log(potenciacao);
*/

/*operadores relacionais (retorna boolean)
> maior que
< menor que 
>= maior ou igual a
<= menor ou igual a
*/

/*operadores logicos
&& - consideram que todos os valores sejam true
|| - consideram que qualquer valor seja true
! - inverte o valor de true pra false ou vice-versa*/