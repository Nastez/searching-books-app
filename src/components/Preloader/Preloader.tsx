import React from 'react'
import preloader from '../../assets/preloader.svg'
import s from './Preloader.module.css'

const Preloader: React.FC = (props) => {
    return (
        <div className={s.preloader}>
            <img alt='preloader' src={preloader} />
        </div>
    )
}

export default Preloader