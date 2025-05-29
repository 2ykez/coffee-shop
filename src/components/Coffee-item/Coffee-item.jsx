import Header from "../Header/Header";
import DarkDivider from "../Divider/DarkDivider";
import Footer from "../Footer/Footer";

import './Coffee-item.scss';
import aromisticoGoods from '../../img/aromistico-goods.jpg';

function CoffeeItem() {
    return (
        <>
            <header className='header'>
                <Header />
                <h1 className='heading'>Our coffee</h1>
            </header>
            <div className="flex__wrapper-coffee">
                <div className="about-flex">
                    <h2 className='heading-s'>About it</h2>
                    <DarkDivider />
                    <p>
                        <span className="text-b">Country:</span>Brazil
                    </p>
                    <p>
                        <span className="text-b">Description:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora dicta exercitationem aliquid quis sit velit? Voluptate porro saepe distinctio velit, dicta nemo perspiciatis vitae itaque impedit dolores ea inventore!
                    </p>
                    <p className="coffee-price">
                        <span className="text-b">Price:</span>16.99$
                    </p>
                </div>
                <img src={aromisticoGoods} alt="woman is drinking" className='woman-drink' />
            </div>
            <Footer />
        </>

    )
}

export default CoffeeItem;