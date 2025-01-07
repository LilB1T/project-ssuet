import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./allProduct.css"
import filter from "../../../public/images/filter.png"
import upArrow from "../../../public/images/upArrow.png"
// import product from "../../components/allproduct-components/product_array/product"


import Product from "../components/allproduct-components/Product"

const page = () => {
  return (
    <div className='allProduct_main_container'>



      <div className='heading_filter_div'>
        <div className='new_heading'>
          New (500)
        </div>
        <div className='filter_sort_div'>
          <Link href={"/"} className='flex' style={{ margin: "0 20px" }}>Hide Filters
            <Image src={filter} width={22} height={18} style={{ margin: "0 10px" }} alt='sort filter'></Image>
          </Link>
          <Link href={"/"} className='flex' style={{ margin: "0 10px" }}>Sort By <span className="down-arrow" style={{ margin: "0 10px" }}>&lt;</span>
            {/* <Image src={downArrow} width={14} height={14} alt='sort filter'></Image> */}
          </Link>
        </div>
      </div>



      {/*  all product  */}

      <div className='w-full sideBar_allProduct_split'>
        {/* side bar */}
        <div className='side_bar_div'>

          <div className='side_links'>
            <Link href={"/"}>Shoes</Link>
            <Link href={"/"}>Sports Bras</Link>
            <Link href={"/"}>Tops & T-Shirts</Link>
            <Link href={"/"}>Hoodies & Sweatshirts</Link>
            <Link href={"/"}>Jackets</Link>
            <Link href={"/"}>Trousers & Tights</Link>
            <Link href={"/"}>Shorts</Link>
            <Link href={"/"}>Tracksuits</Link>
            <Link href={"/"}>Jumpsuits & Rompers</Link>
            <Link href={"/"}>Skirts & Dresses</Link>
            <Link href={"/"}>Socks</Link>
            <Link href={"/"}>Accessories & Equipment</Link>
          </div>


          <div className='side_bar_margin'>
            <div className='heading_arrow_align'>
              <p>Gender </p>
              <Image src={upArrow} width={20} height={16} alt='none'></Image>
            </div>

            <input type="checkbox" name="Men" id="" style={{ transform: "scale(1.5)", margin: "0 8px 10px 4px" }} />
            <label htmlFor="Men">Men</label>
            <br />
            <input type="checkbox" name="" id="" style={{ transform: "scale(1.5)", margin: "0 8px 10px 4px" }} />
            <label htmlFor="Women">Women</label>
            <br />
            <input type="checkbox" name="" id="" style={{ transform: "scale(1.5)", margin: "0 8px 10px 4px" }} />
            <label htmlFor="Unisex">Unisex</label>
          </div>





          <div className='side_bar_margin'>
            <div className='heading_arrow_align'>
              <p>Kids </p>
              <Image src={upArrow} width={20} height={16} alt='none'></Image>
            </div>

            <input type="checkbox" name="Men" id="" style={{ transform: "scale(1.5)", margin: "0 8px 10px 4px" }} />
            <label htmlFor="Men">Boys</label>
            <br />
            <input type="checkbox" name="" id="" style={{ transform: "scale(1.5)", margin: "0 8px 10px 4px" }} />
            <label htmlFor="Women">Girls</label>

          </div>









          <div className='side_bar_margin'></div>

          <div className='heading_arrow_align'>
            <p>Shop By Price </p>
            <Image src={upArrow} width={20} height={16} alt='none'></Image>
          </div>

          <input type="checkbox" name="Men" id="" style={{ transform: "scale(1.5)", margin: "0 8px 10px 4px" }} />
          <label htmlFor="Men">under $2 500.00</label>
          <br />
          <input type="checkbox" name="" id="" style={{ transform: "scale(1.5)", margin: "0 8px 10px 4px" }} />
          <label htmlFor="Women">$2 501.00-$</label>
        </div>









        {/*  product   grid        */}





        <div className='product_grid_flex'>

          <Product />
          {/* {product.map((item, index) => (
            <div className='product' key={index}>
              <div className='product_img_div'>
                <Image src={item.image} className='product_img' alt={item.name} width={200} height={200} />
              </div>
              <div>
                <p className='status_detail'>{item.status}</p>
                <p className='product_name'>{item.name}</p>
                <p className='product_gender'>{item.category}</p>
                <p className='product_colour'>{item.color}</p>
                <p className='product_price'>MRP: ${item.price}</p>
              </div>
            </div>
          ))} */}
        </div>


        {/*  product   grid END        */}

      </div>
    </div>
  )
}

export default page