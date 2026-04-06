import CardProduct from "./CardProduct"

function CardList(){

    const products = [
        {id: 1, name: "Areia para gato - Viva!Verde", price: 60.96},
        {id: 2, name: "Ração para gato - N&D Prime", price: 159.90},
        {id: 3, name: "Ração para cachorro - N&D Ancestral ", price: 399.90},
    ];

    return(
        <>
            <div>
                <CardProduct products={products}/>
            </div>
        </>
    )
}

export default CardList;