import React from 'react'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import "./ProductDisplay.css"

const ProductDisplay = (props) => {

    const {product}=props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
             <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
             </div>
             <div className="productdisplay-main-img">
                <img src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
             <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">
                      ${product.old_price}
                </div>
                <div className="productdisplay-right-prices-new">
                         ${product.new_price}
                </div>
             </div>
             <div className="productdisplay-right-description">
             What sets this t-shirt description apart is how it sparks your imagination. The adjectives chic and elevated make you envision yourself wearing it. And guess what? The description tells you exactly how you can style the te
             e—with jeans, shorts, or bikini briefs. It’s amazing how simple, direct, and yet personalized this description is. 
             </div>
             <div className="productdisplay-right-size">
                 <h1>Select Size</h1>
             </div>
             <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XX1</div>
             </div>
             <button>Add To Cart</button>
          <p className='productdisplay-right-category'>
            <span>Category:</span>Women,T-Shirt,Crop Top</p>
            <p className='productdisplay-right-category'>
            <span>Category:</span>Women,T-Shirt,Crop Top</p>  
            <p className='productdisplay-right-category'>
            <span>Tags:</span>Modern,Latest</p> 
        </div>
              
    </div>
  )
}

export default ProductDisplay
