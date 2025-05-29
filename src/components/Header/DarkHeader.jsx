import './Header.scss';

import darkBeans from '../../icons/coffee-beans-logo-dark.svg';

function DarkHeader() {
    return (
        <div className='titles-dark'>
            <div className="titles-dark-main">
                <img src={darkBeans} alt="" className='titles-dark-main-beans' />
                <button className='main'>Coffee house</button>
            </div>
            <button className='our-coffee'>Our coffee</button>
            <button className='goods-pleasure'>For your pleasure</button>
        </div>
    )
}

export default DarkHeader;