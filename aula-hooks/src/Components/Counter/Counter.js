function Counter(){ //sem hooks onde inferimos na tela manualmente o contador

    let quantity = 10;

    function upQuantity(){
        quantity = quantity + 1;
        document.getElementById("counter-box").innerHTML = quantity;
    }

    function downQuantity(){
        quantity = quantity - 1;
        document.getElementById("counter-box").innerHTML = quantity;
    }

    return(
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
            <button onClick={downQuantity}>Diminuir</button>
        </>
    )

}

export default Counter;