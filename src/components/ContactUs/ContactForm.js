import React, { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import {
    formFields,
    formMessages,
    formTitle,
    validationRules,
    getConditionalFields
} from "../../data/contactFormData";

export default function ContactForm() {
    const [topic, setTopic] = useState("general");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [orderId, setOrderId] = useState("");
    const [artistName, setArtistName] = useState("");
    const [genre, setGenre] = useState("");
    const [links, setLinks] = useState("");
    const [consent, setConsent] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Field value getter
    const getFieldValue = (fieldName) => {
        const fieldMap = {
            fullName,
            email,
            subject,
            message,
            orderId,
            artistName,
            genre,
            links,
            consent
        };
        return fieldMap[fieldName] || "";
    };

    // Field setter
    const setFieldValue = (fieldName, value) => {
        const setters = {
            fullName: setFullName,
            email: setEmail,
            subject: setSubject,
            message: setMessage,
            orderId: setOrderId,
            artistName: setArtistName,
            genre: setGenre,
            links: setLinks,
            consent: setConsent
        };
        const setter = setters[fieldName];
        if (setter) {
            setter(value);
        }
    };

    // Validation
    const isFormValid = () => {
        // Required standard fields
        if (!fullName || !email || !message || !consent) return false;
        
        // Email validation
        if (!validationRules.email(email)) return false;
        
        // Conditional field validation
        if (topic === "support" && !orderId) return false;
        if (topic === "artist" && !artistName) return false;
        
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) return;
        
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        
        // Reset fields (keep topic selection)
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setOrderId("");
        setArtistName("");
        setGenre("");
        setLinks("");
        setConsent(false);
    };

    // Render form field
    const renderField = (fieldConfig) => {
        const { id, name, label, type, placeholder, required, colClass, rows, validation } = fieldConfig;
        const value = getFieldValue(name);
        const hasError = validation && value && !validationRules[validation.type](value);

        // Checkbox rendering (no colClass wrapper needed)
        if (type === "checkbox") {
            return (
                <div key={id} className={colClass || "col-12"}>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id={id}
                            name={name}
                            checked={value}
                            onChange={(e) => setFieldValue(name, e.target.checked)}
                            required={required}
                        />
                        <label className="form-check-label contact-checkbox-label" htmlFor={id}>
                            {label}
                        </label>
                    </div>
                </div>
            );
        }

        // Other field types
        return (
            <div key={id} className={colClass}>
                <label htmlFor={id} className="form-label">
                    {label}
                    {required && <span className="text-danger">*</span>}
                </label>
                {type === "textarea" ? (
                    <textarea
                        id={id}
                        name={name}
                        className={`form-control contact-textarea${hasError ? ' is-invalid' : ''}`}
                        rows={rows || 5}
                        value={value}
                        onChange={(e) => setFieldValue(name, e.target.value)}
                        placeholder={placeholder}
                        required={required}
                    />
                ) : (
                    <>
                        <input
                            id={id}
                            name={name}
                            type={type}
                            className={`form-control contact-input${hasError ? ' is-invalid' : ''}`}
                            value={value}
                            onChange={(e) => setFieldValue(name, e.target.value)}
                            placeholder={placeholder}
                            required={required}
                        />
                        {hasError && validation && (
                            <div className="invalid-feedback">{validation.message}</div>
                        )}
                    </>
                )}
            </div>
        );
    };

    // Get conditional fields based on topic
    const conditionalFields = getConditionalFields(topic);

    return (
        <div className="contact-form-card">
            <h2 className="contact-form-title mb-4">
                {formTitle.main} <span className="text-warning">{formTitle.highlight}</span>
            </h2>
            
            {submitted && (
                <div className="alert alert-success" role="alert">
                    <i className={`${formMessages.success.icon} me-2`}></i>
                    {formMessages.success.text}
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                    {/* Topic Selector */}
                    <div className="col-12">
                        <label htmlFor={formFields.topic.id} className="form-label fw-semibold">
                            {formFields.topic.label}
                        </label>
                        <div className="contact-select-wrapper">
                            <select
                                id={formFields.topic.id}
                                className="form-select contact-select"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            >
                                {formFields.topic.options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Conditional Fields */}
                    {conditionalFields && Object.values(conditionalFields).map((field) => renderField(field))}

                    {/* Standard Fields */}
                    {renderField(formFields.standard.fullName)}
                    {renderField(formFields.standard.email)}
                    {renderField(formFields.standard.subject)}
                    {renderField(formFields.standard.message)}
                    {renderField({ ...formFields.standard.consent, colClass: "col-12 form-check ps-2 pt-2 p-0 m-0" })}

                    {/* Submit Button */}
                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-warning btn-lg w-100"
                            disabled={!isFormValid()}
                        >
                            {formMessages.submit.text}
                            <LuSendHorizontal className="ms-2 mb-1" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
