import './CatDesk.scss'
import { Link } from 'react-router-dom'

export default function CatDesk({ text, link }) {
    return (
        <>
            <Link className='catdesk__link' to={link}>
                <h4 className='catdesk'>
                    {text}
                </h4>
            </Link>
        </>
    )
}