import { Component } from 'react';

import './Header.scss';

import lightBeans from '../../icons/coffee-beans-logo.svg';

class Header extends Component {
    render() {
        return (
            <div className='titles'>
                <div className="titles-main">
                    <img src={lightBeans} alt="" className='titles-main-beans' />
                    <a href='#' className='main'>Coffee house</a>
                </div>
                <a href='#' className='our-coffee'>Our coffee</a>
                <a href='#' className='goods-pleasure'>For your pleasure</a>
            </div>
        )
    }
}

export default Header;