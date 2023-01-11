import React from "react";
import about from '../../assest/about.jpg'
import about1 from '../../assest/about1.jpg'

import 'react-awesome-slider/dist/styles.css';
import { Col, Row, Container } from "react-bootstrap";
import './aboutUs.css'
import slider from '../../assest/slider.jpg'

const AboutUs = () => {
  return (
    <>
      {/* <div>
        <img src={about} style={{ objectFit: "cover", width: '100%' }} />
      </div> */}
      <div className="aboutUs_details">
        <div className="aboutUs_header">
          <p> A Few Words About Us</p>
        </div>
        <div className="aboutUs_body">
          <Container fluid>
            <Row>
              <div className="aboutUs_body_part">
                <Col md={6}>
                  <p>
                    Swastik Resort is located in Digha which is famous for its mango orchards. Guests can choose their accommodation
                    in the hotels of Digha as per their needs and budget. The Coral is an economic property which delivers refreshingly
                    uncomplicated quality stay with a sparkle of simplicity. The nearest airport and railway station to the city is KolkataAirport and DighaRailway Station.              </p>
                </Col>
                <Col md={6}>
                  <img src={slider} style={{ objectFit: "cover", width: '100%', }} />
                </Col>
              </div>

            </Row>

            <Row>
              <div className="aboutUs_body_part">
                <Col md={6}>
                  <img src={slider} style={{ objectFit: "cover", width: '100%', }} />
                </Col>
                <Col md={6}>
                  <p>
                    The property features quite capacious accommodation and offers
                    all necessary facilities like front desk and many more making the stay a memorable one for guests.
                    The rooms of the hotel are a blend of beauty and comfort with exquisite interiors and spacious to move around freely.
                    The cosy ambience and soothing decor of the rooms in the hotel makes it the ideal destination to relax and unwind. Attached bathrooms here
                    are fitted with essential bathroom amenities and toiletries. Shopaholics can also indulge in shopping spree at nearby shopping places.
                    Guests can also visit eating joints to try out local delights.
                  </p>
                </Col>
              </div>
            </Row>
          </Container>

        </div>
      </div>






      <div className="rules">

        <div className="rules_head">
          <h1>-: Rules and Policies :-</h1>
          <p>Get away for a little while at our  resort and receive up to 15% off our best available rates
            when you stay two or more nights.</p>
        </div>

        <div className="rules_body">


          <Row>
            <Col md={6}>
              <div className="rules-list">
                <div className="rules-part">
                  <div className="rules-header">
                    <p>Child & Extra Bed Policy</p>
                  </div>
                  <div className="rules-body">
                    <ul>
                      <li>NO EXTRA BED WILL BE PROVIDED TO ACCOMMODATE ANY CHILD INCLUDED IN THE BOOKING.</li>
                      <li>jgh</li>
                      <li>NO EXTRA BED WILL BE PROVIDED TO ACCOMMODATE ANY ADDITIONAL GUEST INCLUDED IN THE BOOKING.
                      </li>
                    </ul>
                  </div>
                </div>



                <div className="rules-part">
                  <div className="rules-header">
                    <p>SAFETY AND HYGIENE</p>
                  </div>
                  <div className="rules-body">
                    <ul>
                      <li>QUARANTINE PROTOCOLS ARE BEING FOLLOWED AS PER LOCAL GOVERNMENT AUTHORITIES
                      </li>
                      <li>GUESTS FROM CONTAINMENT ZONES ARE NOT ALLOWED
                      </li>
                      <li>SHARED RESOURCES IN COMMON AREAS ARE PROPERLY SANITIZED
                      </li>
                      <li>PROPERTY STAFF IS TRAINED ON HYGIENE GUIDELINES
                      </li>
                      <li>GUESTS WITH FEVER ARE NOT ALLOWED
                      </li>
                      <li>HAND SANITIZER IS PROVIDED IN GUEST ACCOMMODATION AND COMMON AREAS
                      </li>
                      <li>THERMAL SCREENING IS DONE AT ENTRY AND EXIT POINTS
                      </li>

                    </ul>
                  </div>
                </div>



                <div className="rules-part">
                  <div className="rules-header">
                    <p>GUEST PROFILE</p>
                  </div>
                  <div className="rules-body">
                    <ul>
                      <li>UNMARRIED COUPLES ALLOWED
                      </li>
                      <li>BACHELORS ALLOWED
                      </li>
                      <li>GUESTS BELOW 18 YEARS OF AGE ARE NOT ALLOWED AT THE PROPERTY.
                      </li>
                      <li>SUITABLE FOR CHILDREN
                      </li>
                      <li>STAG ENTRY IS NOT ALLOWED
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </Col>


            <Col md={6}>
              <div className="rules-list">
                <div className="rules-part">
                  <div className="rules-header">
                    <p>PAYMENT RELATED</p>
                  </div>
                  <div className="rules-body">
                    <ul>
                      <li>CREDIT/DEBIT CARDS NOT ACCEPTED AT THE PROPERTY
                      </li>

                    </ul>
                  </div>
                </div>




                <div className="rules-part">
                  <div className="rules-header">
                    <p>FOOD ARRANGEMENT

                    </p>
                  </div>
                  <div className="rules-body">
                    <ul>
                      <li>NON VEG FOOD IS ALLOWED
                      </li>
                      <li>OUTSIDE FOOD IS NOT ALLOWED
                      </li>

                    </ul>
                  </div>
                </div>




                <div className="rules-part">
                  <div className="rules-header">
                    <p>FOOD AND DRINKS HYGIENE

                    </p>
                  </div>
                  <div className="rules-body">
                    <ul>
                      <li>COVID-19 GUIDELINES FOR FOOD HYGIENE IS FOLLOWED AS PER GOVERNMENT GUIDELINES
                      </li>
                      <li>SOCIAL DISTANCING IS FOLLOWED IN RESTAURANTS
                      </li>
                      <li>SERVEWARE AND SUPPLIES ARE SANITIZED BEFORE THEY ARE BROUGHT TO THE KITCHEN
                      </li>
                      <li>MASKS AND HAIRNETS ARE MANDATORY FOR STAFF IN RESTAURANTS
                      </li>

                    </ul>
                  </div>
                </div>




                <div className="rules-part">
                  <div className="rules-header">
                    <p>SMOKING/ALCOHOL CONSUMPTION RULES

                    </p>
                  </div>
                  <div className="rules-body">
                    <ul>
                      <li>SMOKING WITHIN THE PREMISES IS NOT ALLOWED
                      </li>
                      <li>ALCOHOL CONSUMPTION IS NOT ALLOWED WITHIN THE PROPERTY PREMISES.
                      </li>

                    </ul>
                  </div>
                </div>





                <div className="rules-part">
                  <div className="rules-header">
                    <p>PROPERTY ACCESSIBILITY </p>
                  </div>
                  <div className="rules-body">
                    <ul>
                      <li>THE PROPERTY IS ELDERLY-FRIENDLY/DISABLED-FRIENDLY
                      </li>
                      <li>BED HEIGHT IS ACCESSIBLE
                      </li>
                      <li>THE ENTIRE UNIT IS WHEELCHAIR ACCESSIBLE
                      </li>
                      <li>THE PROPERTY HAS A WIDE ENTRYWAY
                      </li>

                    </ul>
                  </div>
                </div>


              </div>



            </Col>
          </Row>












        </div>
      </div>
    </>
  );
}

export default AboutUs;
