//o que são vetores ou arrays
//como declarar um array
//let array = ['string', 1, true];
//console.log(array);

//pode guardar vários tipos de dados
//let array = ['string', true, 1, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array);

/*for each
array.forEach(function(item, index){console.log(item, index)});
array.push('novoitem');
array.pop(); tira do final
array.shift(); tira do início
array.unshift('novo item no inicio');
console.log(indexOf(true)); retorna o indice
array.splice(0, 3); apaga e substitui pelo índice
let novoArray = array.slice(0,3); compoe um novo array com informações de um array existente*/


//objetos - dados que possuem propriedades e valores que definem suas
//características. deve ser declarado entre chaves "{}"

let object = {string: 'string', number: 1, booleana: true, array:['novo array'],
objectInterno: {objectInterno: 'object Interno'}};

console.log(object);