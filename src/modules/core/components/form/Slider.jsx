import { useRef } from 'react'
import stylesheet from './slider.module.css'

const Slider = () => {
    const sliderBallRef = useRef(null)
    const handleClick = () => {
        const $sliderBall = sliderBallRef.current
        
    }

    return (
        <button
            onClick={handleClick}
            type="checkbox"
            className={stylesheet['Slider']} >
                <div ref={sliderBallRef} className={stylesheet['Slider-ball']}></div>
        </button>
    )
}

export default Slider