import { Component } from 'react';

import CoffeeList from '../Coffee-list/Coffee-list';
import CoffeeItem from '../Coffee-item/Coffee-item';
import GoodsList from '../Goods-list/Goods-list';

import Header from "../Header/Header";
import LightDivider from "../Divider/Divider";
import DarkDivider from "../Divider/DarkDivider";
import Footer from "../Footer/Footer";


import './App.scss';
import beans2kg from '../../img/beans-2kg.png';
import beans1kg from '../../img/beans-1kg.jpg';
import aromistioc from '../../img/aromistico.jpg';


class App extends Component {
  state = {
    currentPage: 'main'
  }

  changePage = (e) => {
    if (e.target.className === 'our-coffee') {
      this.setState({ currentPage: 'our-coffee' })
    } else if (e.target.className === 'goods-pleasure') {
      this.setState({ currentPage: 'goods-pleasure' })
    } else {
      this.setState({ currentPage: 'main' })
    }

  }

  changeOnCoffeeList = () => {
    this.setState({ currentPage: 'our-coffee' })
  }

  render() {

    if (this.state.currentPage === 'our-coffee') return (<CoffeeList changePage={this.changePage} />)
    if (this.state.currentPage === 'goods-pleasure') return (<GoodsList changePage={this.changePage} />)

    return (
      <>
        <header className="header-main">
          <Header changePage={this.changePage} />
          <h1 className="heading">Everything You Love About Coffee</h1>
          <LightDivider />
          <p className="header-text">We makes every day full of energy and taste</p>
          <p className="header-question">Want to try our beans?</p>
          <button className="btn" onClick={this.changeOnCoffeeList}>More</button>
        </header>
        <div className="about">
          <h2 className="heading-s">About us</h2>
          <DarkDivider />
          <div className="text">
            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.
            </p>
            <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
              read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
              horrible but confined day end marriage. Eagerness furniture set preserved far
              recommend. Did even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </p>
          </div>
        </div>
        <div className="our-best">
          <h2 className="heading-s">Our best</h2>
          <div className="best-items">
            <div className="best-item">
              <img src={beans2kg} alt="" className="best-item-img" />
              <p className="desc">Solimo Coffee Beans 2 kg</p>
              <div className="price">10.73$</div>
            </div>
            <div className="best-item">
              <img src={beans1kg} alt="" className="best-item-img" />
              <p className="desc">Presto Coffee Beans 1 kg</p>
              <div className="price">15.99$</div>
            </div>
            <div className="best-item">
              <img src={aromistioc} alt="" className="best-item-img" />
              <p className="desc">AROMISTICO Coffee 1 kg</p>
              <div className="price">6.99$</div>
            </div>
          </div>
        </div>
        <Footer changePage={this.changePage} />
      </>
    )
  }
}
export default App;
