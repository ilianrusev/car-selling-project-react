import { Row } from 'react-bootstrap'
import InfoBox from '../Badge/Badge'
import style from './MainInfo,module.css'

const MainInfo = () => {
    return (
        <section>
            <div className={`ml-0 text-light d-flex align-items-center`}>
                <h3 className='font-weight-bold mb-0 mr-3'>$31,900</h3>
                <InfoBox property={'Used'} />
                <InfoBox property={'Certified'}/>
            </div>
        </section>
    )
}

export default MainInfo