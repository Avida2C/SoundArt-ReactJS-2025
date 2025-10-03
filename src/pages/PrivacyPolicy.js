import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
      }}>
        <div className="container text-white">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-4">
                Privacy <span className="text-warning">Policy</span>
              </h1>
              <p className="lead mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-muted">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  
                  {/* Introduction */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">1. Introduction</h2>
                    <p className="text-muted">
                      SoundArt ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                    </p>
                    <p className="text-muted">
                      Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>
                  </div>

                  {/* Information We Collect */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">2. Information We Collect</h2>
                    
                    <h4 className="h5 fw-semibold mb-3">2.1 Personal Information</h4>
                    <p className="text-muted mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="text-muted mb-4">
                      <li>Register for an account</li>
                      <li>Subscribe to our newsletter or concert alerts</li>
                      <li>Purchase tickets or merchandise</li>
                      <li>Contact us for support</li>
                      <li>Participate in surveys or promotions</li>
                    </ul>
                    <p className="text-muted mb-3">This information may include:</p>
                    <ul className="text-muted mb-4">
                      <li>Name and contact information (email, phone number)</li>
                      <li>Billing and shipping addresses</li>
                      <li>Payment information (processed securely by third-party providers)</li>
                      <li>Preferences and interests</li>
                    </ul>

                    <h4 className="h5 fw-semibold mb-3">2.2 Automatically Collected Information</h4>
                    <p className="text-muted mb-3">We automatically collect certain information when you visit our website:</p>
                    <ul className="text-muted mb-4">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Device information</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referring website</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>

                  {/* How We Use Information */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">3. How We Use Your Information</h2>
                    <p className="text-muted mb-3">We use the information we collect to:</p>
                    <ul className="text-muted mb-4">
                      <li>Provide and maintain our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send you concert alerts and promotional materials</li>
                      <li>Respond to your comments and questions</li>
                      <li>Improve our website and services</li>
                      <li>Analyze usage patterns and trends</li>
                      <li>Prevent fraud and enhance security</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>

                  {/* Information Sharing */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">4. Information Sharing and Disclosure</h2>
                    <p className="text-muted mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                    <ul className="text-muted mb-4">
                      <li><strong>Service Providers:</strong> With trusted third parties who assist us in operating our website and conducting our business</li>
                      <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                      <li><strong>Consent:</strong> When you have given us explicit consent to share your information</li>
                    </ul>
                  </div>

                  {/* Data Security */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">5. Data Security</h2>
                    <p className="text-muted mb-3">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                    </p>
                    <p className="text-muted">
                      We use industry-standard encryption for sensitive data and regularly review our security practices to ensure your information is protected.
                    </p>
                  </div>

                  {/* Cookies */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">6. Cookies and Tracking Technologies</h2>
                    <p className="text-muted mb-3">
                      We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
                    </p>
                    <ul className="text-muted mb-4">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Provide personalized content and advertisements</li>
                      <li>Improve website functionality</li>
                    </ul>
                    <p className="text-muted">
                      You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                    </p>
                  </div>

                  {/* Your Rights */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">7. Your Rights and Choices</h2>
                    <p className="text-muted mb-3">Depending on your location, you may have the following rights regarding your personal information:</p>
                    <ul className="text-muted mb-4">
                      <li><strong>Access:</strong> Request access to your personal information</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                      <li><strong>Restriction:</strong> Request restriction of processing</li>
                    </ul>
                    <p className="text-muted">
                      To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                    </p>
                  </div>

                  {/* Data Retention */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">8. Data Retention</h2>
                    <p className="text-muted">
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                    </p>
                  </div>

                  {/* Third-Party Links */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">9. Third-Party Links</h2>
                    <p className="text-muted">
                      Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                  </div>

                  {/* Children's Privacy */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">10. Children's Privacy</h2>
                    <p className="text-muted">
                      Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                    </p>
                  </div>

                  {/* International Transfers */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">11. International Data Transfers</h2>
                    <p className="text-muted">
                      Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                    </p>
                  </div>

                  {/* Changes to Policy */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">12. Changes to This Privacy Policy</h2>
                    <p className="text-muted">
                      We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. We encourage you to review this privacy policy periodically for any changes.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-4">
                    <h2 className="h3 fw-bold mb-3">13. Contact Us</h2>
                    <p className="text-muted mb-3">
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="bg-light p-4 rounded">
                      <p className="mb-2"><strong>Email:</strong> privacy@soundart.com</p>
                      <p className="mb-2"><strong>Phone:</strong> (356) 1234 1234</p>
                      <p className="mb-0"><strong>Address:</strong> 112, Roy Buildings, JC Roads, RY</p>
                    </div>
                  </div>

                  {/* Back to Home */}
                  <div className="text-center mt-5">
                    <Link to="/" className="btn btn-warning btn-lg">
                      <i className="bi bi-house me-2"></i>Back to Home
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
