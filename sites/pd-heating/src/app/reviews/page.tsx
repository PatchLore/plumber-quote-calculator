'use client'

export default function ReviewsPage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Reviews | PD Heating & Plumbing</title>
    <meta name="description" content="Read real customer reviews for PD Heating & Plumbing. See what our customers say about our professional heating and plumbing services across Surrey.">
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
            max-width: 800px;
            margin: 0 auto;
        }

        /* Reviews Section */
        .reviews-section {
            padding: 80px 20px;
            background: white;
        }

        .page-header {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 50px;
        }

        @media (min-width: 768px) {
            .page-header {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
        }

        .page-header-content h1 {
            font-size: 2.2rem;
            color: #2d3748;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .page-header-content p {
            font-size: 1.1rem;
            color: #6c757d;
        }

        .checkatrade-btn {
            background: white;
            border: 2px solid #e9ecef;
            border-radius: 12px;
            padding: 16px 24px;
            text-decoration: none;
            color: #1E3A8A;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            display: inline-block;
            text-align: center;
        }

        .checkatrade-btn:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            border-color: #1E3A8A;
            transform: translateY(-2px);
        }

        /* Reviews Grid */
        .reviews-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 25px;
            max-width: 1200px;
            margin: 0 auto;
        }

        @media (min-width: 640px) {
            .reviews-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .reviews-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .review-card {
            background: white;
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.07);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .review-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        }

        .review-rating {
            font-size: 2rem;
            font-weight: 700;
            color: #10b981;
            margin-bottom: 15px;
            line-height: 1;
        }

        .review-title {
            font-size: 1.25rem;
            color: #2d3748;
            margin-bottom: 10px;
            font-weight: 600;
            line-height: 1.3;
        }

        .review-date {
            color: #6c757d;
            font-size: 0.875rem;
            margin-bottom: 15px;
        }

        .review-body {
            color: #495057;
            line-height: 1.7;
            margin-bottom: 15px;
            flex-grow: 1;
        }

        .review-meta {
            color: #6c757d;
            font-size: 0.875rem;
            margin-top: 10px;
            padding-top: 15px;
            border-top: 1px solid #f0f0f0;
        }

        .review-meta p {
            margin-bottom: 5px;
        }

        .review-meta p:last-child {
            margin-bottom: 0;
        }

        .review-reply {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #f0f0f0;
            font-style: italic;
            color: #6c757d;
            font-size: 0.9rem;
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

            .reviews-section {
                padding: 60px 20px;
            }

            .page-header-content h1 {
                font-size: 1.8rem;
            }

            .review-card {
                padding: 25px;
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
                    <li><a href="/reviews" class="active">Reviews</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <a href="/quoteflow/calculator" class="nav-cta">Get Quote</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Customer Reviews</h1>
            <p>Real feedback from customers across Surrey and surrounding areas.</p>
        </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews-section">
        <div class="container">
            <div class="page-header">
                <div class="page-header-content">
                    <h1>Customer Reviews</h1>
                    <p>Real feedback from customers across Surrey and surrounding areas.</p>
                </div>
                <a href="https://www.checkatrade.com/trades/pdheatingandplumbing" target="_blank" rel="noopener noreferrer" class="checkatrade-btn">
                    ⭐ View Reviews on Checkatrade
                </a>
            </div>

            <div class="reviews-grid">
                <!-- Review 1 -->
                <div class="review-card">
                    <div class="review-rating">10</div>
                    <h3 class="review-title">Good communication. Swift service.</h3>
                    <p class="review-date">Posted 14 October</p>
                    <p class="review-body">Great quick and friendly service. Would recommend.</p>
                    <div class="review-meta">
                        <p>Job location: RH6</p>
                        <p>Reviewer: Mobeen T</p>
                    </div>
                </div>

                <!-- Review 2 -->
                <div class="review-card">
                    <div class="review-rating">10</div>
                    <h3 class="review-title">Helpful and reliable</h3>
                    <p class="review-date">Posted 06 October</p>
                    <p class="review-body">In two visits, Phil fitted a stop cock and did an assessment of my boiler. He was really helpful, explained everything that needed doing and was reliable.</p>
                    <div class="review-meta">
                        <p>Job location: RH8</p>
                    </div>
                </div>

                <!-- Review 3 -->
                <div class="review-card">
                    <div class="review-rating">10</div>
                    <h3 class="review-title">Professional and efficient response</h3>
                    <p class="review-date">Posted 03 September</p>
                    <p class="review-body">Excellent service as always - quick to respond to call out requests for emergencies. Would highly recommend Phil for any plumbing emergencies. We had also used Phil for a previous call-out where several plumbers failed to explore a major leak but he was able to find it and fix it with minimal hassle.</p>
                    <div class="review-meta">
                        <p>Verified reviewer</p>
                        <p>Job location: RH2</p>
                    </div>
                </div>

                <!-- Review 4 -->
                <div class="review-card">
                    <div class="review-rating">10</div>
                    <h3 class="review-title">Boiler leak repair</h3>
                    <p class="review-date">Posted 02 September</p>
                    <p class="review-body">Phil came round to fix a leak from my boiler. His quote was reasonable, which is why I went with him. When he arrived for the job, he was very nice and professional. Gave great advice and fixed the problem in no time. I'm glad I followed my instinct and went with him. Will be using him again and would definitely recommend him.</p>
                    <div class="review-meta">
                        <p>Job location: RH1</p>
                    </div>
                    <div class="review-reply">
                        "Thank you for your kind words. I look forward to assisting you again in the future."
                    </div>
                </div>

                <!-- Review 5 -->
                <div class="review-card">
                    <div class="review-rating">10</div>
                    <h3 class="review-title">Bathroom fitting</h3>
                    <p class="review-date">Posted 18 May</p>
                    <p class="review-body">Phil was recommended to us by friends and recently fitted our new bathroom. Phil is so friendly and professional and his workmanship is excellent. We're very pleased with our new bathroom and would highly recommend Phil.</p>
                    <div class="review-meta">
                        <p>Verified reviewer</p>
                        <p>Job location: RH2</p>
                    </div>
                </div>

                <!-- Review 6 -->
                <div class="review-card">
                    <div class="review-rating">10</div>
                    <h3 class="review-title">Gas boiler install</h3>
                    <p class="review-date">Posted 26 April</p>
                    <p class="review-body">I was looking for someone to install a boiler as my original installer had health issues. Phil came round and quoted very reasonably and on impression I decided to go with him. I'm so glad I did, I read his reviews and his work and tidyness was great, very impressed with the way he communicated and after finishing a very long day he left the job in a very clean and tidy way. I will definitely be using Phil again and would 100% recommend him.</p>
                    <div class="review-meta">
                        <p>Verified reviewer</p>
                    </div>
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

