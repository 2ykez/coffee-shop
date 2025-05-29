import './Divider.scss';
import whiteBeans from '../../icons/coffee-beans-white.svg';

function LightDivider() {
    return (
        <div className="divider-w">
            <div className="first-l"></div>
            <img src={whiteBeans} className='beans-w' />
            <div className="second-l"></div>
        </div>
    )
}

export default LightDivider;
