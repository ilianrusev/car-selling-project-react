import { useEffect, useState } from 'react'
import style from './Badge.module.css'

const InfoBox = ({ property }) => {

    const [color, setColor] = useState()

    useEffect(() => {
        setColor(property.toLowerCase())
    }, [])

    return (
        <span className={`badge mr-3  ${style.wrapper} ${style[color]}`}>{property}</span>
    )
}

export default InfoBox