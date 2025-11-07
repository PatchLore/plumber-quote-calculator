'use client'

export default function HomePage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PD Heating & Plumbing – Fast Quotes & Trusted Local Plumbers</title>
    <meta name="description" content="Instant quotes, WhatsApp support, and a modern website built for PD Heating & Plumbing.">
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

        .nav-links a:hover {
            color: #1E3A8A;
        }

        .nav-links a:after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: #1E3A8A;
            transition: width 0.3s ease;
        }

        .nav-links a:hover:after {
            width: 100%;
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
            padding: 120px 20px 80px;
            text-align: center;
            margin-top: 80px;
        }

        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            opacity: 0.95;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-badges {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-bottom: 30px;
        }

        .badge {
            background: rgba(255, 255, 255, 0.2);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            backdrop-filter: blur(10px);
        }

        .hero-cta {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            padding: 14px 32px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
            border: none;
            cursor: pointer;
        }

        .btn-primary {
            background: white;
            color: #1E3A8A;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        .btn-secondary:hover {
            background: white;
            color: #1E3A8A;
        }

        /* Stats Section */
        .stats {
            background: white;
            padding: 40px 20px;
            border-bottom: 1px solid #e9ecef;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
        }

        .stat-item h3 {
            font-size: 2.5rem;
            color: #1E3A8A;
            margin-bottom: 5px;
        }

        .stat-item p {
            color: #6c757d;
            font-size: 0.95rem;
        }

        /* Apps Section */
        .apps-section {
            padding: 80px 20px;
        }

        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-header h2 {
            font-size: 2.2rem;
            color: #2d3748;
            margin-bottom: 15px;
        }

        .section-header p {
            font-size: 1.1rem;
            color: #6c757d;
            max-width: 700px;
            margin: 0 auto;
        }

        /* Primary Apps Grid */
        .apps-grid-primary {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 35px;
            margin-bottom: 50px;
        }

        /* Secondary Apps Grid (JobTracker & TradeHub) */
        .apps-grid-secondary {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 35px;
            max-width: 900px;
            margin: 0 auto;
        }

        .app-card {
            background: white;
            border-radius: 16px;
            padding: 40px 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.07);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .app-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        }

        .app-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .badge-live {
            background: #d4edda;
            color: #155724;
        }

        .badge-addon {
            background: #fff3cd;
            color: #856404;
        }

        .badge-soon {
            background: #e7e7e7;
            color: #666;
        }

        .app-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            display: block;
        }

        .app-card h3 {
            font-size: 1.6rem;
            color: #2d3748;
            margin-bottom: 15px;
        }

        .app-card p {
            color: #6c757d;
            margin-bottom: 25px;
            line-height: 1.7;
        }

        .app-features {
            list-style: none;
            margin-bottom: 30px;
        }

        .app-features li {
            padding: 10px 0;
            color: #495057;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .app-features li:before {
            content: "✓";
            color: #28a745;
            font-weight: bold;
            font-size: 1.2rem;
        }

        .app-cta {
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            transition: all 0.3s ease;
        }

        .cta-primary {
            background: #1E3A8A;
            color: white;
        }

        .cta-primary:hover {
            background: #1e40af;
        }

        .cta-secondary {
            background: #f8f9fa;
            color: #1E3A8A;
            border: 2px solid #1E3A8A;
        }

        .cta-secondary:hover {
            background: #1E3A8A;
            color: white;
        }

        .cta-disabled {
            background: #e9ecef;
            color: #6c757d;
            cursor: not-allowed;
        }

        /* Why Section */
        .why-section {
            background: white;
            padding: 80px 20px;
        }

        .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
            margin-top: 50px;
        }

        .why-card {
            text-align: center;
        }

        .why-icon {
            font-size: 3rem;
            margin-bottom: 20px;
        }

        .why-card h3 {
            font-size: 1.4rem;
            color: #2d3748;
            margin-bottom: 15px;
        }

        .why-card p {
            color: #6c757d;
            line-height: 1.7;
        }

        /* Trades Section */
        .trades-section {
            padding: 80px 20px;
            background: #f8f9fa;
        }

        .trades-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 40px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        @media (min-width: 640px) {
            .trades-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .trades-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        .trade-badge {
            background: white;
            padding: 24px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            border: 1px solid transparent;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 160px;
            height: 100%;
        }

        .trade-badge:hover {
            box-shadow: 0 4px 12px rgba(30, 58, 138, 0.15);
            border-color: #1E3A8A;
        }

        .trade-icon {
            font-size: 2rem;
            margin-bottom: 8px;
        }

        .trade-badge p {
            color: #1f2937;
            font-weight: 600;
            font-size: 0.875rem;
            margin: 0;
        }

        @media (min-width: 640px) {
            .trade-badge p {
                font-size: 1rem;
            }
        }

        /* Reviews Section */
        .reviews-section {
            background: white;
            padding: 80px 20px;
            text-align: center;
        }

        .reviews-section h2 {
            font-size: 2.2rem;
            color: #2d3748;
            margin-bottom: 30px;
        }

        .reviews-link {
            display: inline-block;
            padding: 16px 32px;
            background: #1E3A8A;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
        }

        .reviews-link:hover {
            background: #1e40af;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(30, 58, 138, 0.3);
        }

        /* QuoteFlow Section */
        .quoteflow-section {
            background: #f8f9fa;
            padding: 80px 20px;
            text-align: center;
        }

        .quoteflow-section h2 {
            font-size: 2.2rem;
            color: #2d3748;
            margin-bottom: 20px;
        }

        .quoteflow-section p {
            font-size: 1.1rem;
            color: #6c757d;
            max-width: 700px;
            margin: 0 auto 30px;
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

        /* Final CTA */
        .final-cta {
            background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
            color: white;
            padding: 80px 20px;
            text-align: center;
        }

        .final-cta h2 {
            font-size: 2.2rem;
            margin-bottom: 20px;
        }

        .final-cta p {
            font-size: 1.1rem;
            margin-bottom: 30px;
            opacity: 0.95;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .apps-grid-primary,
            .apps-grid-secondary {
                grid-template-columns: 1fr;
            }

            .section-header h2 {
                font-size: 1.8rem;
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
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <a href="/quoteflow/calculator" class="nav-cta">Get Quote</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Professional Heating & Plumbing Services</h1>
            <p>Fast, reliable and affordable plumbing with instant online quotes.</p>
            
            <div class="hero-cta">
                <a href="/quoteflow/calculator" class="btn btn-primary">Get an Instant Quote</a>
                <a href="https://wa.me/447739120349" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Message on WhatsApp</a>
            </div>
        </div>
    </section>

    <!-- QuoteFlow Section -->
    <section class="quoteflow-section">
        <div class="container">
            <h2>Get an Instant Quote</h2>
            <p>Use our instant quote calculator to get a transparent price for your heating and plumbing needs. No hidden fees, no surprises.</p>
            <a href="/quoteflow/calculator" class="btn btn-primary">Try the Calculator</a>
        </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section">
        <div class="container">
            <h2>Read Our Reviews</h2>
            <p style="margin-bottom: 30px; color: #6c757d;">See what our customers say about PD Heating & Plumbing</p>
            <a href="https://www.checkatrade.com/trades/pdheatingandplumbing" target="_blank" rel="noopener noreferrer" class="reviews-link">View Our Checkatrade Reviews →</a>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
        <div class="container">
            <h2>Need Professional Heating & Plumbing Services?</h2>
            <p>Get an instant quote or message us on WhatsApp for fast, reliable service</p>
            <div class="hero-cta">
                <a href="/quoteflow/calculator" class="btn btn-primary">Get an Instant Quote</a>
                <a href="https://wa.me/447739120349" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Message on WhatsApp</a>
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