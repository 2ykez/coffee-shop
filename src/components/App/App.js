import { Component } from 'react';

import Main from '../Main/Main';
import CoffeeList from '../Coffee-list/Coffee-list';
import CoffeeItem from '../Coffee-item/Coffee-item';
import GoodsList from '../Goods-list/Goods-list';

import logo from '../../logo.svg';
import './App.css';

class App extends Component {

  onSwitchPage = () => {

  }

  render() {
    return (
      <Main />
    );
  }

}

export default App;
