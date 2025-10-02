import React from "react";
import ContactUsDetails from "../components/ContactUs/ContactUsDetails";
import ContactUsForm from "../components/ContactUs/ContactUsForm";
import "../style/contact.css";


export default function Contact() {
    return (
        <div className="container mt-4">
        <ContactUsDetails />
        <ContactUsForm />
      </div>
      
    );
}
