import React from 'react';
import { Container, Row, Col, Form, Card, Button, CardGroup } from 'react-bootstrap';
import Breakfast from '../../assest/breakfast.jpg'
import about from '../../assest/about.jpg'
import Collapsible from 'react-collapsible';
import './Contact.css'
import { IoIosArrowDown } from "react-icons/io";
import MapContainer from '../Map/map';



const Contact = () => {
    return (
        <>
            {/* <div>
                <img src={about} style={{ objectFit: "cover", width: '100%' }} />
            </div> */}

            <Container>
                <Row>
                    <Col md={12}>
                    <MapContainer />
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <div className='contact-left-part'>
                            <h1>Restrictions</h1>
                            <ul>
                                <li>Guests with fever are not allowed</li>
                                <li>Guests from containment zones are not allowed
                                </li>
                                <li>Guests below 18 years of age are not allowed at the property.
                                </li>
                                <li>Office ID, PAN Card and Non-Govt IDs are not accepted as ID proof(s)
                                </li>

                                <li>Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s)
                                </li>
                                <li>Property staff is trained on hygiene guidelines
                                </li>

                                <li>Pets are not allowed.
                                </li>
                                <li>Credit/Debit cards not accepted at the property
                                </li>
                                <li>Outside food is not allowed
                                </li>
                                <li>Smoking within the premises is not allowed
                                </li>


                                <li>Does not allow private parties or events
                                </li>
                                <li>Quarantine protocols are being followed as per local government authorities
                                </li>

                            </ul>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className='contact'>
                            <h1>Contact Us</h1>
                            <p>Dear visiters, you all can call us in the number which is provided in below</p>
                            <div className='number-list'>
                                1. persion 1- 1234567890
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    )

}



export default Contact
