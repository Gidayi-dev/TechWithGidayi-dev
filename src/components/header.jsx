import { Link } from 'react-router-dom';
import './header.css';
import Logo from '/src/assets/icon.png';

function Header () {
    return (
        <div className='header-section'>
            <div className='logo'>
                <img src={Logo} alt="Logo" />
                <h4>Tech With Gidayi</h4>
            </div>
            <div className='bar'>
            <div className='links'>
                <a href="#">Blogs</a>
            </div>
            <div className='links'>
                <a href="#">Contact Us</a>
            </div>
            </div>
        </div>
    )
}
 export default Header;