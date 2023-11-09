import './Header.css';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='header-main-div'>
            <Link to={'/medicare'} className='header-left-div'>
                <img src={Logo} alt="Logo" className='header-logo'/>
                <span className='header-company-name'>MediCare</span>
            </Link>
            <div className='header-right-div'>
                <Link to={'/login'} className='primary-btn'>Login</Link>
            </div>
        </div>
    )
}
export default Header;