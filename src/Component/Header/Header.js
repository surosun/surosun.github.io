import React from "react";
import { Button, Container, Row } from 'react-bootstrap';
import logo from '../../assest/Logo.png'
import './header.css'
import { IconName, IoIosAirplane, IoIosCall, IoLogoFacebook, IoLogoWhatsapp, IoLogoTwitter } from "react-icons/io";

const Header = () => {
    return (
        <Container fluid >

            <section className="header_section">
                <div className="header_details">
                <p className="side_intro"> Follow Us : <span><IoLogoFacebook size={20} /></span> <span><IoLogoWhatsapp size={20} /></span> <span><IoLogoTwitter size={20} /></span>  </p>
                <img src={logo} className="logoDisplay" style={{ width: '115px' }} />
                <p className="side_intro" style={{marginRight: "40px"}}> <span><IoIosCall size={25} /></span> +12 365 5233  </p>

                </div>
                <hr style={{ color: "#c1c1c1", padding: "0% 4%" }}></hr>
            </section>
        </Container>
    );
}

export default Header;
