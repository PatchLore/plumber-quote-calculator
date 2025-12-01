'use client'

import type { Metadata } from 'next'

// Note: Metadata is handled in layout.tsx, but we ensure proper H1 structure
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
    <title>FixBlox - Our Applications</title>
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
            color: #0066FF;
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
            color: #0066FF;
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
            color: #0066FF;
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
            gap: 24px;
            margin-bottom: 50px;
            align-items: stretch;
        }

        /* Secondary Apps Grid */
        .apps-grid-secondary {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
            align-items: stretch;
        }

        .app-card {
            background: white;
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.07);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            min-height: 320px;
            height: 100%;
            text-decoration: none;
            color: inherit;
            cursor: pointer;
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
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            transition: all 0.3s ease;
            margin-top: auto;
        }

        .cta-primary {
            background: #0066FF;
            color: white;
        }

        .cta-primary:hover {
            background: #0052CC;
        }

        .cta-secondary {
            background: #f8f9fa;
            color: #0066FF;
            border: 2px solid #0066FF;
        }

        .cta-secondary:hover {
            background: #0066FF;
            color: white;
        }

        .cta-disabled {
            background: #e9ecef;
            color: #6c757d;
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
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
            border-color: #0066FF;
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

        /* Final CTA */
        .final-cta {
            background: linear-gradient(135deg, #0066FF 0%, #00D9FF 100%);
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
            <a href="/" class="logo">FixBlox</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Complete Customer System for Tradespeople</h1>
            <p>Professional web applications designed to streamline trade businesses. From instant quotes to AI customer support and WhatsApp integration — built specifically for the trades industry.</p>
            
            <div class="hero-badges">
                <span class="badge">💻 Modern Tech Stack</span>
                <span class="badge">📱 Mobile-First Design</span>
                <span class="badge">🚀 Quick Setup</span>
                <span class="badge">💼 Trade-Specific</span>
            </div>

            <div class="hero-cta">
                <a href="#apps" class="btn btn-primary">Explore Our Apps</a>
                <a href="/contact" class="btn btn-secondary">Get in Touch</a>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
        <div class="stats-grid">
            <div class="stat-item">
                <h3>Built for Trades</h3>
                <p>Across the UK</p>
            </div>
            <div class="stat-item">
                <h3>24/7</h3>
                <p>Always Available</p>
            </div>
            <div class="stat-item">
                <h3>100%</h3>
                <p>Cloud-Powered</p>
            </div>
            <div class="stat-item">
                <h3>New</h3>
                <p>Platform</p>
            </div>
        </div>
    </section>

    <!-- Apps Section -->
    <section class="apps-section" id="apps" style="scroll-margin-top: 100px;">
        <div class="container">
            <div class="section-header">
                <h2>Our Web Applications</h2>
                <p>Industry-specific solutions designed to help your trade business grow</p>
            </div>

            <!-- Primary Apps -->
            <div class="apps-grid-primary">
                <!-- Websites & SEO for Trades -->
                <a class="app-card" href="/contact">
                    <span class="app-badge badge-live">LIVE NOW</span>
                    <span class="app-icon">🌐</span>
                    <h3>Websites & SEO for Trades</h3>
                    <p>Modern, mobile-friendly websites built specifically for trade businesses. Boost visibility, improve search rankings, and convert more enquiries with fully optimised local SEO and service pages.</p>
                    <ul class="app-features">
                        <li>SEO-optimised website build</li>
                        <li>Google Business optimisation</li>
                        <li>Service area pages</li>
                        <li>Local keyword targeting</li>
                    </ul>
                    <div class="app-cta cta-primary">Learn More →</div>
                </a>

                <!-- QuoteFlow -->
                <a class="app-card" href="/contact">
                    <span class="app-badge badge-live">LIVE NOW</span>
                    <span class="app-icon">📊</span>
                    <h3>QuoteFlow</h3>
                    <p>Instant quote calculator for tradespeople. Generate accurate pricing in seconds, capture high-quality enquiries, and manage all jobs from one simple dashboard.</p>
                    <ul class="app-features">
                        <li>Instant quote calculator</li>
                        <li>Lead capture & notifications</li>
                        <li>Admin dashboard included</li>
                        <li>Mobile responsive</li>
                    </ul>
                    <div class="app-cta cta-primary">Learn More →</div>
                </a>

                <!-- Trades Digital Solutions -->
                <a class="app-card" href="/contact">
                    <span class="app-badge badge-live">LIVE NOW</span>
                    <span class="app-icon">🛠️</span>
                    <h3>Trades Digital Solutions</h3>
                    <p>Tailored digital tools built for tradespeople. Improve lead generation, automate enquiries, and streamline day-to-day job management with industry-focused systems.</p>
                    <ul class="app-features">
                        <li>Instant quote pages</li>
                        <li>WhatsApp lead tools</li>
                        <li>Review funnel setup</li>
                        <li>Lead tracking dashboards</li>
                    </ul>
                    <div class="app-cta cta-primary">Learn More →</div>
                </a>
            </div>

            <!-- Secondary Apps (Add-ons & Coming Soon) -->
            <div class="apps-grid-secondary">
                <!-- AI Customer Assistant -->
                <a class="app-card" href="/contact">
                    <span class="app-badge badge-addon">ADD-ON</span>
                    <span class="app-icon">🤖</span>
                    <h3>AI Customer Assistant</h3>
                    <p>24/7 AI chatbot designed to handle customer questions, bookings, and automatic follow-ups even while you're busy on the job.</p>
                    <ul class="app-features">
                        <li>24/7 customer support</li>
                        <li>Appointment booking</li>
                        <li>Instant responses</li>
                        <li>FAQ automation</li>
                    </ul>
                    <div class="app-cta cta-secondary">Contact Us →</div>
                </a>
                
                <!-- WhatsApp Integration -->
                <a class="app-card" href="/contact">
                    <span class="app-badge badge-addon">ADD-ON</span>
                    <span class="app-icon">💬</span>
                    <h3>WhatsApp Integration</h3>
                    <p>Direct customer communication through WhatsApp. Send quotes, share updates, and collect enquiries instantly from your website or QuoteFlow page.</p>
                    <ul class="app-features">
                        <li>Direct messaging</li>
                        <li>Quote delivery</li>
                        <li>Status updates</li>
                        <li>Lead capture tools</li>
                    </ul>
                    <div class="app-cta cta-secondary">Contact Us →</div>
                </a>
                
                <!-- JobTracker -->
                <a class="app-card" href="/contact">
                    <span class="app-badge badge-soon">COMING SOON</span>
                    <span class="app-icon">🔧</span>
                    <h3>JobTracker</h3>
                    <p>
                        Smart job scheduling and team coordination for tradespeople.<br>
                        Manage jobs, assign tasks, keep your team organised,<br>
                        track project progress, and notify customers instantly—<br>
                        all from one simple dashboard.
                    </p>
                    <ul class="app-features">
                        <li>Job scheduling calendar</li>
                        <li>Team management</li>
                        <li>Real-time updates</li>
                        <li>Customer notifications</li>
                    </ul>
                    <div class="app-cta cta-disabled">Get Notified →</div>
                </a>
            </div>
        </div>
    </section>

    <!-- Why FixBlox -->
    <section class="why-section">
        <div class="container">
            <div class="section-header">
                <h2>Why Tradespeople Choose FixBlox</h2>
                <p>We build powerful tools that help you win more jobs and run your business efficiently</p>
            </div>
            
            <div class="why-grid">
                <div class="why-card">
                    <div class="why-icon">🎯</div>
                    <h3>Built for Traders</h3>
                    <p>Industry-specific solutions designed by people who understand your business. Each app is tailored to the unique needs of your trade.</p>
                </div>
                <div class="why-card">
                    <div class="why-icon">⚡</div>
                    <h3>Complete Solutions</h3>
                    <p>From lead generation to job completion and invoicing. Everything you need to run a modern trade business in one place.</p>
                </div>
                <div class="why-card">
                    <div class="why-icon">💰</div>
                    <h3>Simple One-Time Pricing</h3>
                    <p>Pay once, own it forever. No subscriptions, no hidden fees. Add AI assistant and WhatsApp integration as optional add-ons.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Trades Section -->
    <section class="trades-section">
        <div class="container">
            <div class="section-header">
                <h2>Built for Every Trade</h2>
                <p>Whether you're a plumber, electrician, builder, or contractor — we have solutions for you</p>
            </div>
            
                <div class="trades-grid">
                <div class="trade-badge">
                    <div class="trade-icon">🔧</div>
                    <p>Plumbers</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">⚡</div>
                    <p>Electricians</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">🏗️</div>
                    <p>Builders</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">🛠️</div>
                    <p>Contractors</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">🏠</div>
                    <p>Renovators</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">🌡️</div>
                    <p>HVAC</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">🪟</div>
                    <p>Glaziers</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">🎨</div>
                    <p>Decorators</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">🚿</div>
                    <p>Bathroom Fitters</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">🚪</div>
                    <p>Joiners / Carpenters</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">🌳</div>
                    <p>Landscapers / Gardeners</p>
                </div>
                <div class="trade-badge">
                    <div class="trade-icon">🧱</div>
                    <p>Bricklayers / Masons</p>
                </div>
                
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
        <div class="container">
            <h2>Ready to Modernize Your Trade Business?</h2>
            <p>Start generating more leads and streamline your trade business operations with professional web solutions</p>
            <a href="/quoteflow" class="btn btn-primary">Start with QuoteFlow</a>
        </div>
    </section>
</body>
</html>
        `
      }} />
    </>
  )
}