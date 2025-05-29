import Header from '../Header/Header';
import DarkDivider from '../Divider/DarkDivider';
import Footer from '../Footer/Footer';

import './Coffee-list.scss';
import womanDrinking from '../../img/our-coffee/girl-drink.jpg';
import goods from '../../img/aromistico.jpg';

function CoffeeList() {
    return (
        <>
            <header className='header'>
                <Header changePage={this.props.changePage} />
                <h1 className='heading'>Our coffee</h1>
            </header>
            <div className="flex__wrapper">
                <div className="about-flex">
                    <h2 className='heading-s'>About our beans</h2>
                    <DarkDivider />
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    </p>
                    <p>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
                <img src={womanDrinking} alt="woman is drinking" className='woman-drink' />
            </div>

            <div className="divider"></div>

            <div className="filter">
                <form action="" className='form'>
                    <div className="filter-typing">
                        <label htmlFor="search-beans" className='label-typing'>Looking for</label>
                        <input type="text" placeholder='start typing here...' id='search-beans' />
                    </div>
                    <div className="filter-btns">
                        <label htmlFor="" className='label-btns'>Or filter</label>
                        <div className="btns">
                            <button className='filter-btn'>Brazil</button>
                            <button className='filter-btn'>Kenya</button>
                            <button className='filter-btn'>Columbia</button>
                        </div>
                    </div>
                </form>
                <div className="grid_wrapper">
                    <div className="coffee-beans__item">
                        <img src={goods} alt="" className="best-item-img" />
                        <p className="desc">Solimo Coffee Beans 2 kg</p>
                        <p className="country">Brazil</p>
                        <div className="price">6.99$</div></div>
                    <div className="coffee-beans__item">
                        <img src={goods} alt="" className="best-item-img" />
                        <p className="desc">Solimo Coffee Beans 2 kg</p>
                        <p className="country">Kenya</p>
                        <div className="price">6.99$</div></div>
                    <div className="coffee-beans__item">
                        <img src={goods} alt="" className="best-item-img" />
                        <p className="desc">Solimo Coffee Beans 2 kg</p>
                        <p className="country">Columbia</p>
                        <div className="price">6.99$</div></div>
                    <div className="coffee-beans__item">
                        <img src={goods} alt="" className="best-item-img" />
                        <p className="desc">Solimo Coffee Beans 2 kg</p>
                        <p className="country">Brazil</p>
                        <div className="price">6.99$</div></div>
                    <div className="coffee-beans__item">
                        <img src={goods} alt="" className="best-item-img" />
                        <p className="desc">Solimo Coffee Beans 2 kg</p>
                        <p className="country">Brazil</p>
                        <div className="price">6.99$</div></div>
                    <div className="coffee-beans__item">
                        <img src={goods} alt="" className="best-item-img" />
                        <p className="desc">Solimo Coffee Beans 2 kg</p>
                        <p className="country">Brazil</p>
                        <div className="price">6.99$</div></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CoffeeList;