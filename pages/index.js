import Head from 'next/head'
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Hire Nehal Rauf - Professional Full-Stack Developer" />
            </Head>

            <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hamburger-btn { display: block !important; }
          .hero-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .hero-title { font-size: 36px !important; }
          .profile-image-container { width: 250px !important; height: 250px !important; }
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
                zIndex: 1000
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px'
                }}>
                    <h1 style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        color: scrolled ? '#333' : 'white',
                        margin: 0,
                        cursor: 'pointer'
                    }}>
                        Nehal Rauf
                    </h1>

                    <div className="desktop-menu" style={{ display: 'flex', gap: '30px' }}>
                        <a href="#home" style={{ fontSize: '18px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Home</a>
                        <a href="#projects" style={{ fontSize: '18px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Projects</a>
                        <a href="#contact" style={{ fontSize: '18px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Contact</a>
                    </div>

                    <button
                        className="hamburger-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'none',
                            background: 'none',
                            border: 'none',
                            fontSize: '30px',
                            cursor: 'pointer',
                            color: scrolled ? '#333' : 'white'
                        }}
                    >
                        ☰
                    </button>
                </div>

                {isMenuOpen && (
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        borderTop: '1px solid #eee'
                    }}>
                        <a href="#home" style={{ fontSize: '20px', padding: '10px', textDecoration: 'none', color: '#333' }} onClick={() => setIsMenuOpen(false)}>🏠 Home</a>
                        <a href="#projects" style={{ fontSize: '20px', padding: '10px', textDecoration: 'none', color: '#333' }} onClick={() => setIsMenuOpen(false)}>📁 Projects</a>
                        <a href="#contact" style={{ fontSize: '20px', padding: '10px', textDecoration: 'none', color: '#333' }} onClick={() => setIsMenuOpen(false)}>📞 Contact</a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px'
            }}>
                <div className="hero-grid" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '50px',
                    alignItems: 'center'
                }}>
                    <div>
                        <h1 className="hero-title" style={{
                            fontSize: '56px',
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: '20px',
                            lineHeight: '1.2'
                        }}>
                            I'm <span style={{ color: '#ffd700' }}>Nehal Rauf</span>
                            <span style={{
                                display: 'block',
                                color: '#ffd700',
                                fontSize: '40px'
                            }}>
                                Full-Stack Developer
                            </span>
                        </h1>
                        <p className="hero-subtitle" style={{
                            fontSize: '20px',
                            color: '#f0f0f0',
                            lineHeight: '1.6',
                            marginBottom: '30px'
                        }}>
                            Computer Science undergraduate with 3.49 GPA. I build fast, responsive websites
                            that get results. Available for freelance and full-time opportunities.
                        </p>

                        <div className="hero-buttons" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <a href="#contact" style={{
                                backgroundColor: '#ffd700',
                                color: '#333',
                                padding: '16px 40px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'transform 0.3s'
                            }}
                                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
                                📞 Hire Me Now
                            </a>
                            <a href="#projects" style={{
                                backgroundColor: 'transparent',
                                border: '2px solid white',
                                color: 'white',
                                padding: '16px 40px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'transform 0.3s'
                            }}
                                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
                                View Work →
                            </a>
                        </div>

                        <div className="stats-container" style={{
                            display: 'flex',
                            gap: '30px',
                            marginTop: '50px',
                            flexWrap: 'wrap'
                        }}>
                            <div>
                                <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffd700', margin: 0 }}>3+</p>
                                <p style={{ color: 'white', margin: 0 }}>Years Experience</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffd700', margin: 0 }}>10+</p>
                                <p style={{ color: 'white', margin: 0 }}>Projects Done</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffd700', margin: 0 }}>24/7</p>
                                <p style={{ color: 'white', margin: 0 }}>Support</p>
                            </div>
                        </div>
                    </div>

                    {/* Profile Photo */}
                    <div style={{ textAlign: 'center' }}>
                        <div className="profile-image-container animate-float" style={{
                            width: '350px',
                            height: '350px',
                            margin: '0 auto',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #ffd700 0%, #ff9800 100%)',
                            padding: '10px'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src="/neha pro.jpeg"
                                    alt="Nehal Rauf"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <a href="https://github.com/nehalrauf199-sudO" target="_blank" style={{ color: 'white', margin: '0 10px', fontSize: '24px', textDecoration: 'none' }}>📌 GitHub</a>
                            <a href="mailto:nehalrauf199@gmail.com" style={{ color: 'white', margin: '0 10px', fontSize: '24px', textDecoration: 'none' }}>✉️ Email</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#f8f9fa'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '42px', color: '#333', marginBottom: '15px' }}>Technical Skills</h2>
                    <p style={{ fontSize: '18px', color: '#666', marginBottom: '50px' }}>Technologies I master</p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                        gap: '20px'
                    }}>
                        {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Python', 'HTML/CSS'].map(skill => (
                            <div key={skill} style={{
                                backgroundColor: 'white',
                                padding: '20px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s'
                            }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                <p style={{ fontSize: '40px', margin: '0' }}>⚡</p>
                                <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{skill}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" style={{
                padding: '80px 20px',
                backgroundColor: 'white'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '42px', textAlign: 'center', color: '#333', marginBottom: '15px' }}>My Projects</h2>
                    <p style={{ fontSize: '18px', textAlign: 'center', color: '#666', marginBottom: '50px' }}>Here's what I've built</p>

                    {/* ISTS Project */}
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        marginBottom: '30px'
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr'
                        }}>
                            <div style={{ padding: '40px' }}>
                                <span style={{
                                    backgroundColor: '#667eea',
                                    color: 'white',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    display: 'inline-block',
                                    marginBottom: '20px'
                                }}>Featured Project</span>
                                <h3 style={{ fontSize: '32px', color: '#333', marginBottom: '20px' }}>ISTS Educational Website</h3>
                                <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                                    Complete web platform for an educational institute with event management,
                                    user registration system, and dynamic content management. Used by 1000+ students.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                                    {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map(tech => (
                                        <span key={tech} style={{
                                            backgroundColor: '#e0e7ff',
                                            color: '#667eea',
                                            padding: '5px 12px',
                                            borderRadius: '15px',
                                            fontSize: '14px'
                                        }}>{tech}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                    <a href="https://github.com/nehalrauf199-sudO/ists-website" target="_blank" style={{
                                        backgroundColor: '#333',
                                        color: 'white',
                                        padding: '12px 24px',
                                        borderRadius: '8px',
                                        textDecoration: 'none'
                                    }}>📂 View Code</a>
                                    <a href="https://www.ists-institute.com" target="_blank" style={{
                                        backgroundColor: '#667eea',
                                        color: 'white',
                                        padding: '12px 24px',
                                        borderRadius: '8px',
                                        textDecoration: 'none'
                                    }}>🔗 Live Demo</a>
                                </div>
                            </div>
                            <div style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '40px'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ fontSize: '80px', margin: 0 }}>🏫</p>
                                    <p style={{ color: 'white', fontSize: '18px', marginTop: '20px' }}>Live Website →</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Hire Me Section */}
            <section style={{
                padding: '80px 20px',
                backgroundColor: '#f8f9fa'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '42px', color: '#333', marginBottom: '15px' }}>Why Hire Me?</h2>
                    <p style={{ fontSize: '18px', color: '#666', marginBottom: '50px' }}>What makes me different</p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px'
                    }}>
                        {[
                            { icon: '⚡', title: 'Fast Delivery', desc: 'I deliver projects before deadlines' },
                            { icon: '📱', title: 'Mobile First', desc: 'Websites that work perfectly on phones' },
                            { icon: '🎨', title: 'Modern Design', desc: 'Beautiful, professional layouts' },
                            { icon: '🔧', title: '24/7 Support', desc: 'Always available for fixes' },
                            { icon: '💰', title: 'Affordable', desc: 'Quality work at fair prices' },
                            { icon: '📈', title: 'SEO Optimized', desc: 'Your site will rank on Google' }
                        ].map(feature => (
                            <div key={feature.title} style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}>
                                <p style={{ fontSize: '48px', margin: 0 }}>{feature.icon}</p>
                                <h3 style={{ fontSize: '22px', margin: '15px 0' }}>{feature.title}</h3>
                                <p style={{ color: '#666' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{
                padding: '80px 20px',
                backgroundColor: '#667eea'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '42px', color: 'white', marginBottom: '15px' }}>Get In Touch</h2>
                    <p style={{ fontSize: '20px', color: '#f0f0f0', marginBottom: '40px' }}>
                        Ready to work together? Let's discuss your project!
                    </p>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        padding: '40px',
                        textAlign: 'left'
                    }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Your Name</label>
                            <input type="text" placeholder="John Doe" style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                fontSize: '16px'
                            }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email Address</label>
                            <input type="email" placeholder="you@example.com" style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                fontSize: '16px'
                            }} />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Your Message</label>
                            <textarea rows="4" placeholder="Tell me about your project..." style={{
                                width: '100%',
                                padding: '12px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                fontSize: '16px'
                            }}></textarea>
                        </div>
                        <button style={{
                            backgroundColor: '#667eea',
                            color: 'white',
                            width: '100%',
                            padding: '14px',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}>Send Message 📧</button>
                    </div>

                    <div style={{
                        marginTop: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        flexWrap: 'wrap'
                    }}>
                        <div>
                            <p style={{ color: 'white', fontSize: '14px' }}>📞 Call/WhatsApp</p>
                            <p style={{ color: '#ffd700', fontSize: '20px', fontWeight: 'bold' }}>0328-8716168</p>
                        </div>
                        <div>
                            <p style={{ color: 'white', fontSize: '14px' }}>📧 Email</p>
                            <p style={{ color: '#ffd700', fontSize: '20px', fontWeight: 'bold' }}>nehalrauf199@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer style={{
                backgroundColor: '#333',
                color: '#999',
                textAlign: 'center',
                padding: '30px'
            }}>
                <p>© 2026 Nehal Rauf. Available for hire immediately.</p>
                <div style={{ marginTop: '10px' }}>
                    <a href="https://github.com/nehalrauf199-sudO" target="_blank" style={{ color: '#999', margin: '0 10px', textDecoration: 'none' }}>GitHub</a>
                    <a href="#home" style={{ color: '#999', margin: '0 10px', textDecoration: 'none' }}>Back to Top ↑</a>
                </div>
            </footer>
        </div>
    )
}