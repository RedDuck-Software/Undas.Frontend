import React, {FC} from 'react'
import {Container} from "../../../../globalStyles";
import {
    PromoSlide,
    SlideText
} from './Promo.styles'

import {Swiper, SwiperSlide} from "swiper/react";
import './PromoSlider.css'
import {Navigation, Pagination} from "swiper";

const Promo:FC = () => {
    return (
        <Swiper
            className="promo-slider"
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            loop={true}
            navigation={true}
        >
            <SwiperSlide>
                <PromoSlide>
                    <SlideText>
                        Hot Offer! Add your NTF and save 50% on commission!
                    </SlideText>
                </PromoSlide>
            </SwiperSlide>
            <SwiperSlide>
                <PromoSlide>
                    <SlideText>
                        Hot Offer! Add your NTF and save 50% on commission!
                    </SlideText>
                </PromoSlide>
            </SwiperSlide>
        </Swiper>
    )
}

export default Promo