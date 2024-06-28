import './HeaderDesk.scss'
import categories from '../../categories/categories';
import CatDesk from '../CatDesk/CatDesk';
import kijiji from '../../assets/images/Kijiji_logo.svg'
import search from '../../assets/icons/search.png'
import category from '../../assets/icons/category.png'
import drop from '../../assets/icons/drop.png'
import location from '../../assets/icons/location.png'

export default function HeaderDesk() {
    return (
        <>
            <header className='desk'>
                <section className='desk__container'>
                    <section className='desk__left'>
                        <img className='desk__logo' src={kijiji} alt="Kijiji" />
                        <div className='desk__query'>
                            <div className='desk__box'>
                                <img src={search} alt="search" className='desk__glass'/>
                                <input placeholder='What are you looking for?' type="text" className='desk__search'/>
                            </div>
                            <div className='desk__category'>
                                <img src={category} alt="category" className='desk__cat' />
                                <div className='desk__stack'>
                                    <label className='desk__cat-label'>
                                        Categories
                                    </label>
                                    <input className='desk__cat-input' type="text" placeholder='All Categories'/>
                                </div>
                                <img className='desk__cat-img' src={drop} alt="drop-down" />
                            </div>
                            <h4 className='desk__cat-text'>
                                Search
                            </h4>
                        </div>
                        <div className='desk__location'>
                            <img className='desk__location-img' src={location} alt="location" />
                            <h4 className='desk__text desk__text--pin'>
                                Toronto (GTA)
                            </h4>
                        </div>
                    </section>
                    <section className='desk__right'>
                        <div className='desk__block'>
                            <h4 className='desk__text desk__text--blue'>
                                FR
                            </h4>
                            <h4 className='desk__text desk__text--blue'>
                                Register or Sign In
                            </h4>
                            <h4 className='desk__text desk__text--white'>
                                Post ad
                            </h4>
                        </div>
                    </section>
                </section>
                <section className='desk__container'>
                    <div className='desk__left'>
                        {
                            categories.map((cat) => {
                                return (
                                    <CatDesk text={cat.text} />
                                )
                            })
                        }
                    </div>
                    <div className='desk__right'>
                        <div className='desk__trending'>
                            <h6 className='desk__yellow'> 
                                Trending
                            </h6>
                            <h6 className='desk__outdoor'>
                                Home - Outdoor & Garden
                            </h6>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}