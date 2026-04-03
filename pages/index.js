import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
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
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        @media (max-width: 768px) {
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
          .hero-buttons a {
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
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          .projects-grid > div {
            flex-direction: column !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          .nav-links {
            gap: 15px !important;
          }
          .nav-links a {
            font-size: 14px !important;
          }
        }
      `}</style>

            {/* Simple Navigation - No Hamburger */}
            <nav style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                backgroundColor: scrolled ? 'white' : '#667eea',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                zIndex: 1000,
                padding: '15px 20px'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '15px'
                }}>
                    <h1 style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: scrolled ? '#333' : 'white',
                        margin: 0
                    }}>
                        Nehal Rauf
                    </h1>

                    <div className="nav-links" style={{
                        display: 'flex',
                        gap: '30px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <a href="#home" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Home</a>
                        <a href="#projects" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Projects</a>
                        <a href="#contact" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 20px 60px'
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
                            fontSize: '48px',
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: '15px',
                            lineHeight: '1.2'
                        }}>
                            I'm <span style={{ color: '#ffd700' }}>Nehal Rauf</span>
                            <span style={{
                                display: 'block',
                                color: '#ffd700',
                                fontSize: '32px',
                                marginTop: '10px'
                            }}>
                                Full-Stack Developer
                            </span>
                        </h1>
                        <p className="hero-subtitle" style={{
                            fontSize: '18px',
                            color: '#f0f0f0',
                            lineHeight: '1.5',
                            marginBottom: '25px'
                        }}>
                            Computer Science undergraduate with 3.49 GPA. I build fast, responsive websites
                            that get results. Available for freelance and full-time opportunities.
                        </p>

                        <div className="hero-buttons" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <a href="#contact" style={{
                                backgroundColor: '#ffd700',
                                color: '#333',
                                padding: '14px 30px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}>
                                📞 Hire Me Now
                            </a>
                            <a href="#projects" style={{
                                backgroundColor: 'transparent',
                                border: '2px solid white',
                                color: 'white',
                                padding: '14px 30px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}>
                                View Work →
                            </a>
                        </div>

                        <div className="stats-container" style={{
                            display: 'flex',
                            gap: '30px',
                            marginTop: '40px',
                            justifyContent: 'flex-start'
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

                    <div style={{ textAlign: 'center' }}>
                        <div className="profile-image-container animate-float" style={{
                            width: '300px',
                            height: '300px',
                            margin: '0 auto',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #ffd700 0%, #ff9800 100%)',
                            padding: '8px'
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
                        <div style={{ marginTop: '15px' }}>
                            <a href="https://github.com/nehalrauf199-sudO" target="_blank" style={{ color: 'white', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>📌 GitHub</a>
                            <a href="mailto:nehalrauf199@gmail.com" style={{ color: 'white', margin: '0 10px', fontSize: '20px', textDecoration: 'none' }}>✉️ Email</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section style={{
                padding: '60px 20px',
                backgroundColor: '#f8f9fa'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '10px' }}>Technical Skills</h2>
                    <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px' }}>Technologies I master</p>

                    <div className="skills-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                        gap: '15px'
                    }}>
                        {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Python', 'HTML/CSS'].map(skill => (
                            <div key={skill} style={{
                                backgroundColor: 'white',
                                padding: '15px',
                                borderRadius: '10px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}>
                                <p style={{ fontSize: '30px', margin: '0' }}>⚡</p>
                                <h3 style={{ fontSize: '14px', margin: '8px 0' }}>{skill}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" style={{
                padding: '60px 20px',
                backgroundColor: 'white'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '32px', textAlign: 'center', color: '#333', marginBottom: '10px' }}>My Projects</h2>
                    <p style={{ fontSize: '16px', textAlign: 'center', color: '#666', marginBottom: '40px' }}>Here's what I've built</p>

                    <div className="projects-grid" style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr'
                        }}>
                            <div style={{ padding: '30px' }}>
                                <span style={{
                                    backgroundColor: '#667eea',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    display: 'inline-block',
                                    marginBottom: '15px'
                                }}>Featured</span>
                                <h3 style={{ fontSize: '24px', color: '#333', marginBottom: '15px' }}>ISTS Educational Website</h3>
                                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5', marginBottom: '20px' }}>
                                    Complete web platform for an educational institute with event management,
                                    user registration system, and dynamic content management.
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                                    {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map(tech => (
                                        <span key={tech} style={{
                                            backgroundColor: '#e0e7ff',
                                            color: '#667eea',
                                            padding: '4px 10px',
                                            borderRadius: '15px',
                                            fontSize: '11px'
                                        }}>{tech}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                    <a href="https://github.com/nehalrauf199-sudO/ists-website" target="_blank" style={{
                                        backgroundColor: '#333',
                                        color: 'white',
                                        padding: '10px 20px',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        display: 'inline-block'
                                    }}>📂 View Code</a>
                                    <a href="https://www.ists-institute.com" target="_blank" style={{
                                        backgroundColor: '#667eea',
                                        color: 'white',
                                        padding: '10px 20px',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        display: 'inline-block'
                                    }}>🔗 Live Demo</a>
                                </div>
                            </div>

                            <a
                                href="https://www.ists-institute.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '30px',
                                    minHeight: '250px',
                                    cursor: 'pointer',
                                    textDecoration: 'none'
                                }}
                            >
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ fontSize: '60px', margin: 0 }}>🏫</p>
                                    <p style={{ color: 'white', fontSize: '16px', marginTop: '15px', fontWeight: 'bold' }}>
                                        Click to Visit Website →
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Hire Me Section */}
            <section style={{
                padding: '60px 20px',
                backgroundColor: '#f8f9fa'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', color: '#333', marginBottom: '10px' }}>Why Hire Me?</h2>
                    <p style={{ fontSize: '16px', color: '#666', marginBottom: '40px' }}>What makes me different</p>

                    <div className="features-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px'
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
                                padding: '20px',
                                borderRadius: '12px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}>
                                <p style={{ fontSize: '36px', margin: 0 }}>{feature.icon}</p>
                                <h3 style={{ fontSize: '18px', margin: '12px 0' }}>{feature.title}</h3>
                                <p style={{ color: '#666', fontSize: '13px' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section - Only WhatsApp */}
            <section id="contact" style={{
                padding: '60px 20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', color: 'white', marginBottom: '15px' }}>Get In Touch</h2>
                    <p style={{ fontSize: '18px', color: '#f0f0f0', marginBottom: '40px' }}>
                        Let's discuss your project! Click the button below to message me directly.
                    </p>

                    <a
                        href="https://wa.me/923288716168?text=Hi%20Nehal,%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: '#25D366',
                            color: 'white',
                            padding: '18px 40px',
                            fontSize: '22px',
                            fontWeight: 'bold',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            display: 'inline-block',
                            marginBottom: '40px',
                            transition: 'transform 0.3s',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        💬 Message Me on WhatsApp
                    </a>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        flexWrap: 'wrap',
                        marginTop: '20px'
                    }}>
                        <div>
                            <p style={{ color: 'white', fontSize: '14px', marginBottom: '5px' }}>📞 Call / WhatsApp</p>
                            <a href="tel:923288716168" style={{ color: '#ffd700', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none' }}>0328-8716168</a>
                        </div>
                        <div>
                            <p style={{ color: 'white', fontSize: '14px', marginBottom: '5px' }}>📧 Email</p>
                            <a href="mailto:nehalrauf199@gmail.com" style={{ color: '#ffd700', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none' }}>nehalrauf199@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>

            <footer style={{
                backgroundColor: '#333',
                color: '#999',
                textAlign: 'center',
                padding: '20px',
                fontSize: '12px'
            }}>
                <p>© 2026 Nehal Rauf. Available for hire immediately.</p>
                <div style={{ marginTop: '8px' }}>
                    <a href="https://github.com/nehalrauf199-sudO" target="_blank" style={{ color: '#999', margin: '0 8px', textDecoration: 'none' }}>GitHub</a>
                    <a href="#home" style={{ color: '#999', margin: '0 8px', textDecoration: 'none' }}>Back to Top ↑</a>
                </div>
            </footer>
        </div>
    )
}