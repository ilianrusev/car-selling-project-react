import { Spinner } from "react-bootstrap"
import MainPageLayout from "../../pages/MainPageLayout/MainPageLayout"

import style from './Spinner.module.css'

const LoadingSpinner = () => {
    return (
        <MainPageLayout>
            <div className={style.wrapper}>
                <Spinner animation='border' variant='light' role='status'></Spinner>
            </div>
        </MainPageLayout>
    )
}

export default LoadingSpinner