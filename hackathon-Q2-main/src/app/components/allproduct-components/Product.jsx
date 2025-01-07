import React from 'react'
import Image from 'next/image'
import "./product.css"
import product from "./product_array/product"


const Product = () => {


    return (
        product.map((item, index) =>
            <div className='product' key={index}>

                <div className='product_img_div' >
                    <Image src={item.image} width={300} height={100} className='product_img' alt='shoes'></Image>
                </div>
                <div>
                    <p className='status_detail'>{item.status}</p>
                    <p className='product_name'>{item.name}</p>
                    <p className='product_gender'>{item.category}</p>
                    <p className='product_colour'> {item.color}</p>
                    <p className='product_price'>{item.price}</p>
                </div>
            </div>
        )

    )
}

export default Product