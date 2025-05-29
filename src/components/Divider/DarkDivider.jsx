import './Divider.scss';
import blackBeans from '../../icons/coffee-beans-black.svg';

function DarkDivider() {
    return (
        <div className="divider-d">
            <div className="first-l"></div>
            <img src={blackBeans} className='beans-d' />
            <div className="second-l"></div>
        </div>
    )
}

export default DarkDivider;
