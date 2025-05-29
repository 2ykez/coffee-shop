import Header from "../Header/Header";
import DarkDivider from "../Divider/DarkDivider";
import Footer from "../Footer/Footer";

import './Goods-list.scss';
import aromistico from '../../img/aromistico.jpg';
import hotCoffee from '../../img/goods-page/cup-of-coffee.jpg';

function GoodsList() {
    return (
        <>
            <header className="header">
                <Header />
                <h1 className='heading'>For your pleasure</h1>
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
                <img src={hotCoffee} alt="woman is drinking" className='woman-drink' />
            </div>

            <div className="divider"></div>

            <div className="grid_wrapper">
                <div className="coffee-beans__item">
                    <img src={aromistico} alt="" className="best-item-img" />
                    <p className="desc">Solimo Coffee Beans 2 kg</p>
                    <p className="country">Brazil</p>
                    <div className="price">6.99$</div></div>
                <div className="coffee-beans__item">
                    <img src={aromistico} alt="" className="best-item-img" />
                    <p className="desc">Solimo Coffee Beans 2 kg</p>
                    <p className="country">Kenya</p>
                    <div className="price">6.99$</div></div>
                <div className="coffee-beans__item">
                    <img src={aromistico} alt="" className="best-item-img" />
                    <p className="desc">Solimo Coffee Beans 2 kg</p>
                    <p className="country">Columbia</p>
                    <div className="price">6.99$</div></div>
                <div className="coffee-beans__item">
                    <img src={aromistico} alt="" className="best-item-img" />
                    <p className="desc">Solimo Coffee Beans 2 kg</p>
                    <p className="country">Brazil</p>
                    <div className="price">6.99$</div></div>
                <div className="coffee-beans__item">
                    <img src={aromistico} alt="" className="best-item-img" />
                    <p className="desc">Solimo Coffee Beans 2 kg</p>
                    <p className="country">Brazil</p>
                    <div className="price">6.99$</div></div>
                <div className="coffee-beans__item">
                    <img src={aromistico} alt="" className="best-item-img" />
                    <p className="desc">Solimo Coffee Beans 2 kg</p>
                    <p className="country">Brazil</p>
                    <div className="price">6.99$</div></div>
            </div>
            <Footer />
        </>
    )
}

export default GoodsList;