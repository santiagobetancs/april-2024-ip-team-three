import './NotFoundPage.scss'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <>
            <section className="notfound">
                <h1 className="notfound__title">
                    404 <br /> <br /> Oops! Seems you lost your way! <br /> <br /> Let's go back
                </h1>
                <Link className='notfound__link' to='/'>
                    <h3 className="notfound__button">
                        HOME
                    </h3>          
                </Link>
            </section>
        </>
    )
}