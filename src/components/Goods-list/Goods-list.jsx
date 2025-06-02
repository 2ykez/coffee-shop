import { Component } from "react";

import Header from "../Header/Header";
import DarkDivider from "../Divider/DarkDivider";
import Footer from "../Footer/Footer";
import CoffeeItem from "../Coffee-item/Coffee-item";

import './Goods-list.scss';
import aromistico from '../../img/aromistico.jpg';
import hotCoffee from '../../img/goods-page/cup-of-coffee.jpg';

class GoodsList extends Component {
    state = {
        beans: [
            {
                id: 0,
                nameBeans: 'Solimo Coffee Beans 2 kg',
                country: 'Brazil',
                price: 7.53
            },
            {
                id: 1,
                nameBeans: 'Solimo Coffee Beans 2 kg',
                country: 'Kenya',
                price: 6.99
            },
            {
                id: 2,
                nameBeans: 'Solimo Coffee Beans 2 kg',
                country: 'Columbia',
                price: 18.99
            },
            {
                id: 3,
                nameBeans: 'Solimo Coffee Beans 2 kg',
                country: 'Brazil',
                price: 10.29
            },
            {
                id: 4,
                nameBeans: 'Solimo Coffee Beans 2 kg',
                country: 'Brazil',
                price: 8.35
            },
            {
                id: 5,
                nameBeans: 'Solimo Coffee Beans 2 kg',
                country: 'Brazil',
                price: 12.49
            }
        ],
        selectedItem: null,
        openedCoffeeItem: false
    }

    OpenCoffeeItem = () => {
        this.setState({ openedCoffeeItem: true })
    }

    handleSelect = (item) => {
        this.setState({ selectedItem: item })
    }

    render() {

        if (this.state.openedCoffeeItem) {
            return (<CoffeeItem item={this.state.selectedItem} changePage={this.props.changePage} />)
        }

        return (
            <>
                <header className="header">
                    <Header changePage={this.props.changePage} />
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
                    {this.state.beans.map(item => (<div className="coffee-beans__item" onClick={() => { this.OpenCoffeeItem(); this.handleSelect(item); }}>
                        <img src={aromistico} alt="" className="best-item-img" />
                        <p className="desc">{item.nameBeans}</p>
                        <p className="country">{item.country}</p>
                        <div className="price">{item.price}$</div>
                    </div>))}
                </div>
                <Footer changePage={this.props.changePage} />
            </>
        )
    }

}

export default GoodsList;