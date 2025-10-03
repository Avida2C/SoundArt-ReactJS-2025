import React from "react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
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
                Terms of <span className="text-warning">Service</span>
              </h1>
              <p className="lead mb-4">
                Please read these terms carefully before using our services. By using SoundArt, you agree to be bound by these terms.
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
                    <h2 className="h3 fw-bold mb-3">1. Acceptance of Terms</h2>
                    <p className="text-muted">
                      These Terms of Service ("Terms") govern your use of the SoundArt website and services (collectively, the "Service") operated by SoundArt ("we," "our," or "us"). By accessing or using our Service, you agree to be bound by these Terms.
                    </p>
                    <p className="text-muted">
                      If you disagree with any part of these terms, then you may not access the Service.
                    </p>
                  </div>

                  {/* Description of Service */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">2. Description of Service</h2>
                    <p className="text-muted mb-3">
                      SoundArt is a music discovery platform that provides:
                    </p>
                    <ul className="text-muted mb-4">
                      <li>Artist profiles and biographies</li>
                      <li>Music news and articles</li>
                      <li>Concert information and ticket sales</li>
                      <li>Music-related content and media</li>
                      <li>Community features and user-generated content</li>
                    </ul>
                  </div>

                  {/* User Accounts */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">3. User Accounts</h2>
                    <h4 className="h5 fw-semibold mb-3">3.1 Account Creation</h4>
                    <p className="text-muted mb-3">
                      To access certain features of our Service, you may need to create an account. You agree to:
                    </p>
                    <ul className="text-muted mb-4">
                      <li>Provide accurate, current, and complete information</li>
                      <li>Maintain and update your account information</li>
                      <li>Keep your password secure and confidential</li>
                      <li>Accept responsibility for all activities under your account</li>
                    </ul>

                    <h4 className="h5 fw-semibold mb-3">3.2 Account Termination</h4>
                    <p className="text-muted">
                      We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion.
                    </p>
                  </div>

                  {/* Acceptable Use */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">4. Acceptable Use Policy</h2>
                    <p className="text-muted mb-3">You agree not to use the Service to:</p>
                    <ul className="text-muted mb-4">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Transmit harmful or malicious code</li>
                      <li>Harass, abuse, or harm other users</li>
                      <li>Spam or send unsolicited communications</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Interfere with the proper functioning of the Service</li>
                      <li>Upload content that is illegal, offensive, or inappropriate</li>
                    </ul>
                  </div>

                  {/* Intellectual Property */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">5. Intellectual Property Rights</h2>
                    <h4 className="h5 fw-semibold mb-3">5.1 Our Content</h4>
                    <p className="text-muted mb-3">
                      The Service and its original content, features, and functionality are owned by SoundArt and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>

                    <h4 className="h5 fw-semibold mb-3">5.2 User Content</h4>
                    <p className="text-muted mb-3">
                      You retain ownership of content you submit to the Service. By submitting content, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and display your content in connection with the Service.
                    </p>

                    <h4 className="h5 fw-semibold mb-3">5.3 Third-Party Content</h4>
                    <p className="text-muted">
                      Our Service may contain content from third parties. We respect intellectual property rights and expect our users to do the same. If you believe your rights have been violated, please contact us.
                    </p>
                  </div>

                  {/* Ticket Sales and Payments */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">6. Ticket Sales and Payments</h2>
                    <h4 className="h5 fw-semibold mb-3">6.1 Ticket Purchases</h4>
                    <p className="text-muted mb-3">
                      When purchasing tickets through our Service:
                    </p>
                    <ul className="text-muted mb-4">
                      <li>All sales are final unless otherwise stated</li>
                      <li>Prices are subject to change without notice</li>
                      <li>You are responsible for any applicable taxes and fees</li>
                      <li>We may cancel events due to circumstances beyond our control</li>
                    </ul>

                    <h4 className="h5 fw-semibold mb-3">6.2 Payment Processing</h4>
                    <p className="text-muted">
                      Payments are processed by third-party payment providers. We do not store your payment information. By making a purchase, you agree to the terms of our payment processors.
                    </p>
                  </div>

                  {/* Privacy */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">7. Privacy</h2>
                    <p className="text-muted">
                      Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                    </p>
                  </div>

                  {/* Disclaimers */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">8. Disclaimers</h2>
                    <p className="text-muted mb-3">
                      The Service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, including but not limited to:
                    </p>
                    <ul className="text-muted mb-4">
                      <li>Warranties of merchantability or fitness for a particular purpose</li>
                      <li>Warranties regarding the accuracy or reliability of content</li>
                      <li>Warranties that the Service will be uninterrupted or error-free</li>
                      <li>Warranties regarding third-party content or services</li>
                    </ul>
                  </div>

                  {/* Limitation of Liability */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">9. Limitation of Liability</h2>
                    <p className="text-muted mb-3">
                      To the maximum extent permitted by law, SoundArt shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                    </p>
                    <ul className="text-muted mb-4">
                      <li>Loss of profits, data, or use</li>
                      <li>Business interruption</li>
                      <li>Personal injury or property damage</li>
                      <li>Damages resulting from unauthorized access to your account</li>
                    </ul>
                    <p className="text-muted">
                      Our total liability to you for any claims arising from these Terms or the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
                    </p>
                  </div>

                  {/* Indemnification */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">10. Indemnification</h2>
                    <p className="text-muted">
                      You agree to defend, indemnify, and hold harmless SoundArt and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the Service or violation of these Terms.
                    </p>
                  </div>

                  {/* Termination */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">11. Termination</h2>
                    <p className="text-muted mb-3">
                      We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    <p className="text-muted">
                      Upon termination, your right to use the Service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination.
                    </p>
                  </div>

                  {/* Governing Law */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">12. Governing Law</h2>
                    <p className="text-muted">
                      These Terms shall be interpreted and governed by the laws of the jurisdiction in which SoundArt operates, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
                    </p>
                  </div>

                  {/* Changes to Terms */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">13. Changes to Terms</h2>
                    <p className="text-muted">
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                    </p>
                    <p className="text-muted">
                      Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                    </p>
                  </div>

                  {/* Severability */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">14. Severability</h2>
                    <p className="text-muted">
                      If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                    </p>
                  </div>

                  {/* Entire Agreement */}
                  <div className="mb-5">
                    <h2 className="h3 fw-bold mb-3">15. Entire Agreement</h2>
                    <p className="text-muted">
                      These Terms constitute the sole and entire agreement between you and SoundArt regarding the Service and supersede all prior and contemporaneous understandings, agreements, representations, and warranties.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-4">
                    <h2 className="h3 fw-bold mb-3">16. Contact Information</h2>
                    <p className="text-muted mb-3">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-light p-4 rounded">
                      <p className="mb-2"><strong>Email:</strong> legal@soundart.com</p>
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
