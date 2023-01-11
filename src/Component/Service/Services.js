import React, { useState } from "react";
import Tabs from "react-simply-tabs";

import { Container, Row, Col, Form, Card, Button, CardGroup } from 'react-bootstrap';
import './Services.css'
import Breakfast from '../../assest/breakfast.jpg'
import Food from "./Food/Food";


const Services = () => {
    const [activeTabIndex, setTabIndex] = useState(0);
    return (
        <Container >
            <div className='services-header'>
                <p>services we provide to our guest </p>
            </div>
            <div className='services-body'>
                <p>Swastik Resort which is located in Digha offers exclusive services and benefits for the comfort of its guests.
                    Among many facilities that the hotel has to offer, guests can directly car park area & amusement park at hotel entrance.
                    A various choice of restaurants and cafés are available at the Swastik Resort. The hotel's family-friendly and
                    home-like accommodation concept also provide sea beach and many more within a walking distance. </p>
            </div>

            <div className='services-items'>
                <Row>
                    <Col md={6}>
                        <div className='services-items-header'>
                            <p>car parking</p>
                        </div>
                        <div className="services_images">
                            <img src={Breakfast} style={{ objectFit: "cover", width: '100%' }} />
                        </div>
                        <div className='services-items-details'>
                            <p>Among many facilities that the hotel has there own Safe and secure parking facility car parking place. there </p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className='services-items-header'>
                            <p>Children park</p>
                        </div>
                        <div className="services_images">
                            <img src={Breakfast} style={{ objectFit: "cover", width: '100%' }} />
                        </div>
                        <div className='services-items-details'>
                            <p>As visiter can see Swastik Hotel have there won play ground for kids</p>
                        </div>
                    </Col>
                </Row>


            </div>

            <Row>
                <Col md={12}>
                    <div className='services-items-header'>
                        <p>Stuff service / room service</p>
                    </div>
                    <div className="services_images">
                            <img src={Breakfast} style={{ objectFit: "cover", width: '100%' }} />
                        </div>
                    <div className='services-items-details'>
                        <p>Among many facilities that the hotel has to offer, guests can directly car park area & amusement park at hotel entrance.
                            A various choice of restaurants and cafés are available at the Swastik Resort. The hotel's family-friendly and
                            home-like accommodation concept also provide sea beach and many more within a walking distance.</p>
                    </div>
                </Col>
            </Row>



            <Row>
                <Col md={12}>
                    <div className='services-items-header'>
                        <p>Food Area</p>
                    </div>
                    <div className="services_images">
                            <img src={Breakfast} style={{ objectFit: "cover", width: '100%' }} />
                        </div>
                    <div className='services-items-details'>
                        <p>Among many facilities that the hotel has to offer, guests can directly car park area & amusement park at hotel entrance.
                            A various choice of restaurants and cafés are available at the Swastik Resort. The hotel's family-friendly and
                            home-like accommodation concept also provide sea beach and many more within a walking distance.</p>
                    </div>
                </Col>
            </Row>
            <Food />



        </Container>
    )

}



export default Services
