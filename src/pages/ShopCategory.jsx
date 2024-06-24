import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Items from '../components/Items/Items'
// import all_product from "../components/Assets/all_product"
import dropdown_icon from "../components/Assets/dropdown_icon.png"
import "./CSS/ShopCategory.css"

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />

     
       <div className="shopcategory-indexsort">
       <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
       </div>
        
        <div className="shopcategory-products">
          {
            all_product.map((item, i) => {
              if (props.category === item.category) {
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
              else {
                return null;
              }

            })
          }
        </div>
        <div className="shopcatgory-loadmore">
          Explore More
        </div>
      
    </div>
  )
}

export default ShopCategory

