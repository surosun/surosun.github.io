import React from "react";
import about from '../../assest/about.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { IoIosSnow, IoIosLeaf, IoIosFlower, IoIosPaw, IoIosColorFill, IoIosTv, IoIosDesktop, IoIosCar, IoIosBed } from "react-icons/io";
import 'react-awesome-slider/dist/styles.css';
import { Col, Container, Image, Row } from "react-bootstrap";
import room1 from '../../assest/room1.jpg'
import room2 from '../../assest/room2.jpg'
import './room.css'

const Rooms = () => {
    return (
        <>
            {/* <div>
                <img src={about} style={{ objectFit: "cover", width: '100%' }} />
            </div> */}

            <Container fluid >
                <div className="rooms">
                    <Row>
                        <Col md={6}>
                            <div className="rooms-details">
                                <Row>
                                    <Col md={8}>
                                        <div className="rooms-details-header">
                                            Standard Double Room
                                            <span>
                                                <small>(Price: 7500/ night)</small>
                                            </span>
                                        </div>                                       
                                    </Col>
                                   
                                    <hr></hr>
                                </Row>

                                <div className="">
                                    <Carousel className="testimonial_body">
                                        <Carousel.Item interval={1500}>
                                            <Row>
                                                <Col md={12}>
                                                    <img src={room1} style={{ objectFit: "cover", width: '100%', height: '200px' }} />
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <Row>

                                                <Col md={12}>
                                                    <img src={room2} style={{ objectFit: "cover", width: '100%', height: '200px' }} />
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="rooms-description-icon">
                                    <div className="icon-description">
                                        <IoIosSnow size={40} color={"#c59409"} />
                                        <p>Air conditioning </p>
                                    </div>
                                    <div className="icon-description">
                                        <IoIosPaw size={40} color={"#007bd7"} />
                                        <p>Pet friendly</p>
                                    </div>
                                    <div className="icon-description">

                                        <IoIosDesktop size={40} color={"#af0800"} />
                                        <p>Private TV</p>
                                    </div>
                                    <div className="icon-description">
                                        <IoIosColorFill size={40} color={"#008748"} />
                                        <p>Private Bathroom</p>
                                    </div>
                                    <div className="icon-description">
                                        <IoIosBed size={40} color={"#660087"} />
                                        <p>King size Bed</p>
                                    </div>

                                </div>
                                <div className="rooms-description">
                                    <Row>
                                        <div className="rooms-description-details">
                                            <h5>
                                                DESCRIPTION
                                            </h5>

                                            <p>
                                                Complete with a private bathroom equipped with a shower, all rooms at the hotel have a flat-screen TV and air conditioning, and some rooms also feature a seating area. At Swastik Resort Tajpur the rooms come with bed linen and towels.                                            </p>
                                        </div>


                                        <div className="rooms-description-details">
                                            <h5>
                                                Hotel facilities
                                            </h5>

                                            <div className="rooms-description-details-row">
                                                <Row>
                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Safety&nbsp;and&nbsp;Hygiene
                                                            </p>
                                                            <ul>
                                                                <li>Masks</li>
                                                                <li>Sanitizers</li>
                                                                <li>Thermal Screening</li>
                                                                <li>Disinfection</li>
                                                            </ul>
                                                        </div>

                                                    </Col>
                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Basic Facilities
                                                            </p>
                                                            <ul>
                                                                <li>Air Conditioning</li>
                                                                <li>Room Service</li>
                                                                <li>Power Backup</li>
                                                                <li>Bathroom</li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                General Services

                                                            </p>
                                                            <ul>
                                                                <li>Luggage Assistance</li>
                                                                <li>Doctor on Call</li>
                                                                <li>Ticket/Tour Assistance</li>
                                                                <li>Caretaker</li>
                                                            </ul>

                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>

                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Media and technology
                                                            </p>
                                                            <ul>
                                                                <li>TV</li>
                                                            </ul>
                                                        </div>
                                                    </Col>

                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Safety&nbsp;and&nbsp;Security
                                                            </p>
                                                            <ul>
                                                                <li>Safety and Security</li>
                                                                <li>Security</li>

                                                            </ul>
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </div>
                                        </div>
                                    </Row>
                                </div>

                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="rooms-details">
                                <Row>
                                    <Col md={8}>
                                        <div className="rooms-details-header">
                                            Standard Double Room
                                            <span>
                                                <small>(Price: 7500/ night)</small>
                                            </span>
                                        </div>
                                       
                                    </Col>
                                   
                                    {/* <Col md={4}>
                                       <span>Price: 7500 (per night)</span>
                                    </Col> */}
                                    <hr></hr>
                                </Row>

                                <div className="">
                                    <Carousel className="testimonial_body">
                                        <Carousel.Item interval={1500}>
                                            <Row>
                                                <Col md={12}>
                                                    <img src={room1} style={{ objectFit: "cover", width: '100%', height: '200px' }} />
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <Row>

                                                <Col md={12}>
                                                    <img src={room2} style={{ objectFit: "cover", width: '100%', height: '200px' }} />
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="rooms-description-icon">
                                    <div className="icon-description">
                                        <IoIosSnow size={40} color={"#c59409"} />
                                        <p>Air conditioning </p>
                                    </div>
                                    <div className="icon-description">
                                        <IoIosPaw size={40} color={"#007bd7"} />
                                        <p>Pet friendly</p>
                                    </div>
                                    <div className="icon-description">

                                        <IoIosDesktop size={40} color={"#af0800"} />
                                        <p>Private TV</p>
                                    </div>
                                    <div className="icon-description">
                                        <IoIosColorFill size={40} color={"#008748"} />
                                        <p>Private Bathroom</p>
                                    </div>
                                    <div className="icon-description">
                                        <IoIosBed size={40} color={"#660087"} />
                                        <p>King size Bed</p>
                                    </div>

                                </div>
                                <div className="rooms-description">
                                    <Row>
                                        <div className="rooms-description-details">
                                            <h5>
                                                DESCRIPTION
                                            </h5>

                                            <p>
                                                Complete with a private bathroom equipped with a shower, all rooms at the hotel have a flat-screen TV and air conditioning, and some rooms also feature a seating area. At Swastik Resort Tajpur the rooms come with bed linen and towels.                                            </p>
                                        </div>


                                        <div className="rooms-description-details">
                                            <h5>
                                                Hotel facilities
                                            </h5>

                                            <div className="rooms-description-details-row">
                                                <Row>
                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Safety&nbsp;and&nbsp;Hygiene
                                                            </p>
                                                            <ul>
                                                                <li>Masks</li>
                                                                <li>Sanitizers</li>
                                                                <li>Thermal Screening</li>
                                                                <li>Disinfection</li>
                                                            </ul>
                                                        </div>

                                                    </Col>
                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Basic Facilities
                                                            </p>
                                                            <ul>
                                                                <li>Air Conditioning</li>
                                                                <li>Room Service</li>
                                                                <li>Power Backup</li>
                                                                <li>Bathroom</li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                General Services

                                                            </p>
                                                            <ul>
                                                                <li>Luggage Assistance</li>
                                                                <li>Doctor on Call</li>
                                                                <li>Ticket/Tour Assistance</li>
                                                                <li>Caretaker</li>
                                                            </ul>

                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>

                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Media and technology
                                                            </p>
                                                            <ul>
                                                                <li>TV</li>
                                                            </ul>
                                                        </div>
                                                    </Col>

                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Safety&nbsp;and&nbsp;Security
                                                            </p>
                                                            <ul>
                                                                <li>Safety and Security</li>
                                                                <li>Security</li>

                                                            </ul>
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </div>
                                        </div>
                                    </Row>
                                </div>

                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <div className="rooms-details">
                                <Row>
                                    <Col md={8}>
                                        <div className="rooms-details-header">
                                            Standard Double Room
                                            <span>
                                                <small>(Price: 7500/ night)</small>
                                            </span>
                                        </div>
                                       
                                    </Col>
                                   
                                    {/* <Col md={4}>
                                       <span>Price: 7500 (per night)</span>
                                    </Col> */}
                                    <hr></hr>
                                </Row>

                                <div className="">
                                    <Carousel className="testimonial_body">
                                        <Carousel.Item interval={1500}>
                                            <Row>
                                                <Col md={12}>
                                                    <img src={room1} style={{ objectFit: "cover", width: '100%' }} />
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                        <Carousel.Item interval={500}>
                                            <Row>

                                                <Col md={12}>
                                                    <img src={room2} style={{ objectFit: "cover", width: '100%' }} />
                                                </Col>
                                            </Row>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                

                            </div>
                        </Col>

                        <Col md={6}>
                           <div className="rooms-description-details-right">
                           <div className="rooms-description-icon">
                                    <div className="icon-description">
                                        <IoIosSnow size={40} color={"#c59409"} />
                                        <p>Air conditioning </p>
                                    </div>
                                    <div className="icon-description">
                                        <IoIosPaw size={40} color={"#007bd7"} />
                                        <p>Pet friendly</p>
                                    </div>
                                    <div className="icon-description">

                                        <IoIosDesktop size={40} color={"#af0800"} />
                                        <p>Private TV</p>
                                    </div>
                                    <div className="icon-description">
                                        <IoIosColorFill size={40} color={"#008748"} />
                                        <p>Private Bathroom</p>
                                    </div>
                                    <div className="icon-description">
                                        <IoIosBed size={40} color={"#660087"} />
                                        <p>King size Bed</p>
                                    </div>

                                </div>
                                <div className="rooms-description">
                                    <Row>
                                        <div className="rooms-description-details">
                                            <h5>
                                                DESCRIPTION
                                            </h5>

                                            <p>
                                                Complete with a private bathroom equipped with a shower, all rooms at the hotel have a flat-screen TV and air conditioning, and some rooms also feature a seating area. At Swastik Resort Tajpur the rooms come with bed linen and towels.                                            </p>
                                        </div>


                                        <div className="rooms-description-details">
                                            <h5>
                                                Hotel facilities
                                            </h5>

                                            <div className="rooms-description-details-row">
                                                <Row>
                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Safety&nbsp;and&nbsp;Hygiene
                                                            </p>
                                                            <ul>
                                                                <li>Masks</li>
                                                                <li>Sanitizers</li>
                                                                <li>Thermal Screening</li>
                                                                <li>Disinfection</li>
                                                            </ul>
                                                        </div>

                                                    </Col>
                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Basic Facilities
                                                            </p>
                                                            <ul>
                                                                <li>Air Conditioning</li>
                                                                <li>Room Service</li>
                                                                <li>Power Backup</li>
                                                                <li>Bathroom</li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                General Services

                                                            </p>
                                                            <ul>
                                                                <li>Luggage Assistance</li>
                                                                <li>Doctor on Call</li>
                                                                <li>Ticket/Tour Assistance</li>
                                                                <li>Caretaker</li>
                                                            </ul>

                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>

                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Media and technology
                                                            </p>
                                                            <ul>
                                                                <li>TV</li>
                                                            </ul>
                                                        </div>
                                                    </Col>

                                                    <Col md={4}>
                                                        <div className="hotel-facilities-style">
                                                            <p>
                                                                Safety&nbsp;and&nbsp;Security
                                                            </p>
                                                            <ul>
                                                                <li>Safety and Security</li>
                                                                <li>Security</li>

                                                            </ul>
                                                        </div>
                                                    </Col>

                                                </Row>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                           </div>
                        </Col>
                    </Row>
                </div>
            </Container>




        </>
    );
}

export default Rooms;
