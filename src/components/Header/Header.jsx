import './Header.scss';
import kijiji from '../../assets/images/Kijiji_logo.svg'
import search from '../../assets/icons/search.png'
import k from '../../assets/images/k.svg'
import location from '../../assets/icons/location.png'
import Scroll from '../Scroll/Scroll';
import categories from '../../categories/categories';

export default function Header(props) {
    return (
        <>
            <header className='header'>
                <section className='header__container'>
                    <img className='header__image' src={k} alt="K" />
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
                    <div className='header__search'>
                        <img className='header__simage' src={search} alt="search" />
                        <input placeholder="What are you looking for?" type="text" name='search' className='header__input' />
                    </div>
                </section>
                <div className='header__location'>
                    <img src={location} alt="location" className='header__pin'/>
                    <h4 className='header__text header__text--location'>
                        Toronto (GTA)
                    </h4>
                </div>
                <section className='header__categories'>
                    {categories.map((cat) => {
                        return (
                            <Scroll text={cat.text} img={cat.img}/>
                        )
                    })}
                </section>
            </header>
        </>
    )
}