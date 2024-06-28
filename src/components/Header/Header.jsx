import './Header.scss';
import kijiji from '../../assets/images/Kijiji_logo.svg'
import search from '../../assets/images/search.png'

export default function Header() {
    return (
        <>
            <header className='header'>
                <section className='header__container'>
                    <img className='header__image' src={kijiji} alt="K" />
                    <div className='header__block'>
                        <h4 className='header__text header__text--white'>
                            FR
                        </h4>
                        <h4 className='header__text header__text--white'>
                            Sign In
                        </h4>
                        <h4 className='header__text header__text--blue'>
                            Post ad
                        </h4>
                    </div>
                </section>
                <section className='header__container'>
                    <img className='header__simage' src={search} alt="search" />
                    <input placeholder="What are you looking for?" type="text" name='search' className='header__search' />
                </section>
                <div className='header__location'>
                    <img src="#" alt="location" className='header__pin'/>
                    <h4 className='header__text header__text--white'>
                        Toronto (GTA)
                    </h4>
                </div>
            </header>
        </>
    )
}