import { Link } from 'react-router-dom';
import './Navbar.scss';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../assets/img/logo.png';

const Navbar = () => {

    const navbarItems = [
        {"name" : "Home", "link": "/"},
        {"name" : "Shop", "link": "/shop"},
        {"name" : "Account", "link": "/"},
        {"name" : "Contact", "link": "/contact"},
    ];

    return (
        <div className='header-wrapper'>
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            {
                                navbarItems.map((item, index) => (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link" to={item.link}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className="header-right">
                            <button className="menu-icon">
                                <AiOutlineSearch />
                            </button>
                            <button className="menu-icon">
                                <AiOutlineUser />
                            </button>
                            <Link to="/cart" className="menu-icon">
                                <AiOutlineShoppingCart />
                                <span className='cart-item'>5</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;