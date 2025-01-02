import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../../assets/juan-rojas-zPa514Lj7GA-unsplash.jpg'
import img2 from '../../../assets/katelyn-greer-N9in4T9dMnc-unsplash.jpg'
import img3 from '../../../assets/katelyn-greer-utjDIFhqLFw-unsplash.jpg'
import img4 from '../../../assets/khamkeo-myZqfQhh9QU-unsplash.jpg'
import img5 from '../../../assets/vinayak-sharma-SEH9hM8Yxww-unsplash.jpg'

const items = [
        <img src={img1} alt="dashboard-img" className='cursor-pointer h-[6vh] w-[100vw] object-cover bg-center' />,
        <img src={img2} alt="dashboard-img" className='cursor-pointer h-[6vh] w-[100vw] object-cover bg-center' />,
        <img src={img3} alt="dashboard-img" className='cursor-pointer h-[6vh] w-[100vw] object-cover bg-center' />,
        <img src={img4} alt="dashboard-img" className='cursor-pointer h-[6vh] w-[100vw] object-cover bg-center' />,
        <img src={img5} alt="dashboard-img" className='cursor-pointer h-[6vh] w-[100vw] object-cover bg-center' />
];

function Carousel() {
    return (
        <div className='w-full h-6'>
            <AliceCarousel
                autoPlay
                responsive={true}
                autoPlayStrategy="none"
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                touchTracking={false}
                disableDotsControls
                disableButtonsControls
                items={items}
            />
        </div>
    )
};

export default Carousel;