import React, { useState } from 'react';
import { FreeMode, Keyboard, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import altBookBigIcon from '../../../icons/book-images/image-alt.svg';
import slideImage from '../../../icons/book-images/image-book.svg';
import pushkinImage from '../../../icons/book-images/pushkin.jpg';
import bookBigIcon from '../../../images/image.jpg';

import './slider.scss';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export const BookSlider = ({ id }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return id === 0 || id === 9 ?
        <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className='mySwiper2'
            data-test-id='slide-big'
        >
            <SwiperSlide>
                <img src={altBookBigIcon} alt='alt-book' />
            </SwiperSlide>
        </Swiper>
        : id === 1 ? <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className='mySwiper2'
            data-test-id='slide-big'
        >
            <SwiperSlide>
                <img src={bookBigIcon} alt='book-icon' />
            </SwiperSlide>
        </Swiper> :
            <React.Fragment>

                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs, Keyboard, Pagination]}
                    pagination={{
                        clickable: true,
                        el: '.my-swiper-pagination',
                        type: 'bullets',
                    }}

                    className='mySwiper2'
                    data-test-id='slide-big'
                >
                    <SwiperSlide>
                        <img src={bookBigIcon} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slideImage} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pushkinImage} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slideImage} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bookBigIcon} alt='' />
                    </SwiperSlide>
                </Swiper>
                <div className='my-swiper-pagination' />

                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Scrollbar, Thumbs, Keyboard, Pagination]}
                    scrollbar={{ draggable: true }}
                    keyboard={{
                        enabled: true,
                    }}

                    className='mySwiper'
                >
                    <SwiperSlide>
                        <img src={bookBigIcon} className='img_disabled' alt='' data-test-id='slide-mini' />{' '}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slideImage} className='img_disabled' alt='' data-test-id='slide-mini' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pushkinImage} className='img_disabled' alt='' data-test-id='slide-mini' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slideImage} className='img_disabled' alt='' data-test-id='slide-mini' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bookBigIcon} className='img_disabled' alt='' data-test-id='slide-mini' />
                    </SwiperSlide>

                </Swiper>
            </React.Fragment>
        ;
};
