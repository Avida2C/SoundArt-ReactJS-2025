import { Container, Row, Col } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactUsDetails() {
    return (
        <Container>
                    <h1>Contact Us</h1>
                    <Row className="align-items-center my-4">
                        {/* Phone Icon */}
                        <Col xs="auto">
                            <MdEmail size={30} />
                        </Col>
        
                        {/* Contact Details */}
                        <Col>
                            <p className="mb-0">info@soundart.com</p>
                        </Col>
                    </Row>
                    <Row className="align-items-center mb-4">
                        {/* Phone Icon */}
                        <Col xs="auto">
                            <BsFillTelephoneFill size={30} />
                        </Col>
        
                        {/* Contact Details */}
                        <Col>
                            <p className="mb-0">Contact Us</p>
                            <p className="mb-0">(356) 1234 1234</p>
                        </Col>
                    </Row>
                    <Row className="align-items-start">
                        {/* Phone Icon */}
                        <Col xs="auto">
                            <FaLocationDot size={30} />
                        </Col>
        
                        {/* Contact Details */}
                        <Col>
                            <p className="mb-0">SoundArt Ltd.</p>
                            <p className="mb-0">112, Roy Buildings,</p>
                            <p className="mb-0">JC Roads,</p>
                            <p className="mb-0">RY</p>
                        </Col>
                    </Row>
                </Container>

    );
  }