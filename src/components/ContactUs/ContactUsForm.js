import { useState } from "react";
import { Row, Form, Container, Col, Button } from "react-bootstrap";
import "./contactUs.css";

export default function ContactUsForm() {
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        setMessageSent(true); // Show success message
        setTimeout(() => setMessageSent(false), 3000); // Hide message after 3s
    };

    return (
        <Container className="contact-us-form px-5">
            <Row>
                <Col>
                    <h1>Contact Us</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Message" required />
                        </Form.Group>
                        <Button variant="warning" type="submit" className="w-100 fw-semibold">
                            Submit
                        </Button>
                        {/* Success Message */}
                        {messageSent && <p className="text-danger mt-2 text-center">Your message has been sent! We will contact you shortly.</p>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
