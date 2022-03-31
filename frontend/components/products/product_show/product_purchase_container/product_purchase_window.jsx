import React, { useState } from "react"

const ProductPurchaseWindow = ({userId, product, createCartItem, formatPrice}) => {

    const [quantity, setQuantity] = useState('1')

    const update = (e) => {
        setQuantity(e.target.value)
    }

    const handleAddToCart = () => {
        let cartItem = Object.assign( {}, {userId: userId, productId: product.id, quantity: parseInt(quantity)})
        if(userId) {
            createCartItem(userId, cartItem);
        } else {
            let prevCart;
            if(localStorage.getItem('cart') === '') {
                prevCart = []
            } else {
                prevCart = JSON.parse(localStorage.getItem('cart'))
            }
            cartItem.name = product.name
            cartItem.price = product.price
            cartItem.image_url = product.image_url
            prevCart.push(cartItem)
            localStorage.setItem('cart', JSON.stringify(prevCart))
        }
    }

    const handleBuyNow = () => {

    }

    return (
        <div className="product-purchase-window">
            {formatPrice()}
            <div className="product-purchase-window-delivery-info"></div>
            <h2 className="product-purchase-window-stock-status">In Stock</h2>
            
            <select 
              name="quantity" 
              id="product-quantity"
              value={quantity}
              onChange={update}>
                <option value={1}>1</option>     
                <option value={2}>2</option>     
                <option value={3}>3</option>     
                <option value={4}>4</option>     
                <option value={5}>5</option>     
                <option value={6}>6</option>     
                <option value={7}>7</option>     
                <option value={8}>8</option>     
                <option value={9}>9</option>     
                <option value={10}>10</option>     
            </select>

            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleBuyNow}>Buy Now</button>
        </div>
    )
}

export default ProductPurchaseWindow