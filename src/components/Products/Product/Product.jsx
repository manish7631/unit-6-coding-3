import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  const { addtocart, removetocart } = useContext(CartContext)
  var [countProduct, setCountProduct] = useState(0);

  const [allProduct, setAllProduct] = useState([])


  useEffect(() => {

    axios.get("http://localhost:8080/products").then((r) => {
      setAllProduct(r.data)
      // console.log(r)
    })

  }, [])





  // Note: this id should come from api
  const product = { id: 1 };

  return (
    <>
      {allProduct.map((e) => {

        return (

          <div key={e.id} data-cy={`product-${product.id}`}>
            <h3 data-cy="product-name">{e.name} </h3>
            <h6 data-cy="product-description">{e.description}</h6>
            <button data-cy="product-add-item-to-cart-button" onClick={addtocart}>add to cart</button>
            <div>
              <button data-cy="product-increment-cart-item-count-button" onClick={() => {
                //  setCountProduct(countProduct + 1)
              }}>+</button>
              <span data-cy="product-count">
                {
                  // Count here from CartItems 
                  countProduct
                }
              </span>
              <button data-cy="product-decrement-cart-item-count-button" onClick={() => {
                // setCountProduct(countProduct - 1)
              }}>-</button>
              <button data-cy="product-remove-cart-item-button" onClick={removetocart}>Remove from cart</button>
            </div>
          </div>
        )
      })}
    </>
  );
};

export default Product;
