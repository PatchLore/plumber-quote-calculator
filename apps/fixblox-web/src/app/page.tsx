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
    <title>FixBlox - Talk to FixBlox</title>
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

        /* Pricing Snapshot Section */
        .pricing-snapshot {
            background: #f8f9fa;
            padding: 50px 20px;
            border-bottom: 1px solid #e9ecef;
        }

        .pricing-snapshot-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .pricing-snapshot-header h2 {
            font-size: 1.8rem;
            color: #2d3748;
            margin-bottom: 10px;
        }

        .pricing-snapshot-header p {
            font-size: 1rem;
            color: #6c757d;
        }

        .pricing-snapshot-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .pricing-snapshot-card {
            background: white;
            border: 1px solid #e9ecef;
            border-radius: 12px;
            padding: 24px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .pricing-snapshot-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .pricing-snapshot-card.popular {
            border-color: #0066FF;
            border-width: 2px;
            position: relative;
        }

        .pricing-snapshot-card.popular::before {
            content: "Most Popular";
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            background: #0066FF;
            color: white;
            padding: 3px 12px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 600;
        }

        .pricing-snapshot-tier {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 8px;
        }

        .pricing-snapshot-price {
            font-size: 1.8rem;
            font-weight: 700;
            color: #0066FF;
            margin-bottom: 8px;
        }

        .pricing-snapshot-outcome {
            font-size: 0.95rem;
            color: #6c757d;
            margin-bottom: 16px;
            min-height: 40px;
        }

        .pricing-snapshot-cta {
            display: inline-block;
            padding: 8px 20px;
            border-radius: 6px;
            font-size: 0.9rem;
            font-weight: 600;
            text-decoration: none;
            color: #0066FF;
            border: 1px solid #0066FF;
            transition: all 0.3s ease;
        }

        .pricing-snapshot-cta:hover {
            background: #0066FF;
            color: white;
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

        /* Managed Services Section */
        .managed-services-section {
            background: white;
            padding: 80px 20px;
        }

        .managed-services-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .managed-services-content h2 {
            font-size: 2.2rem;
            color: #2d3748;
            margin-bottom: 12px;
            text-align: center;
        }

        .managed-services-content .subheading {
            font-size: 1rem;
            color: #6c757d;
            font-style: italic;
            margin-bottom: 30px;
            text-align: center;
        }

        .managed-services-content .intro-line {
            font-size: 1.2rem;
            color: #2d3748;
            font-weight: 600;
            margin-bottom: 24px;
            text-align: center;
        }

        .managed-services-content .pricing-line {
            font-size: 1.1rem;
            color: #0066FF;
            font-weight: 600;
            margin-bottom: 30px;
            text-align: center;
        }

        .managed-services-content .body-text {
            font-size: 1.1rem;
            color: #6c757d;
            line-height: 1.7;
            margin-bottom: 40px;
            text-align: center;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .managed-services-list {
            list-style: none;
            text-align: center;
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .managed-services-list li {
            padding: 12px 0;
            color: #495057;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
        }

        .managed-services-list li:before {
            content: "•";
            color: #0066FF;
            font-weight: bold;
            font-size: 1.5rem;
            line-height: 1;
            margin-top: 2px;
        }

        .managed-services-comparison {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 40px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        @media (min-width: 768px) {
            .managed-services-comparison {
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }
        }

        .comparison-column {
            background: #f8f9fa;
            padding: 24px;
            border-radius: 12px;
            text-align: center;
        }

        .comparison-column h4 {
            font-size: 1.1rem;
            font-weight: 600;
            color: #2d3748;
            margin-bottom: 16px;
            text-align: center;
        }

        .comparison-column.old-way h4 {
            color: #dc3545;
        }

        .comparison-column.fixblox-managed h4 {
            color: #28a745;
        }

        .comparison-list {
            list-style: none;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        .comparison-list li {
            padding: 10px 0;
            color: #495057;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .comparison-list li:before {
            content: "•";
            color: inherit;
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 1;
            margin-top: 2px;
        }

        .comparison-column.old-way .comparison-list li:before {
            color: #dc3545;
        }

        .comparison-column.fixblox-managed .comparison-list li:before {
            color: #28a745;
        }

        .managed-services-reassurance {
            font-size: 0.9rem;
            color: #6c757d;
            font-style: italic;
            margin-bottom: 35px;
            text-align: center;
        }

        .reviewflow-section {
            margin-top: 60px;
            padding: 40px 24px;
            border-top: 2px solid #e9ecef;
            text-align: center;
            background: #f8f9fa;
            border-radius: 12px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .reviewflow-section h3 {
            font-size: 1.6rem;
            color: #2d3748;
            margin-bottom: 16px;
            text-align: center;
        }

        .reviewflow-section p {
            font-size: 1.1rem;
            color: #6c757d;
            line-height: 1.7;
            margin-bottom: 24px;
            text-align: center;
        }

        .reviewflow-list {
            list-style: none;
            margin: 0 0 24px 0;
            padding: 0;
            text-align: center;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        }

        .reviewflow-list li {
            padding: 10px 0;
            color: #495057;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .reviewflow-list li span:first-child {
            color: #0066FF;
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 1;
        }

        .reviewflow-label {
            font-size: 0.85rem;
            color: #6c757d;
            font-style: italic;
            margin-top: 16px;
            text-align: center;
        }

        .managed-services-cta {
            display: inline-flex;
            align-items: center;
            padding: 14px 32px;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            background: #0066FF;
            color: white;
            transition: all 0.3s ease;
        }

        .managed-services-cta:hover {
            background: #0052CC;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* Pricing Section */
        .pricing-section {
            background: white;
            padding: 80px 20px;
        }

        .pricing-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .pricing-header h2 {
            font-size: 2.2rem;
            color: #2d3748;
            margin-bottom: 15px;
        }

        .pricing-header p {
            font-size: 1.1rem;
            color: #6c757d;
            max-width: 700px;
            margin: 0 auto;
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto 30px;
        }

        .pricing-card {
            background: white;
            border: 2px solid #e9ecef;
            border-radius: 16px;
            padding: 32px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
        }

        .pricing-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.1);
        }

        .pricing-card.popular {
            border-color: #0066FF;
            border-width: 3px;
        }

        .pricing-card.popular::before {
            content: "Most Popular";
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: #0066FF;
            color: white;
            padding: 4px 16px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
        }

        .pricing-tier-name {
            font-size: 1.4rem;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 10px;
        }

        .pricing-price {
            font-size: 2.5rem;
            font-weight: 700;
            color: #0066FF;
            margin-bottom: 5px;
        }

        .pricing-period {
            font-size: 1rem;
            color: #6c757d;
            margin-bottom: 15px;
        }

        .pricing-tagline {
            font-size: 1rem;
            color: #2d3748;
            font-weight: 600;
            margin-bottom: 20px;
        }

        .pricing-features {
            list-style: none;
            text-align: left;
            margin-bottom: 30px;
            padding: 0;
        }

        .pricing-features li {
            padding: 8px 0;
            color: #495057;
            font-size: 0.95rem;
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .pricing-features li:before {
            content: "•";
            color: #0066FF;
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 1;
            margin-top: 2px;
        }

        .pricing-cta {
            display: inline-block;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            width: 100%;
            text-align: center;
        }

        .pricing-cta-primary {
            background: #0066FF;
            color: white;
        }

        .pricing-cta-primary:hover {
            background: #0052CC;
        }

        .pricing-cta-secondary {
            background: #f8f9fa;
            color: #0066FF;
            border: 2px solid #0066FF;
        }

        .pricing-cta-secondary:hover {
            background: #0066FF;
            color: white;
        }

        .pricing-reassurance {
            text-align: center;
            font-size: 0.9rem;
            color: #6c757d;
            margin-top: 30px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
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
            <h1>Stop missing enquiries. Book more jobs.</h1>
            <p>If you’re on the tools, you can’t always answer the phone.<br>FixBlox captures enquiries and gets them followed up fast — so work gets booked without you living on your phone.</p>
            
            <div class="hero-badges">
                <span class="badge">Fewer missed enquiries</span>
                <span class="badge">Faster follow-up</span>
                <span class="badge">More jobs booked</span>
                <span class="badge">Less admin</span>
            </div>

            <div class="hero-cta">
                <a href="/contact" class="btn btn-primary">Talk to FixBlox</a>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section class="stats">
        <div class="container">
            <div class="section-header" style="margin-bottom: 30px;">
                <h2 style="font-size: 2.2rem; color: #2d3748; margin-bottom: 12px;">You’re busy working. Enquiries come in anyway.</h2>
            </div>
            <div class="stats-grid">
                <div class="stat-item">
                    <h3 style="font-size: 1.5rem;">Missed calls</h3>
                    <p>You miss calls while you’re on a job</p>
                </div>
                <div class="stat-item">
                    <h3 style="font-size: 1.5rem;">Messages everywhere</h3>
                    <p>Messages are split across WhatsApp, Facebook, texts and voicemail</p>
                </div>
                <div class="stat-item">
                    <h3 style="font-size: 1.5rem;">Admin at night</h3>
                    <p>You end up doing admin at night</p>
                </div>
                <div class="stat-item">
                    <h3 style="font-size: 1.5rem;">Slow replies</h3>
                    <p>Slow replies mean the customer books someone else</p>
                </div>
            </div>
            <p style="text-align:center; margin-top: 30px; color:#6c757d; font-size: 1.05rem; max-width: 800px; margin-left:auto; margin-right:auto;">
                It’s not the quality of your work. It’s the follow-up.
            </p>
        </div>
    </section>

    <!-- How FixBlox Helps -->
    <section class="apps-section" id="apps" style="scroll-margin-top: 100px;">
        <div class="container">
            <div class="section-header">
                <h2>How FixBlox Helps</h2>
                <p>Two simple ways to stop enquiries slipping through the cracks.</p>
            </div>

            <!-- Option Cards -->
            <div class="apps-grid-primary">
                <a class="app-card" href="/contact">
                    <span class="app-icon">🌐</span>
                    <h3>Simple Website (£199 one-off)</h3>
                    <p style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">For newer trades, small teams, or anyone without a proper site.</p>
                    <p>Clear and professional. Built to help customers contact you.</p>
                    <ul class="app-features">
                        <li>Clear contact details customers can actually find</li>
                        <li>Enquiries go to one place instead of being scattered</li>
                        <li>A professional first impression that helps you win work</li>
                    </ul>
                    <p style="margin-bottom: 25px;">You tell us what you do and where you work.<br>We put it together properly.</p>
                    <div class="app-cta cta-primary">Talk to FixBlox</div>
                </a>

                <a class="app-card" href="/contact">
                    <span class="app-icon">📞</span>
                    <h3>Call Handling (£70/month + one-off setup)</h3>
                    <p style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">For trades who miss calls because they’re doing the work.</p>
                    <p>So enquiries get handled while you stay on the job.</p>
                    <ul class="app-features">
                        <li>Missed calls are answered for you</li>
                        <li>Enquiries are captured 24/7</li>
                        <li>You get the details you need, without back-and-forth</li>
                    </ul>
                    <p style="margin-bottom: 25px;">You stay on the job.<br>Enquiries still get handled.</p>
                    <div class="app-cta cta-primary">Talk to FixBlox</div>
                </a>
            </div>
        </div>
    </section>

    <!-- Managed Enquiry Operations -->
    <section class="managed-services-section">
        <div class="container">
            <div class="managed-services-content">
                <h2>Managed Enquiry Operations (From £199/month)</h2>
                <p class="intro-line">For growing trades who want enquiries handled and jobs booked without chasing messages.</p>
                <p class="pricing-line">From £199/month</p>
                <p class="body-text">FixBlox can take ownership of follow-ups — turning existing enquiries into booked work and cutting down the admin that eats your evenings.</p>
                <p class="body-text" style="margin-top: -20px;">If you’re getting regular enquiries but they’re messy, slow, or slipping away, this is for you.</p>
                <a href="/contact" class="managed-services-cta">Talk to FixBlox</a>
            </div>
        </div>
    </section>

    <!-- Pricing Snapshot -->
    <section class="pricing-snapshot">
        <div class="container">
            <div class="pricing-snapshot-header">
                <h2>Pricing Snapshot</h2>
                <p></p>
            </div>
            <div class="pricing-snapshot-grid">
                <div class="pricing-snapshot-card">
                    <div class="pricing-snapshot-tier">Simple Website</div>
                    <div class="pricing-snapshot-price">£199 one-off</div>
                    <div class="pricing-snapshot-outcome"></div>
                </div>
                <div class="pricing-snapshot-card">
                    <div class="pricing-snapshot-tier">Call Handling</div>
                    <div class="pricing-snapshot-price">£70/month (+ one-off setup)</div>
                    <div class="pricing-snapshot-outcome"></div>
                </div>
                <div class="pricing-snapshot-card">
                    <div class="pricing-snapshot-tier">Managed Enquiry Operations</div>
                    <div class="pricing-snapshot-price">From £199/month</div>
                    <div class="pricing-snapshot-outcome"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="pricing-section" id="faq">
        <div class="container">
            <div class="pricing-header">
                <h2>FAQ</h2>
                <p></p>
            </div>

            <div class="pricing-grid">
                <div class="pricing-card">
                    <div class="pricing-tier-name">Who is FixBlox for?</div>
                    <div class="pricing-tagline" style="font-weight: 400;">UK trades who get enquiries but don’t always have time to answer calls or keep on top of messages.</div>
                </div>

                <div class="pricing-card">
                    <div class="pricing-tier-name">Do you answer calls in my business name?</div>
                    <div class="pricing-tagline" style="font-weight: 400;">Yes. Calls are handled as your business, in a straightforward and professional way.</div>
                </div>

                <div class="pricing-card">
                    <div class="pricing-tier-name">Is this replacing my admin?</div>
                    <div class="pricing-tagline" style="font-weight: 400;">It can reduce a lot of the chasing and back-and-forth. You stay in control — we fit around how you work.</div>
                </div>

                <div class="pricing-card">
                    <div class="pricing-tier-name">What don’t you do?</div>
                    <div class="pricing-tagline" style="font-weight: 400;">We don’t sell anything to log into. We also don’t run your whole business — we focus on enquiries and bookings.</div>
                </div>

                <div class="pricing-card">
                    <div class="pricing-tier-name">How do we get started?</div>
                    <div class="pricing-tagline" style="font-weight: 400;">Have a quick chat with us. We’ll ask a few questions and recommend the simplest next step.</div>
                </div>

                <div class="pricing-card">
                    <div class="pricing-tier-name">Can I start small?</div>
                    <div class="pricing-tagline" style="font-weight: 400;">Yes. Many trades start with Call Handling or a Simple Website, then move to Managed Enquiry Operations as they get busier.</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta">
        <div class="container">
            <h2>Fewer missed enquiries.<br>More booked jobs.<br>Less admin at night.</h2>
            <p></p>
            <a href="/contact" class="btn btn-primary">Talk to FixBlox</a>
        </div>
    </section>
</body>
</html>
        `
      }} />
    </>
  )
}