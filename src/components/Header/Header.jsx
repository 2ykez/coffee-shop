import { Component } from 'react';

import './Header.scss';

import lightBeans from '../../icons/coffee-beans-logo.svg';

class Header extends Component {

    render() {
        return (
            <div className='titles'>
                <div className="titles-main">
                    <img src={lightBeans} alt="" className='titles-main-beans' />
                    <button className='main' onClick={this.props.changePage}>Coffee house</button>
                </div>
                <button className='our-coffee' onClick={this.props.changePage}>Our coffee</button>
                <button className='goods-pleasure' onClick={this.props.changePage}>For your pleasure</button>
            </div>
        )
    }
}

export default Header;