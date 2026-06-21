import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <Head>
                <title>Nehal Rauf | Full-Stack Developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
                <meta name="description" content="Hire Nehal Rauf - Professional Full-Stack Developer" />
            </Head>

            <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .float-animation { animation: float 3s ease-in-out infinite; }
        
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hamburger-btn { display: block !important; }
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            text-align: center !important;
            gap: 30px !important;
          }
          .hero-title { font-size: 32px !important; }
          .hero-subtitle { font-size: 16px !important; }
          .hero-buttons { 
            display: flex !important;
            flex-direction: column !important;
            gap: 15px !important;
            align-items: center !important;
          }
          .hero-buttons a, .hero-buttons button {
            width: 80% !important;
            text-align: center !important;
          }
          .stats-container {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-around !important;
            flex-wrap: nowrap !important;
            gap: 10px !important;
            margin-top: 30px !important;
          }
          .profile-image-container {
            width: 200px !important;
            height: 200px !important;
          }
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

            {/* Navigation */}
            <nav style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                backgroundColor: scrolled ? 'white' : '#667eea',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                zIndex: 1000,
                padding: '15px 20px',
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: scrolled ? '#333' : 'white',
                        margin: 0,
                    }}>
                        Nehal Rauf
                    </h1>

                    {/* Desktop Menu */}
                    <div className="desktop-menu" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Link href="/" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Home</Link>
                        <Link href="/projects" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Projects</Link>
                        <Link href="/certificates" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Certificates</Link>
                        <Link href="/contact" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Contact</Link>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className="hamburger-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            fontSize: '30px',
                            cursor: 'pointer',
                            color: scrolled ? '#333' : 'white',
                        }}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mobile-menu" style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        borderTop: '1px solid #eee',
                        position: 'absolute',
                        top: '65px',
                        left: 0,
                        right: 0,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    }}>
                        <Link href="/" style={{ fontSize: '18px', padding: '12px', textDecoration: 'none', color: '#333', borderBottom: '1px solid #eee' }} onClick={() => setIsMenuOpen(false)}>🏠 Home</Link>
                        <Link href="/projects" style={{ fontSize: '18px', padding: '12px', textDecoration: 'none', color: '#333', borderBottom: '1px solid #eee' }} onClick={() => setIsMenuOpen(false)}>📁 Projects</Link>
                        <Link href="/certificates" style={{ fontSize: '18px', padding: '12px', textDecoration: 'none', color: '#333', borderBottom: '1px solid #eee' }} onClick={() => setIsMenuOpen(false)}>📜 Certificates</Link>
                        <Link href="/contact" style={{ fontSize: '18px', padding: '12px', textDecoration: 'none', color: '#333' }} onClick={() => setIsMenuOpen(false)}>📞 Contact</Link>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 20px 60px',
            }}>
                <div className="hero-grid" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '50px',
                    alignItems: 'center',
                }}>
                    <div>
                        <h1 className="hero-title" style={{
                            fontSize: '48px',
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: '15px',
                            lineHeight: '1.2',
                        }}>
                            I'm <span style={{ color: '#ffd700' }}>Nehal Rauf</span>
                            <span style={{
                                display: 'block',
                                color: '#ffd700',
                                fontSize: '32px',
                                marginTop: '10px',
                            }}>
                                Full-Stack Developer
                            </span>
                        </h1>
                        <p className="hero-subtitle" style={{
                            fontSize: '18px',
                            color: '#f0f0f0',
                            lineHeight: '1.5',
                            marginBottom: '25px',
                        }}>
                            Computer Science undergraduate with 3.84 GPA. I build fast, responsive websites
                            that get results. Available for freelance and full-time opportunities.
                        </p>

                        <div className="hero-buttons" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <Link href="/contact" style={{
                                backgroundColor: '#ffd700',
                                color: '#333',
                                padding: '14px 30px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'transform 0.3s',
                            }}
                                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
                                📞 Hire Me Now
                            </Link>
                            <Link href="/projects" style={{
                                backgroundColor: 'transparent',
                                border: '2px solid white',
                                color: 'white',
                                padding: '14px 30px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                display: 'inline-block',
                            }}>
                                View Work →
                            </Link>
                        </div>

                        <div className="stats-container" style={{
                            display: 'flex',
                            gap: '30px',
                            marginTop: '40px',
                            justifyContent: 'flex-start',
                            flexWrap: 'wrap',
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffd700', margin: 0 }}>3+</p>
                                <p style={{ color: 'white', margin: 0, fontSize: '14px' }}>Years</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffd700', margin: 0 }}>10+</p>
                                <p style={{ color: 'white', margin: 0, fontSize: '14px' }}>Projects</p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffd700', margin: 0 }}>24/7</p>
                                <p style={{ color: 'white', margin: 0, fontSize: '14px' }}>Support</p>
                            </div>
                        </div>
                    </div>

                    {/* Profile Photo with Floating Animation */}
                    <div style={{ textAlign: 'center' }}>
                        <div className="profile-image-container float-animation" style={{
                            width: '300px',
                            height: '300px',
                            margin: '0 auto',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #ffd700 0%, #ff9800 100%)',
                            padding: '8px',
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                            }}>
                                <img
                                    src="/neha pro.jpeg"
                                    alt="Nehal Rauf"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <a href="https://github.com/nehalrauf199-sudO" target="_blank" style={{ color: 'white', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>📌 GitHub</a>
                            <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank" style={{ color: 'white', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>🔗 LinkedIn</a>
                            <a href="mailto:nehalrauf199@gmail.com" style={{ color: 'white', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>✉️ Email</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section style={{
                padding: '60px 20px',
                backgroundColor: '#f8f9fa',
                textAlign: 'center',
            }}>
                <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '10px' }}>Technical Skills</h2>
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px' }}>Technologies I master</p>
                <div className="skills-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                    gap: '15px',
                    maxWidth: '900px',
                    margin: '0 auto',
                }}>
                    {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Python', 'HTML/CSS'].map(skill => (
                        <div key={skill} style={{
                            backgroundColor: 'white',
                            padding: '15px',
                            borderRadius: '10px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }}>
                            <p style={{ fontSize: '30px', margin: '0' }}>⚡</p>
                            <h3 style={{ fontSize: '14px', margin: '8px 0' }}>{skill}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Hire Me Section */}
            <section style={{
                padding: '60px 20px',
                backgroundColor: 'white',
                textAlign: 'center',
            }}>
                <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '10px' }}>Why Hire Me?</h2>
                <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px' }}>What makes me different</p>
                <div className="features-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    maxWidth: '1000px',
                    margin: '0 auto',
                }}>
                    {[
                        { icon: '⚡', title: 'Fast Delivery', desc: 'I deliver projects before deadlines' },
                        { icon: '📱', title: 'Mobile First', desc: 'Websites that work perfectly on phones' },
                        { icon: '🎨', title: 'Modern Design', desc: 'Beautiful, professional layouts' },
                        { icon: '🔧', title: '24/7 Support', desc: 'Always available for fixes' },
                        { icon: '💰', title: 'Affordable', desc: 'Quality work at fair prices' },
                        { icon: '📈', title: 'SEO Optimized', desc: 'Your site will rank on Google' },
                    ].map(feature => (
                        <div key={feature.title} style={{
                            backgroundColor: '#f8f9fa',
                            padding: '20px',
                            borderRadius: '12px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        }}>
                            <p style={{ fontSize: '36px', margin: 0 }}>{feature.icon}</p>
                            <h3 style={{ fontSize: '18px', margin: '12px 0' }}>{feature.title}</h3>
                            <p style={{ color: '#666', fontSize: '13px' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                backgroundColor: '#1e293b',
                color: '#94a3b8',
                textAlign: 'center',
                padding: '20px',
                fontSize: '14px',
            }}>
                <p>© 2026 Nehal Rauf. Available for hire immediately.</p>
                <div style={{ marginTop: '8px' }}>
                    <a href="https://github.com/nehalrauf199-sudO" target="_blank" style={{ color: '#94a3b8', margin: '0 8px', textDecoration: 'none' }}>GitHub</a>
                    <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank" style={{ color: '#94a3b8', margin: '0 8px', textDecoration: 'none' }}>LinkedIn</a>
                    <Link href="/" style={{ color: '#94a3b8', margin: '0 8px', textDecoration: 'none' }}>Home</Link>
                </div>
            </footer>
        </div>
    )
}