/**
 * Contact Form Data Configuration
 * Contains form fields, validation rules, and options
 */

// Topic options for the contact form dropdown
export const topicOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "artist", label: "Artist Application" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "support", label: "Technical Support" }
];

// Form field configurations
export const formFields = {
    // Topic selector
    topic: {
        id: "topic",
        name: "topic",
        label: "I'm contacting you about",
        type: "select",
        required: true,
        options: topicOptions
    },
    
    // Conditional fields for artist topic
    artist: {
        artistName: {
            id: "artistName",
            name: "artistName",
            label: "Artist/Band Name",
            type: "text",
            placeholder: "Your artist or band name",
            required: true,
            colClass: "col-12"
        },
        genre: {
            id: "genre",
            name: "genre",
            label: "Genre",
            type: "text",
            placeholder: "e.g., Rock, Pop, Electronic",
            required: false,
            colClass: "col-md-6"
        },
        links: {
            id: "links",
            name: "links",
            label: "Links",
            type: "text",
            placeholder: "Spotify, YouTube, Instagram",
            required: false,
            colClass: "col-md-6"
        }
    },
    
    // Conditional fields for support topic
    support: {
        orderId: {
            id: "orderId",
            name: "orderId",
            label: "Order ID",
            type: "text",
            placeholder: "#123456",
            required: true,
            colClass: "col-12"
        }
    },
    
    // Standard form fields
    standard: {
        fullName: {
            id: "fullName",
            name: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "Your Name",
            required: true,
            colClass: "col-md-6"
        },
        email: {
            id: "email",
            name: "email",
            label: "Email Address",
            type: "email",
            placeholder: "you@example.com",
            required: true,
            colClass: "col-md-6",
            validation: {
                type: "email",
                message: "Please enter a valid email address."
            }
        },
        subject: {
            id: "subject",
            name: "subject",
            label: "Subject",
            type: "text",
            placeholder: "How can we help?",
            required: false,
            colClass: "col-12"
        },
        message: {
            id: "message",
            name: "message",
            label: "Message",
            type: "textarea",
            placeholder: "Share details so we can help faster",
            required: true,
            colClass: "col-12",
            rows: 5
        },
        consent: {
            id: "consent",
            name: "consent",
            label: "I agree to the processing of my information as described in the Privacy Policy.",
            type: "checkbox",
            required: true,
            colClass: "col-12"
        }
    }
};

// Validation functions
export const validators = {
    email: (value) => {
        const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
        return emailRegex.test(value);
    }
};

// Form validation rules
export const validationRules = {
    required: (value) => value && value.trim() !== "",
    email: (value) => validators.email(value)
};

// Get conditional fields based on topic
export const getConditionalFields = (topic) => {
    if (topic === "artist") {
        return formFields.artist;
    }
    if (topic === "support") {
        return formFields.support;
    }
    return null;
};

// Form messages
export const formMessages = {
    success: {
        text: "Thanks! Your message has been sent.",
        icon: "bi bi-check-circle"
    },
    submit: {
        text: "SEND MESSAGE",
        icon: "bi bi-arrow-right"
    }
};

// Form title
export const formTitle = {
    main: "Send us a",
    highlight: "message"
};

