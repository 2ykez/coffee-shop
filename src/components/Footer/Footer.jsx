import DarkDivider from "../Divider/DarkDivider";
import DarkHeader from "../Header/DarkHeader";

import './Footer.scss'

function Footer(props) {
    return (
        <footer className="footer">
            <DarkHeader changePage={props.changePage} />
            <DarkDivider />
        </footer>
    )
}

export default Footer;