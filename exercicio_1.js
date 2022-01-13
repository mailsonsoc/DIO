function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        } else{
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log("Sao pares os seguintes numeros:", evenNums);
}

let array = [13, 12, 29, 43, 22, 20];

returnEvenValues(array);