import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import style from './Carousel.module.css';
import CustomDot from '../CustomDot/CustomDot';

import DummyImages from '../DummyImages';
import { Col } from 'react-bootstrap';


const MyCarousel = () => {
    return (
        <Col className='pb-5 px-0 d-flex justify-content-center'>

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className={style.wrapper}
                containerClass={style.container}
                dotListClass=''
                customDot={<CustomDot />}
                draggable
                focusOnSelect={false}
                infinite
                itemClass=''
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1,
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
                {DummyImages}
            </Carousel>


        </Col>
    )
}

export default MyCarousel