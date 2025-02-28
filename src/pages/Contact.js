import React from "react";
import ContactUsDetails from "../components/ContactUs/ContactUsDetails";
import { Container} from "react-bootstrap";
import ContactUsForm from "../components/ContactUs/ContactUsForm";


export default function Contact() {
    return (
        <Container className="mt-4">
            <ContactUsDetails />
            <ContactUsForm />
        </Container>
        
    );
}
