import style from './CardGrid.module.css'

import VehicleCard from '../../VehicleCard/VehicleCard'

const CardGrid = () => {
    return (
        <div className={style.wrapper}>

            <div className={style.item}>
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
            </div>
            <div className={style.item}>
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
            </div>
            <div className={style.item}>
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
            </div>
            <div className={style.item}>
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
            </div>
            <div className={style.item}>
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
            </div>
            <div className={style.item}>
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
            </div>


        </div>
    )
}

export default CardGrid