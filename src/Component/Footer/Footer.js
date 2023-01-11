import React from "react";
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import logo from '../../assest/Logo.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { IconName, IoIosAirplane, IoIosCall, IoLogoFacebook, IoLogoWhatsapp, IoLogoTwitter } from "react-icons/io";
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={6}>    
                    </Col>
                    <div className="footer_bottom">
                        <Row>
                            <Col md={8}>
                                <p>Copyright ©2022 All rights reserved | This template is made with  by <i>Swastik</i></p>
                            </Col>
                            <Col md={4}>
                            <span><IoLogoFacebook size={25} /></span> <span><IoLogoWhatsapp size={25} /></span> <span><IoLogoTwitter size={25} /></span> 
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
