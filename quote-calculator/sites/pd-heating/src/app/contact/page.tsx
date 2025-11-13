'use client'

export default function ContactPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact PD Heating & Plumbing - Get in Touch</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f8f9fa;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header/Navigation */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 20px 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .nav-links {
            display: flex;
            gap: 30px;
            list-style: none;
            align-items: center;
        }

        .nav-links a {
            color: #2d3748;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: #1E3A8A;
        }

        .nav-links a.active:after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #1E3A8A;
        }

        .nav-cta {
            background: #1E3A8A;
            color: white;
            padding: 10px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .nav-cta:hover {
            background: #1e40af;
            transform: translateY(-2px);
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: #1E3A8A;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .logo:hover {
            transform: scale(1.05);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
            color: white;
            padding-top: 7rem;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 100px;
            text-align: center;
            position: relative;
            margin-top: 0;
        }

        @media (min-width: 768px) {
            .hero {
                padding-top: 8rem;
            }
        }

        .hero h1 {
            font-size: 2.8rem;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .hero p {
            font-size: 1.2rem;
            opacity: 0.95;
            max-width: 700px;
            margin: 0 auto;
        }

        /* Main Content */
        .contact-wrapper {
            margin-top: -30px;
            padding: 0 20px 80px;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            max-width: 1100px;
            margin: 0 auto;
        }

        /* Contact Form Card */
        .form-card {
            background: white;
            border-radius: 16px;
            padding: 50px 40px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .form-card h2 {
            font-size: 1.8rem;
            color: #2d3748;
            margin-bottom: 10px;
            margin-top: 15px;
        }

        .form-card .subtitle {
            color: #6c757d;
            margin-bottom: 35px;
            font-size: 1rem;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #2d3748;
            font-weight: 600;
            font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 14px 16px;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            outline: none;
            border-color: #1E3A8A;
            box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .submit-btn {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(30, 58, 138, 0.3);
        }

        /* Contact Info Card */
        .info-card {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }

        .info-box {
            background: white;
            border-radius: 16px;
            padding: 35px 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
        }

        .info-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }

        .info-box-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }

        .info-icon {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }

        .info-box h3 {
            font-size: 1.3rem;
            color: #2d3748;
        }

        .info-box p {
            color: #6c757d;
            line-height: 1.7;
            margin-bottom: 15px;
        }

        .contact-detail {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            background: #f8f9fa;
            border-radius: 8px;
            margin-bottom: 10px;
        }

        .contact-detail:last-child {
            margin-bottom: 0;
        }

        .detail-icon {
            font-size: 1.2rem;
        }

        .contact-detail a {
            color: #1E3A8A;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .contact-detail a:hover {
            color: #3B82F6;
        }

        .contact-detail span {
            color: #495057;
            font-weight: 500;
        }

        /* Response Timeline */
        .timeline-box {
            background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
            color: white;
            border-radius: 16px;
            padding: 35px 30px;
            box-shadow: 0 4px 15px rgba(30, 58, 138, 0.3);
        }

        .timeline-box h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .timeline-steps {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .timeline-step {
            display: flex;
            gap: 15px;
            align-items: flex-start;
        }

        .step-number {
            width: 35px;
            height: 35px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
            backdrop-filter: blur(10px);
        }

        .step-content h4 {
            font-size: 1.1rem;
            margin-bottom: 5px;
        }

        .step-content p {
            opacity: 0.9;
            font-size: 0.95rem;
            line-height: 1.5;
        }

        /* Quick Actions */
        .quick-actions {
            background: white;
            border-radius: 16px;
            padding: 35px 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .quick-actions h3 {
            font-size: 1.3rem;
            color: #2d3748;
            margin-bottom: 20px;
        }

        .action-btn {
            display: block;
            width: 100%;
            padding: 16px 20px;
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            color: #2d3748;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            margin-bottom: 12px;
            text-align: center;
        }

        .action-btn:hover {
            background: #1E3A8A;
            color: white;
            border-color: #1E3A8A;
            transform: translateX(5px);
        }

        .action-btn:last-child {
            margin-bottom: 0;
        }

        /* Badge */
        .response-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #d4edda;
            color: #155724;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 20px;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }

            .contact-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }

            .form-card,
            .info-box,
            .timeline-box,
            .quick-actions {
                padding: 30px 25px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="header-content">
            <a href="/" class="logo">PD Heating & Plumbing</a>
            <nav>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/reviews">Reviews</a></li>
                    <li><a href="/contact" class="active">Contact</a></li>
                </ul>
            </nav>
            <a href="/get-quote" class="nav-cta">Get Quote</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Get in Touch with PD Heating & Plumbing</h1>
            <p>Need professional heating or plumbing services? Send us a message or request a call back — our team is here to help.</p>
        </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-wrapper">
        <div class="contact-grid">
            <!-- Left Column: Contact Form -->
            <div class="form-card">
                <div class="response-badge">
                    ⚡ Quick Response Times
                </div>
                <h2>Send Us a Message</h2>
                <p class="subtitle">Fill out the form below and we'll get back to you within 24 hours</p>

                <form action="/submit-contact" method="POST">
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" name="name" required placeholder="John Smith">
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required placeholder="john@example.com">
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="07123 456789">
                    </div>


                    <div class="form-group">
                        <label for="subject">What service do you need? *</label>
                        <select id="subject" name="subject" required>
                            <option value="">Choose a service...</option>
                            <option value="boiler-repair">Boiler Repair</option>
                            <option value="boiler-installation">Boiler Installation</option>
                            <option value="plumbing-repair">Plumbing Repairs</option>
                            <option value="heating-service">Heating Service</option>
                            <option value="emergency">Emergency Call Out</option>
                            <option value="quote">Get a Quote</option>
                            <option value="other">Other Service</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="message">Your Message *</label>
                        <textarea id="message" name="message" required placeholder="Tell us about your heating or plumbing issue and we'll get back to you as soon as possible..."></textarea>
                    </div>

                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>

            <!-- Right Column: Contact Info -->
            <div class="info-card">
                <!-- Contact Details Box -->
                <div class="info-box">
                    <div class="info-box-header">
                        <div class="info-icon">📞</div>
                        <h3>Get in Touch</h3>
                    </div>
                    <p>Prefer to reach out directly? Contact us by phone or email.</p>
                    
                    <div class="contact-detail">
                        <span class="detail-icon">📱</span>
                        <a href="tel:07739120349">07739 120349</a>
                    </div>
                    
                    <div class="contact-detail">
                        <span class="detail-icon">📧</span>
                        <a href="mailto:info@pdheating.co.uk">info@pdheating.co.uk</a>
                    </div>
                    
                    <div class="contact-detail">
                        <span class="detail-icon">⭐</span>
                        <a href="https://www.checkatrade.com/trades/pdheatingandplumbing" target="_blank" rel="noopener noreferrer">View our Reviews on Checkatrade</a>
                    </div>
                    
                    <p style="margin-top: 20px; margin-bottom: 0; padding-top: 15px; border-top: 1px solid #e9ecef; color: #6c757d; font-size: 0.9rem;">Prefer WhatsApp? You can <a href="https://wa.me/447739120349" target="_blank" rel="noopener noreferrer" style="color: #1E3A8A; text-decoration: underline;">message us here</a>.</p>
                </div>

                <!-- Response Timeline Box -->
                <div class="timeline-box">
                    <h3>⏱️ What Happens Next?</h3>
                    <div class="timeline-steps">
                        <div class="timeline-step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h4>We Review Your Inquiry</h4>
                                <p>Our team carefully reads your message and requirements</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h4>Personal Response</h4>
                                <p>You'll receive a detailed response within 24 hours, often sooner</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h4>We Arrange a Visit</h4>
                                <p>We schedule a convenient time to assess your needs and provide a professional quote</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions Box -->
                <div class="quick-actions">
                    <h3>Quick Actions</h3>
                    <a href="/get-quote" class="action-btn">🧮 Get an Instant Quote</a>
                    <a href="tel:07739120349" class="action-btn">📞 Call Us</a>
                    <a href="https://wa.me/447739120349" target="_blank" rel="noopener noreferrer" class="action-btn">💬 WhatsApp</a>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
        `
      }} />
    </>
  )
}