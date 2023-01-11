import React from "react";
import { Container, Row, Col, Form, Card, Button, CardGroup } from 'react-bootstrap';
import MapContainer from '../Map/map'
import slider from '../../assest/slider.jpg'
import room1 from '../../assest/room1.jpg'
import room2 from '../../assest/room2.jpg'
import room3 from '../../assest/room3.jpg'
import { IoIosLogIn, IoIosAirplane, IoIosFootball, IoIosCar, IoIosCall, IoLogoFacebook, IoLogoWhatsapp, IoLogoTwitter, IoMdPizza } from "react-icons/io";
import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import MyDatePicker from './datepicker'
import 'react-awesome-slider/dist/styles.css';
import './slider.css'
const Slider = () => {
    return (
        <>
            <Container fluid >
                <Row>
                    <Col md={12} >
                        <img src={slider} style={{ objectFit: "cover", width: '100%', height: '500px' }} />
                    </Col>

                </Row>
                <Row>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Col md={6}>
                            <div className="form-search-position" >
                                <Form>
                                    <Row className="mt-4">
                                        <Col md={4}>
                                            <Form>
                                                <MyDatePicker />
                                            </Form>

                                        </Col>
                                        <Col md={4}>
                                            <Form.Select id="disabledSelect">
                                                <option>Disabled select</option>
                                            </Form.Select>
                                        </Col>
                                        <Col md={4}>
                                            <button className="button button-form" type="submit">Check Availability</button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </div>
                </Row>




                <section className="welcome">
                    <Row>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Col md={4}>
                                <Row>
                                    <Col md={7}>
                                        <div className="card">
                                            <img src={slider} style={{ objectFit: "cover", width: '100%' }} />
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="card">
                                            <img src={slider} style={{ objectFit: "cover", width: '100%' }} />
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className="card">
                                            <img src={slider} style={{ objectFit: "cover", width: '100%' }} />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={7}>
                                <div className="welcome-content">
                                    <Col md={7}>
                                        <h2 className="about-us-heading"><span className="d-block">Welcome</span> to our residence</h2>
                                    </Col>
                                    <p>Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, appear void give third bearing divide one so blessed moved firmament gathered </p>
                                    <p>Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, appear void give third bearing divide one so blessed</p>
                                    <a className="button button--active home-banner-btn mt-4" href="AboutUs">Learn More</a>
                                </div>
                            </Col>
                        </div>
                    </Row>

                </section>



                <section className="amenities">
                    <Row>
                        <Col md={11}> <h1 className="Section_header">Our Facilities</h1> </Col>

                        <Col md={1}>  <a className="" href="services"><h6 className="Section_link">See All Facilities</h6> </a>   </Col>
                        <hr style={{ color: "#c1c1c1" }}></hr>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <div className="facilities_icon">
                                <IoMdPizza size={50} />
                            </div>
                            <div className="facilities_name">
                                <p>24-Hour Front Desk</p>
                            </div>
                            <div className="facilities_details">
                                <p>
                                    The reception is opened 24 hours a day. Our receptionists inform our guests of all the hotel facilities and events, and ensure that everything is done to satisfy their needs during their stay.
                                </p>
                            </div>
                        </Col>


                        <Col md={3}>
                            <div className="facilities_icon">
                                <IoIosCar size={50} />
                            </div>
                            <div className="facilities_name">
                                <p>Car Parking Area
                                </p>
                            </div>
                            <div className="facilities_details">
                                <p>
                                    Each spa suite has been designed with volcanic rocks, thatched roofs with an open air bathroom, adding a truly magical and tranquil feeling for your well-being.                                </p>
                            </div>
                        </Col>


                        <Col md={3}>
                            <div className="facilities_icon">
                                <IoIosFootball size={50} />
                            </div>
                            <div className="facilities_name">
                                <p>Food Area
                                </p>
                            </div>
                            <div className="facilities_details">
                                <p>
                                    Enjoy a comfortable ride to our luxury Spa resort and Hotel from the airport by booking our convenient shuttle services or private limos.                                </p>
                            </div>
                        </Col>


                        <Col md={3}>
                            <div className="facilities_icon">
                                <IoIosFootball size={50} />
                            </div>
                            <div className="facilities_name">
                                <p>play ground

                                </p>
                            </div>
                            <div className="facilities_details">
                                <p>
                                    Our Restaurant is opened for breakfast, lunch, and dinner and specializes in gourmet cuisines from around the world, with a variety sure to please any palate.                                </p>
                            </div>
                        </Col>


                    </Row>

                </section>


                <section className="amenities">
                    <Row>
                        <Col md={11}> <h1 className="Section_header">Our Rooms</h1> </Col>

                        <Col md={1}> <h6 className="Section_link">See All Rooms</h6>  </Col>
                        <hr style={{ color: "#c1c1c1" }}></hr>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <div className="services-box">
                                <img src={room1} style={{ objectFit: "cover", width: '100%' }} />
                                <div className="services-box-caption">
                                    <div className="services-box-title">Standard Rooms</div>
                                    <span className="services-box-price">From $75 Per Night</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <img src={room1} style={{ objectFit: "cover", width: '100%' }} />
                        </Col>
                        <Col md={4}>
                            <img src={room1} style={{ objectFit: "cover", width: '100%' }} />
                        </Col>
                    </Row>
                </section>


                <section className="count">
                    <CardGroup>
                        <Card>
                            <Card.Body className="count_body">
                                <Card.Title className="count_number">10</Card.Title>
                                <Card.Text className="count_details">
                                    YEARS OF EXPERIENCE
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body className="count_body">
                                <Card.Title className="count_number">7</Card.Title>
                                <Card.Text className="count_details">
                                    SPA TREATMENT ROOMS
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body className="count_body">
                                <Card.Title className="count_number">26</Card.Title>
                                <Card.Text className="count_details">
                                    FACE & BODY TREATMENTS
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body className="count_body">
                                <Card.Title className="count_number">12</Card.Title>
                                <Card.Text className="count_details">
                                    TYPES OF MASSAGES
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </section>



                <section className="testimonial">
                    <Row>
                        <Col md={10}> <h1 className="Section_header">Our Testimonial</h1> </Col>

                        <Col md={2} style={{ justifyContent: 'flex-end', display: 'flex' }}>    <h6 className="Section_link">See All Testimonial</h6>  </Col>
                        <hr style={{ color: "#c1c1c1" }}></hr>
                    </Row>

                    <Row>
                        <div className="make_center">
                            <Col md={7}>
                                <Carousel className="testimonial_body ">
                                    <Carousel.Item interval={1500}>
                                        <Row>
                                            <Col md={8}>
                                                <div className="testimonial_details">
                                                    <p>
                                                        Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, appear void give third bearing divide one so blessed moved firmament gathered

                                                        Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, appear void give third bearing divide one so blessed
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col md={4} className="testimonial_person_images">
                                                <div className="testimonial_images">
                                                    <Image src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" roundedCircle />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item interval={500}>
                                        <Row>
                                            <Col md={8}>
                                                <div className="testimonial_details">
                                                    <p>
                                                        Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, appear void give third bearing divide one so blessed moved firmament gathered

                                                        Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, appear void give third bearing divide one so blessed
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col md={4} className="testimonial_person_images">
                                                <div className="testimonial_images">
                                                    <Image src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png" roundedCircle />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </div>
                    </Row>

                </section>




                <section className="mapSection">
                    <Row>
                        <Col md={11}> <h1 className="Section_header">Our Location</h1> </Col>

                        <hr style={{ color: "#c1c1c1" }}></hr>
                    </Row>

                    <Row>
                        <Col md={7}>
                            <MapContainer />
                        </Col>
                        <Col md={5}>
                            <div className="contacts_way">
                                <p className="aside-title"> get Social</p>
                                <hr class="divider divider-left divider-custom"></hr>

                                <span><IoLogoFacebook size={25} color={"#636e74"} style={{marginLeft: '15px'}}/></span>
                                <span><IoLogoWhatsapp size={25} color={"#636e74"} style={{marginLeft: '15px'}} /></span>
                                <span><IoLogoTwitter size={25}  color={"#636e74"} style={{marginLeft: '15px'}}/></span>
                            </div>

                            <div className="contacts_way">
                                <p className="aside-title">PHONE</p>
                                <hr class="divider divider-left divider-custom"></hr>

                                <span><IoIosCall size={25}  color={"#636e74"}/></span> - 1-800-1234-567
                            </div>

                            <div className="contacts_way">
                                <p className="aside-title"> ADDRESS</p>
                                <hr class="divider divider-left divider-custom"></hr>

                                <span><IoIosLogIn size={25} /></span> - Balisai- Tajpur Sea Beach Rd, Tajpur, West Bengal 721423
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container >
        </>
    );
}

export default Slider;
