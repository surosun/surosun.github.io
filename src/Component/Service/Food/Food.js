import React, { useState } from "react";
import Tabs from "react-simply-tabs";
import './Food.css'
import { Container, Row, Col, Form, Card, Button, CardGroup } from 'react-bootstrap';

//import Breakfast from '../../assest/breakfast.jpg'


const Food = () => {
    const [activeTabIndex, setTabIndex] = useState(0);
    return (
        <div className="App">
            <Tabs
                activeTabIndex={activeTabIndex}
                activeTabProps={{
                    className: "active",
                    style: {
                        background: "black",
                        color: "white"
                    }
                }}
                activeControlProps={{
                    className: "active",
                    style: { background: "#f8d808", color: "#767676" }
                }}
                onRequestChange={setTabIndex}
                controls={[
                    <button type="button" title="Show 1" className="tabControlClassName">
                       BREAKFAST
                    </button>,
                    <button type="button" title="Show 2" className="tabControlClassName">
                        Lunch
                    </button>,
                     <button type="button" title="Show 3" className="tabControlClassName">
                     Evening Snack
                 </button>,
                    <button type="button" title="Show 4" className="tabControlClassName">
                        Dinner
                    </button>

                    
                ]}
            >
                <div className="tabClassName">
                <Row>
                <Col md={12}>
                    <div className='menu-list'>
                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>Tea</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 15.00</p>

                                </Col>
                            </Row>



                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black Tea</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 10.00</p>

                                </Col>
                            </Row>


                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'> coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 30.00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 25.00</p>
                                </Col>
                            </Row>

                        </div>



                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>PURI SABJI</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1Pit</span>
                                        <span className='list-item-amount2'>4Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 60.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'> ALU PARATHA </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1 pit</span>
                                        <span className='list-item-amount2'>2Pes</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 60.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>BREAD OMELET </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 50.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>BREAD BUTTER TOAST </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1 pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 50.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>BREAD JAM</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>MAGGIE </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 pit</span>
                                        <span className='list-item-amount2'>-</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>EGG MAGGIE </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 pit</span>
                                        <span className='list-item-amount2'>-</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 55.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>OMLET </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 20.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>OMLET  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>PLAIN PARATHA  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>2 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>VEG PAKORA  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1Pit</span>
                                        <span className='list-item-amount2'>6 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>EGG POUCH</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 20.00</p>
                                </Col>
                            </Row>

                        </div>



                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 25.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 25.00</p>
                                </Col>
                            </Row>

                        </div>

                    </div>
                </Col>
                {/* <Col md={6} >
                    <div className='service-side-images'>
                        <img src={Breakfast} roundedCircle={true} />
                    </div>
                </Col> */}
            </Row>

                </div>

                <div className="tabClassName">

                <Row>
                <Col md={12}>
                    <div className='menu-list'>
                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>Tea</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 15.00</p>

                                </Col>
                            </Row>



                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black Tea</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 10.00</p>

                                </Col>
                            </Row>


                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'> coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 30.00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 25.00</p>
                                </Col>
                            </Row>

                        </div>



                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>PURI SABJI</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1Pit</span>
                                        <span className='list-item-amount2'>4Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 60.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'> ALU PARATHA </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1 pit</span>
                                        <span className='list-item-amount2'>2Pes</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 60.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>BREAD OMELET </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 50.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>BREAD BUTTER TOAST </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1 pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 50.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>BREAD JAM</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>MAGGIE </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 pit</span>
                                        <span className='list-item-amount2'>-</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>EGG MAGGIE </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 pit</span>
                                        <span className='list-item-amount2'>-</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 55.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>OMLET </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 20.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>OMLET  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>PLAIN PARATHA  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>2 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>VEG PAKORA  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1Pit</span>
                                        <span className='list-item-amount2'>6 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>EGG POUCH</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 20.00</p>
                                </Col>
                            </Row>

                        </div>



                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 25.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 25.00</p>
                                </Col>
                            </Row>

                        </div>

                    </div>
                </Col>
                {/* <Col md={6} >
                    <div className='service-side-images'>
                        <img src={Breakfast} roundedCircle={true} />
                    </div>
                </Col> */}
            </Row>

                </div>

                <div className="tabClassName">

                <Row>
                <Col md={12}>
                    <div className='menu-list'>
                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>Tea</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 15.00</p>

                                </Col>
                            </Row>



                        </div>

                     

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>EGG MAGGIE </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 pit</span>
                                        <span className='list-item-amount2'>-</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 55.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>OMLET </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 20.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>OMLET  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>PLAIN PARATHA  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>2 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>VEG PAKORA  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1Pit</span>
                                        <span className='list-item-amount2'>6 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>EGG POUCH</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 20.00</p>
                                </Col>
                            </Row>

                        </div>



                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 25.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 25.00</p>
                                </Col>
                            </Row>

                        </div>

                    </div>
                </Col>
                {/* <Col md={6} >
                    <div className='service-side-images'>
                        <img src={Breakfast} roundedCircle={true} />
                    </div>
                </Col> */}
            </Row>
                </div>
                <div className="tabClassName">
                <Row>
                <Col md={12}>
                    <div className='menu-list'>
                       
                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>BREAD BUTTER TOAST </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1 pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 50.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>BREAD JAM</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>MAGGIE </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 pit</span>
                                        <span className='list-item-amount2'>-</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>EGG MAGGIE </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 pit</span>
                                        <span className='list-item-amount2'>-</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 55.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>OMLET </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 20.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>OMLET  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>PLAIN PARATHA  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4Pit</span>
                                        <span className='list-item-amount2'>2 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>VEG PAKORA  </h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>1Pit</span>
                                        <span className='list-item-amount2'>6 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 40.00</p>
                                </Col>
                            </Row>

                        </div>


                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>EGG POUCH</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>4 Pit</span>
                                        <span className='list-item-amount2'>1 Pcs</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 20.00</p>
                                </Col>
                            </Row>

                        </div>



                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 25.00</p>
                                </Col>
                            </Row>

                        </div>

                        <div className='list'>
                            <Row>
                                <Col md={5}>
                                    <h4 className='list-item'>black coffe</h4>
                                </Col>
                                <Col md={3}>
                                    <div className='item-amount'>
                                        <span className='list-item-amount'>-</span>
                                        <span className='list-item-amount2'>1 cup</span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <p className='list-price'>rs. 25.00</p>
                                </Col>
                            </Row>

                        </div>

                    </div>
                </Col>
                {/* <Col md={6} >
                    <div className='service-side-images'>
                        <img src={Breakfast} roundedCircle={true} />
                    </div>
                </Col> */}
            </Row>
                </div>
            </Tabs>
        </div>
    )

}



export default Food
