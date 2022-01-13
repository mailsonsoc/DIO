const Item = ({children}) => { //propriedade 
    return (
        <a href="/" class="list-group-item list-group-item-action list-group-item-dark">
            {children}
        </a>
    )//children -> agora as tags terão abertura e fechamento no arquivo App.js
}

export default Item;