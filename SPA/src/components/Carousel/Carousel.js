
import VehicleCard from '../VehicleCard/VehicleCard'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const MyCarousel = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=''
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 580,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 580
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=''
            slidesToSlide={1}
            swipeable
        >
            <VehicleCard
                src='https://finder.createx.studio/img/car-finder/catalog/01.jpg'
                year='1995'
                price='25 000'
                name='Ford Truck Lift'
                town='Chicago'
                dist='270K'
                trans='Manual'
                fuel='Diesel'
            />
            <VehicleCard
                src='https://finder.createx.studio/img/car-finder/catalog/01.jpg'
                year='1995'
                price='25 000'
                name='Ford Truck Lift'
                town='Chicago'
                dist='270K'
                trans='Manual'
                fuel='Diesel'
            />
            <VehicleCard
                src='https://finder.createx.studio/img/car-finder/catalog/01.jpg'
                year='1995'
                price='25 000'
                name='Ford Truck Lift'
                town='Chicago'
                dist='270K'
                trans='Manual'
                fuel='Diesel'
            />
            <VehicleCard
                src='https://finder.createx.studio/img/car-finder/catalog/01.jpg'
                year='1995'
                price='25 000'
                name='Ford Truck Lift'
                town='Chicago'
                dist='270K'
                trans='Manual'
                fuel='Diesel'
            />
            <VehicleCard
                src='https://finder.createx.studio/img/car-finder/catalog/01.jpg'
                year='1995'
                price='25 000'
                name='Ford Truck Lift'
                town='Chicago'
                dist='270K'
                trans='Manual'
                fuel='Diesel'
            />
            <VehicleCard
                src='https://finder.createx.studio/img/car-finder/catalog/01.jpg'
                year='1995'
                price='25 000'
                name='Ford Truck Lift'
                town='Chicago'
                dist='270K'
                trans='Manual'
                fuel='Diesel'
            />
            <VehicleCard
                src='https://finder.createx.studio/img/car-finder/catalog/01.jpg'
                year='1995'
                price='25 000'
                name='Ford Truck Lift'
                town='Chicago'
                dist='270K'
                trans='Manual'
                fuel='Diesel'
            />
        </Carousel>
    )
}

export default MyCarousel