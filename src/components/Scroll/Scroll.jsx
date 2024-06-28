import './Scroll.scss'
import { Link } from 'react-router-dom'

export default function Scroll({ img, text, link }) {
    return (
        <>
            <Link to={link} className='scroll__link'>
                <div className="scroll">
                    <div className='scroll__image'>
                        <img className='scroll__pin' src={img} alt="img" />
                    </div>
                    <h6 className='scroll__text'>
                        {text}
                    </h6>
                </div>
            </Link>
        </>
    )
}