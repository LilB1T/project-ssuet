import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "./components-css/carousel.css"
// import leftArrow



const Carousel = () => {
    return (
        <div className='cro_main_container'>
            <div className='heading_buttons_div'>
                <div style={{ fontWeight: "500", fontSize: "22px", lineHeight: "28px" }} className='navi_heading_best'>Best Air Max</div>
                <div className='cro_link_div'>


                    <Link href={"/"} style={{ fontWeight: "500", fontSize: "15px", lineHeight: "24px" }}>Shop</Link>

                    <Link href={"/"} className="bg-[#f7f7f7] link_img2">
                        <span className="text-[#bebebe] Link_text">&lt;</span>
                    </Link>

                    <Link href={"/"} className="bg-[#e5e5e5] link_img2">
                        <span className="Link_text">&gt;</span>
                    </Link>




                </div>
            </div>


            {/*   products   */}

            <div className='cro_product_main_container'>


                <div className='cro_product_div'>
                    <div><Image src="/images/cro1.png" width={441} height={441} alt='shoes pic'></Image></div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='pro_detail'>Nike Air Max 97 SE</p>
                            <p className='pro_detail_gender'>Men&apos;s Shoes</p>
                        </div>
                        <div className='pro_price'>$16 995</div>
                    </div>
                </div>


                <div className='cro_product_div'>
                    <div><Image src="/images/cro2.png" width={441} height={441} alt='shoes pic'></Image></div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='pro_detail'>Nike Air Max 97 SE</p>
                            <p className='pro_detail_gender'>Men&apos;s Shoes</p>
                        </div>
                        <div className='pro_price'>$16 995</div>
                    </div>
                </div>



                <div className='cro_product_div'>
                    <div><Image src="/images/cro3.png" width={441} height={441} alt='shoes pic'></Image></div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='pro_detail'>Nike Air Max 97 SE</p>
                            <p className='pro_detail_gender'>Men&apos;s Shoes</p>
                        </div>
                        <div className='pro_price'>$16 995</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carousel