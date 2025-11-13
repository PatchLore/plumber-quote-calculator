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
    <title>Contact FixBlox - Get in Touch</title>
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

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(135deg, #0066FF 0%, #00D9FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .logo:hover {
            transform: scale(1.05);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #0066FF 0%, #00D9FF 100%);
            color: white;
            padding: 120px 20px 100px;
            text-align: center;
            position: relative;
            margin-top: 80px;
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
            border-color: #0066FF;
            box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .submit-btn {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #0066FF 0%, #00D9FF 100%);
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
            box-shadow: 0 10px 25px rgba(0, 102, 255, 0.3);
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
            background: linear-gradient(135deg, #0066FF 0%, #00D9FF 100%);
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
            color: #0066FF;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .contact-detail a:hover {
            color: #0052CC;
        }

        .contact-detail span {
            color: #495057;
            font-weight: 500;
        }

        /* Response Timeline */
        .timeline-box {
            background: linear-gradient(135deg, #0066FF 0%, #00D9FF 100%);
            color: white;
            border-radius: 16px;
            padding: 35px 30px;
            box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
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
            background: #0066FF;
            color: white;
            border-color: #0066FF;
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
            <a href="/" class="logo">FixBlox</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Let's Build Something Amazing Together</h1>
            <p>Whether you're ready to set up QuoteFlow, need a custom solution, or just want to chat about your business — we're here to help.</p>
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
                        <label for="trade">Your Trade</label>
                        <select id="trade" name="trade">
                            <option value="">Select your trade...</option>
                            <option value="plumber">Plumber</option>
                            <option value="electrician">Electrician</option>
                            <option value="builder">Builder</option>
                            <option value="contractor">General Contractor</option>
                            <option value="hvac">HVAC</option>
                            <option value="carpenter">Carpenter</option>
                            <option value="decorator">Decorator</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="subject">What can we help with? *</label>
                        <select id="subject" name="subject" required>
                            <option value="">Choose a topic...</option>
                            <option value="quoteflow">QuoteFlow Setup</option>
                            <option value="ai-assistant">AI Assistant Add-on</option>
                            <option value="whatsapp">WhatsApp Integration</option>
                            <option value="custom">Custom Solution</option>
                            <option value="support">Technical Support</option>
                            <option value="pricing">Pricing Inquiry</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="message">Your Message *</label>
                        <textarea id="message" name="message" required placeholder="Tell us about your business and how we can help..."></textarea>
                    </div>

                    <button type="submit" class="submit-btn">Send Message</button>
                    <div style="margin-top:16px; text-align:center;">
                      <a
                        href="https://wa.me/447925990923"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-all shadow-md"
                        style="text-decoration:none;"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                          <path d="M12.04 2c-5.51 0-9.98 4.47-9.98 9.98 0 1.76.46 3.47 1.33 4.99L2 22l5.18-1.35a9.94 9.94 0 004.86 1.24h.01c5.5 0 9.97-4.47 9.97-9.98S17.54 2 12.04 2zm0 18.17h-.01c-1.57 0-3.11-.42-4.46-1.22l-.32-.19-3.07.8.82-2.99-.21-.31a8.26 8.26 0 01-1.28-4.41c0-4.56 3.71-8.27 8.28-8.27a8.24 8.24 0 018.27 8.27c0 4.56-3.71 8.27-8.27 8.27zm4.57-6.2c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.65.8-.8.97-.15.17-.3.18-.55.06-.25-.12-1.05-.39-2.01-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.31.37-.46.12-.15.15-.25.23-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.43-.15 0-.32-.02-.49-.02s-.45.06-.68.32c-.23.25-.89.87-.89 2.12 0 1.25.91 2.45 1.04 2.62.12.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/>
                        </svg>
                        <span>Message us on WhatsApp</span>
                      </a>
                    </div>
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
                    <p>Prefer to reach out directly? We're available through multiple channels.</p>
                    
                    <div class="contact-detail">
                        <span class="detail-icon">📧</span>
                        <a href="mailto:info@fixblox.com">info@fixblox.com</a>
                    </div>
                    
                    <div class="contact-detail">
                        <span class="detail-icon">📱</span>
                        <a href="tel:07925990923">07925 990923</a>
                    </div>
                    
                    
                </div>

                <!-- Response Timeline Box -->
                <div class="timeline-box">
                    <h3>⏱️ What Happens Next?</h3>
                    <div class="timeline-steps">
                        <div class="timeline-step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <h4>We Review Your Message</h4>
                                <p>Our team reads your inquiry within a few hours</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <h4>Personal Response</h4>
                                <p>Get a detailed reply within 24 hours (often faster)</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <h4>Schedule Setup Call</h4>
                                <p>Book a time to discuss your needs and get started</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions Box -->
                <div class="quick-actions">
                    <h3>Or Explore on Your Own</h3>
                    <a href="/quoteflow/calculator" class="action-btn">🧮 Try the Calculator</a>
                    <a href="/#apps" class="action-btn">📱 View All Apps</a>
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