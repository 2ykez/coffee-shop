import './Header.scss';

import darkBeans from '../../icons/coffee-beans-logo-dark.svg';

function DarkHeader(props) {
    return (
        <div className='titles-dark'>
            <div className="titles-dark-main">
                <img src={darkBeans} alt="" className='titles-dark-main-beans' />
                <button className='main' onClick={props.changePage}>Coffee house</button>
            </div>
            <button className='our-coffee' onClick={props.changePage}>Our coffee</button>
            <button className='goods-pleasure' onClick={props.changePage}>For your pleasure</button>
        </div>
    )
}

export default DarkHeader;