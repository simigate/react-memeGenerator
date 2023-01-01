import PropTypes from 'prop-types';
import '../App.css';
import logo from '../images/logo.jpg';

const Navbar = () => {
    let title = "Meme Generator"
    return (
        <div >
            <nav className="App-navbar">
                <img src={logo} className="Navbar-logo" alt="logo" />
                <h3 className='Navbar-title'>{title}</h3>
            </nav>
        </div >
    );
}
export default Navbar;