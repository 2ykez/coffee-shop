import './Header.scss';

import darkBeans from '../../icons/coffee-beans-logo-dark.svg';

function DarkHeader() {
    return (
        <div className='titles-dark'>
            <div className="titles-dark-main">
                <img src={darkBeans} alt="" className='titles-dark-main-beans' />
                <a href='#' className='main'>Coffee house</a>
            </div>
            <a href='#' className='our-coffee'>Our coffee</a>
            <a href='#' className='goods-pleasure'>For your pleasure</a>
        </div>
    )
}

export default DarkHeader;