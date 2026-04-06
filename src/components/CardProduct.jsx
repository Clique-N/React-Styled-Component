import { Card, CardInfo, CardName, CardPrice, Button} from "./styles"
import { useState } from "react"

function CardProduct({products}){

    const [cartList, setCartList] = useState([]);

    function handleCart(product) {
        setCartList(prev =>
            prev.some (item => item.id === product.id) ? prev.filter(item => item.id !== product.id) : [...prev, product]
        )
    }
    

    return(
        <Card> 
            {products.map((product) => {
                const isInCart = cartList.some(item => item.id === product.id);
                return (
                <CardInfo key={product.id}>   
                    <CardName>{product.name}</CardName>
                    <CardPrice>R${product.price}</CardPrice>
                    <Button adicionado={isInCart} onClick={() => handleCart(product)}> {isInCart ? "Remover do carrinho" : "Adicionar ao carrinho"} </Button>
                </CardInfo> 
            )})}
        </Card>
    )
}

export default CardProduct;