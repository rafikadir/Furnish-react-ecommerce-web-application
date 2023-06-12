import "./Footer.scss";
import logo from '../../assets/img/logo.png';
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {

    const FooterInfo = [
        {
            "title" : "Catagories",
            "links" : [{ "name":"Chair","link": "/"},
                    { "name":"Sofa","link": "/"},
                    { "name":"Table","link": "/"},
                    { "name":"Book Shelf","link": "/"}]
        },
        {
            "title" : "Customer Care",
            "links" : [{ "name":"My Account","link": "/"},
                    { "name":"Returns","link": "/"},
                    { "name":"Orders History","link": "/"},
                    { "name":"Order Tracking","link": "/"}]
        },
        {
            "title" : "Company",
            "links" : [{ "name":"About","link": "/"},
                    { "name":"Shop","link": "/"},
                    { "name":"Blog","link": "/"},
                    { "name":"Contact","link": "/"}]
        }
    ];

    return ( 
        <div className="footer"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="company-info">
                            <img src={logo} alt="logo" />

                            <ul className="company-contact">
                                <li>17 Princess Road, London</li>
                                <li>furnish@gmail.com</li>
                                <li>+0 998 5585 </li>
                            </ul>

                            <div className="company-social">
                                <Link to="/"><AiFillFacebook/></Link>
                                <Link to="/"><AiFillInstagram/></Link>
                                <Link to="/"><AiFillTwitterSquare/></Link>
                            </div> 
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="00">
                            <h3>Catagories</h3>
                            <ul>
                                <li><Link to="/">Chair</Link></li>
                                <li><Link to="/">Sofa</Link></li>
                                <li><Link to="/">Table</Link></li>
                                <li><Link to="/">Book Shelf</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="footer-links">
                            <h3>Customer Care</h3>
                            <ul>
                                <li><Link to="/">My Account</Link></li>
                                <li><Link to="/">Returns</Link></li>
                                <li><Link to="/">Orders History</Link></li>
                                <li><Link to="/">Order Tracking</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="footer-links">
                            <h3>Company</h3>
                            <ul>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Shop</Link></li>
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </div>  
    );
};

export default Footer;