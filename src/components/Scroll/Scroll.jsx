import './Scroll.scss'

export default function Scroll({ img, text }) {
    return (
        <>
            <div className="scroll">
                <div className='scroll__image'>
                    <img className='scroll__pin' src={img} alt="img" />
                </div>
                <h6 className='scroll__text'>
                    {text}
                </h6>
            </div>
        </>
    )
}