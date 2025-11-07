'use client'

export default function ServicesPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services | PD Heating & Plumbing</title>
    <meta name="description" content="Professional heating and plumbing services including boiler installation, plumbing repairs, and heating services. Get instant quotes from PD Heating & Plumbing.">
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
            color: #1E3A8A;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .logo:hover {
            transform: scale(1.05);
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

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
            color: white;
            padding: 140px 20px 80px;
            text-align: center;
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
            max-width: 800px;
            margin: 0 auto;
        }

        /* Services Section */
        .services-section {
            padding: 80px 20px;
            background: white;
        }

        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-header h1 {
            font-size: 2.2rem;
            color: #2d3748;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .section-header p {
            font-size: 1.1rem;
            color: #6c757d;
            max-width: 700px;
            margin: 0 auto;
        }

        /* Services Grid */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 35px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .service-card {
            background: white;
            border-radius: 16px;
            padding: 40px 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.07);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            display: block;
            line-height: 1;
            height: 3rem;
        }

        .service-card h3 {
            font-size: 1.6rem;
            color: #2d3748;
            margin-bottom: 15px;
            font-weight: 700;
            line-height: 1.3;
        }

        .service-card p {
            color: #6c757d;
            margin-bottom: 25px;
            line-height: 1.7;
            flex-grow: 1;
        }

        .service-price {
            display: flex;
            align-items: baseline;
            gap: 10px;
            margin-bottom: 25px;
        }

        .price-current {
            font-size: 2rem;
            font-weight: 700;
            color: #1E3A8A;
            line-height: 1;
        }

        .service-cta {
            padding: 12px 24px;
            background: #1E3A8A;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: all 0.3s ease;
            text-align: center;
            display: block;
            margin-top: auto;
        }

        .service-cta:hover {
            background: #1e40af;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(30, 58, 138, 0.3);
        }

        /* Footer */
        .footer {
            background: #2d3748;
            color: white;
            padding: 40px 20px;
            text-align: center;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer p {
            margin-bottom: 10px;
            opacity: 0.8;
        }

        .footer a {
            color: #3B82F6;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        .social-icons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
            flex-wrap: wrap;
        }

        .social-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            color: white;
            opacity: 0.8;
        }

        .social-icon:hover {
            background: #3B82F6;
            opacity: 1;
            transform: translateY(-2px);
        }

        .social-icon svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .services-section {
                padding: 60px 20px;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }

            .section-header {
                margin-bottom: 40px;
            }

            .section-header h1 {
                font-size: 1.8rem;
            }

            .service-card {
                padding: 30px 25px;
            }

            .service-icon {
                font-size: 2.5rem;
                height: 2.5rem;
                margin-bottom: 15px;
            }

            .service-card h3 {
                font-size: 1.4rem;
                margin-bottom: 12px;
            }

            .service-card p {
                margin-bottom: 20px;
                font-size: 0.95rem;
            }

            .price-current {
                font-size: 1.75rem;
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
                    <li><a href="/services" class="active">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <a href="/quoteflow/calculator" class="nav-cta">Get Quote</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Our Services</h1>
            <p>We offer most plumbing and heating services, from boiler fitting and maintenance to bathroom design and installation.</p>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
        <div class="container">
            <div class="section-header">
                <h1>Professional Heating & Plumbing Services</h1>
                <p>Comprehensive solutions for all your heating and plumbing needs</p>
            </div>

            <div class="services-grid">
                <!-- Service 1 -->
                <div class="service-card">
                    <span class="service-icon">🔥</span>
                    <h3>Gas Boiler Installation and Servicing</h3>
                    <p>Professional gas boiler installation, servicing, and repairs. Expert engineers ensure your heating system runs safely and efficiently.</p>
                    <div class="service-price">
                        <span class="price-current">£0.00</span>
                    </div>
                    <a href="/quoteflow/calculator" class="service-cta">Get a Quote</a>
                </div>

                <!-- Service 2 -->
                <div class="service-card">
                    <span class="service-icon">🔧</span>
                    <h3>Plumbing Services</h3>
                    <p>Complete plumbing solutions including repairs, installations, and maintenance. From leak fixes to full bathroom installations.</p>
                    <div class="service-price">
                        <span class="price-current">£0.00</span>
                    </div>
                    <a href="/quoteflow/calculator" class="service-cta">Get a Quote</a>
                </div>

                <!-- Service 3 -->
                <div class="service-card">
                    <span class="service-icon">❄️</span>
                    <h3>Heating Installation</h3>
                    <p>Full heating system installation and upgrades. Radiators, underfloor heating, and complete heating solutions for your home.</p>
                    <div class="service-price">
                        <span class="price-current">£0.00</span>
                    </div>
                    <a href="/quoteflow/calculator" class="service-cta">Get a Quote</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="social-icons">
                <a href="https://www.facebook.com/pdheating" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/pdheating" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
                <a href="https://twitter.com/pdheating" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/company/pdheating" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
            </div>
            <p>&copy; 2025 PD Heating & Plumbing. All rights reserved.</p>
            <p>Powered by <a href="https://www.fixblox.com" target="_blank" rel="noopener noreferrer">FixBlox</a></p>
            <p style="margin-top: 15px;">
                <a href="https://wa.me/447739120349" target="_blank" rel="noopener noreferrer" style="color: #25D366; font-weight: 600;">📱 WhatsApp: 07739 120349</a>
            </p>
        </div>
    </footer>
</body>
</html>
        `
      }} />
    </>
  )
}

