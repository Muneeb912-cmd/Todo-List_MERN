import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,    
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactUs = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth < 576 ? 'sm' : 'lg');

  useEffect(() => {
    const handleResize = () => {
      const newScreenSize = window.innerWidth < 576 ? 'sm' : 'lg';
      setScreenSize(newScreenSize);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const colSize = screenSize === 'sm' ? '0' : '6';
    return (
        <section className="mb-4">
            <Container>
                <MDBContainer >

                    <h1 style={{textAlign:'center'}}>Contact us</h1>
                    <hr className="hr" />
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>

                    <MDBRow className='g-2'>
                        <MDBCol size={colSize}>
                            <div style={{padding:'10px'}}>
                                <MDBCard alignment='center' className='shadow-none border border-all'>
                                    <MDBCardHeader>Information</MDBCardHeader>
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Our Contact Information</strong></MDBCardTitle>
                                        <MDBCardText>
                                            <strong>Email : <br></br></strong>dukocommunity@gmail.com<br></br>
                                            <strong>Address : <br></br></strong>University of Engineering and Technology, Lahore
                                        </MDBCardText>
                                                                             
                                       
                                    </MDBCardBody>
                                    <MDBCardFooter className='text-muted'>Follow us  : DukoDevs</MDBCardFooter>
                                </MDBCard>
                            </div>
                        </MDBCol>
                        <MDBCol size={colSize}>
                            <Row>
                                <Col md={0} className="mb-md-0 mb-5">
                                    <Form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group controlId="name">
                                                    <Form.Label>Your name</Form.Label>
                                                    <Form.Control type="text" name="name" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="email">
                                                    <Form.Label>Your email</Form.Label>
                                                    <Form.Control type="email" name="email" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={12}>
                                                <Form.Group controlId="subject">
                                                    <Form.Label>Subject</Form.Label>
                                                    <Form.Control type="text" name="subject" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={12}>
                                                <Form.Group controlId="message">
                                                    <Form.Label>Your message</Form.Label>
                                                    <Form.Control as="textarea" rows={2} name="message" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <div className=" text-md-left my-4 ">
                                            <Button className='btn btn-primary btn-sm px-4' onClick={() => document.getElementById('contact-form').submit()}>Send</Button>
                                        </div>
                                        <div className="status"></div>
                                    </Form>
                                </Col>
                            </Row>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Container>
        </section>
    );
};

export default ContactUs;
