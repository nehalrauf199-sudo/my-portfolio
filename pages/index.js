import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
    const [currentPage, setCurrentPage] = useState('home')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [formStatus, setFormStatus] = useState('')
    const [selectedCert, setSelectedCert] = useState(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const message = e.target.message.value

        if (!name || !email || !message) {
            setFormStatus('❌ Please fill all fields')
            return
        }

        const subject = `Portfolio Contact from ${name}`
        const body = `Name: ${name}%0A%0AEmail: ${email}%0A%0AMessage:%0A${message}`
        window.location.href = `mailto:nehalrauf199@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`

        setFormStatus('✅ Opening your email app...')
        setTimeout(() => setFormStatus(''), 3000)
    }

    // Certificates data
    const certificates = [
        {
            id: 1,
            title: 'Certificate of Appreciation | Head of Finance',
            description: `Awarded by University of Education, Lahore - Attock Campus for valuable contribution as Head of Finance in the Organizing Team of Annual Gathering 2026. Managed financial planning, budgeting, and expense tracking for a multi-department event involving Computer Science, Zoology, Chemistry, Physics, and Mathematics. Dated: 21st April 2026.`,
            image: '/appreciation.png',
            date: '21st April 2026',
            issuer: 'University of Education, Lahore - Attock Campus',
        },
        {
            id: 2,
            title: 'RACSIT 2024 – International Conference Participant',
            description: `Participated in the 2nd International Conference on Recent Advances in Computer Science and Information Technology (RACSIT 2024), held at the University of Education, Lahore. Engaged with research presentations and discussions on emerging technologies, innovation, and current developments in computer science and information technology.`,
            image: '/racsit.png',
            date: '2024',
            issuer: 'University of Education, Lahore',
        },
    ];

    // Navigation Component
    const Navbar = () => (
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
            }}>
                <h1 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: scrolled ? '#333' : 'white',
                    margin: 0,
                    cursor: 'pointer',
                }} onClick={() => setCurrentPage('home')}>
                    Nehal Rauf
                </h1>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '25px' }}>
                    <button onClick={() => setCurrentPage('home')} style={navButtonStyle(currentPage === 'home', scrolled)}>Home</button>
                    <button onClick={() => setCurrentPage('projects')} style={navButtonStyle(currentPage === 'projects', scrolled)}>Projects</button>
                    <button onClick={() => setCurrentPage('certificates')} style={navButtonStyle(currentPage === 'certificates', scrolled)}>Certificates</button>
                    <button onClick={() => setCurrentPage('contact')} style={navButtonStyle(currentPage === 'contact', scrolled)}>Contact</button>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        fontSize: '28px',
                        cursor: 'pointer',
                        color: scrolled ? '#333' : 'white',
                    }}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    borderTop: '1px solid #eee',
                    position: 'absolute',
                    top: '65px',
                    left: 0,
                    right: 0,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}>
                    <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} style={mobileButtonStyle(currentPage === 'home')}>🏠 Home</button>
                    <button onClick={() => { setCurrentPage('projects'); setIsMenuOpen(false); }} style={mobileButtonStyle(currentPage === 'projects')}>📁 Projects</button>
                    <button onClick={() => { setCurrentPage('certificates'); setIsMenuOpen(false); }} style={mobileButtonStyle(currentPage === 'certificates')}>📜 Certificates</button>
                    <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} style={mobileButtonStyle(currentPage === 'contact')}>📞 Contact</button>
                </div>
            )}
        </nav>
    );

    const navButtonStyle = (isActive, scrolled) => ({
        background: isActive ? (scrolled ? '#667eea' : 'white') : 'transparent',
        color: isActive ? (scrolled ? 'white' : '#667eea') : (scrolled ? '#333' : 'white'),
        border: 'none',
        padding: '8px 20px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: isActive ? 'bold' : 'normal',
        transition: 'all 0.3s',
    });

    const mobileButtonStyle = (isActive) => ({
        background: isActive ? '#667eea' : 'transparent',
        color: isActive ? 'white' : '#333',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
        fontSize: '18px',
        fontWeight: isActive ? 'bold' : 'normal',
        textAlign: 'left',
        width: '100%',
    });

    // HOME PAGE
    const HomePage = () => (
        <div>
            {/* Hero Section */}
            <section style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 20px 60px',
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '50px',
                    alignItems: 'center',
                }}>
                    <div>
                        <h1 style={{
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
                        <p style={{
                            fontSize: '18px',
                            color: '#f0f0f0',
                            lineHeight: '1.5',
                            marginBottom: '25px',
                        }}>
                            Computer Science undergraduate with 3.84 GPA. I build fast, responsive websites
                            that get results. Available for freelance and full-time opportunities.
                        </p>

                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <button onClick={() => setCurrentPage('contact')} style={{
                                backgroundColor: '#ffd700',
                                color: '#333',
                                padding: '14px 30px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'transform 0.3s',
                            }}
                                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
                                📞 Hire Me Now
                            </button>
                            <button onClick={() => setCurrentPage('projects')} style={{
                                backgroundColor: 'transparent',
                                border: '2px solid white',
                                color: 'white',
                                padding: '14px 30px',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                cursor: 'pointer',
                            }}>
                                View Work →
                            </button>
                        </div>

                        <div style={{
                            display: 'flex',
                            gap: '30px',
                            marginTop: '40px',
                            justifyContent: 'flex-start',
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
                        <div style={{
                            width: '300px',
                            height: '300px',
                            margin: '0 auto',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #ffd700 0%, #ff9800 100%)',
                            padding: '8px',
                            animation: 'float 3s ease-in-out infinite',
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
                <div style={{
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
                <div style={{
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
        </div>
    );

    // PROJECTS PAGE
    const ProjectsPage = () => (
        <div style={{ padding: '100px 20px 60px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '36px', textAlign: 'center', color: '#1e293b' }}>My Projects</h1>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>Here's what I've built</p>

            <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '24px', color: '#1e293b' }}>ISTS Educational Website</h2>
                        <p style={{ color: '#64748b', marginBottom: '15px' }}>
                            Complete web platform for an educational institute with event management, user registration, and dynamic content management.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                            {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'].map((tech) => (
                                <span key={tech} style={{ backgroundColor: '#e2e8f0', color: '#475569', padding: '4px 12px', borderRadius: '15px', fontSize: '13px' }}>{tech}</span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <a href="https://github.com/nehalrauf199-sudO/ists-website" target="_blank" style={{ backgroundColor: '#1e293b', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none' }}>📂 View Code</a>
                            <a href="https://www.ists-institute.com" target="_blank" style={{ backgroundColor: '#667eea', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none' }}>🔗 Live Demo</a>
                        </div>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '12px',
                        padding: '40px',
                        textAlign: 'center',
                        color: 'white',
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                        <p style={{ fontSize: '60px', margin: 0 }}>🏫</p>
                        <p style={{ fontSize: '16px', marginTop: '15px' }}>Click Live Demo →</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // CERTIFICATES PAGE
    const CertificatesPage = () => (
        <div style={{ padding: '100px 20px 60px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '36px', textAlign: 'center', color: '#1e293b' }}>My Certificates</h1>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '50px' }}>Click on any certificate to view it in detail</p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '30px',
            }}>
                {certificates.map((cert) => (
                    <div
                        key={cert.id}
                        onClick={() => setSelectedCert(cert)}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            cursor: 'pointer',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            border: '1px solid #e2e8f0',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                        }}
                    >
                        <div style={{
                            height: '200px',
                            backgroundColor: '#e2e8f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}>
                            <img
                                src={cert.image}
                                alt={cert.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    padding: '10px',
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `
                    <div style="
                      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      width: 100%;
                      height: 100%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      color: white;
                      font-size: 40px;
                    ">
                      📄 Certificate
                    </div>
                  `;
                                }}
                            />
                        </div>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '8px', lineHeight: '1.3' }}>
                                {cert.title}
                            </h3>
                            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '5px' }}>
                                {cert.issuer}
                            </p>
                            <p style={{ color: '#94a3b8', fontSize: '12px' }}>
                                {cert.date}
                            </p>
                            <div style={{
                                display: 'inline-block',
                                marginTop: '12px',
                                color: '#667eea',
                                fontSize: '14px',
                                fontWeight: '600',
                                backgroundColor: '#e0e7ff',
                                padding: '6px 16px',
                                borderRadius: '20px',
                            }}>
                                Click to view →
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedCert && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                    padding: '20px',
                }} onClick={() => setSelectedCert(null)}>
                    <div style={{
                        background: 'white',
                        borderRadius: '20px',
                        maxWidth: '650px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        padding: '30px',
                        position: 'relative',
                    }} onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setSelectedCert(null)} style={{
                            position: 'absolute',
                            top: '15px',
                            right: '20px',
                            fontSize: '30px',
                            cursor: 'pointer',
                            color: '#666',
                            background: 'none',
                            border: 'none',
                            transition: 'transform 0.3s',
                        }}
                            onMouseEnter={e => e.target.style.transform = 'rotate(90deg)'}
                            onMouseLeave={e => e.target.style.transform = 'rotate(0)'}>
                            ✕
                        </button>
                        <h2 style={{ fontSize: '22px', color: '#1e293b', marginBottom: '15px', paddingRight: '30px', lineHeight: '1.3' }}>
                            {selectedCert.title}
                        </h2>
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                border: '1px solid #e2e8f0',
                                maxHeight: '400px',
                                objectFit: 'contain',
                                marginBottom: '20px',
                            }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML += `
                  <div style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 12px;
                    padding: 40px;
                    text-align: center;
                    color: white;
                    margin-bottom: 20px;
                  ">
                    <p style="font-size: 60px; margin: 0;">📄</p>
                    <p style="margin-top: 10px;">Certificate Image</p>
                  </div>
                `;
                            }}
                        />
                        <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '15px', whiteSpace: 'pre-wrap' }}>
                                {selectedCert.description}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
                                <span style={{ color: '#64748b', fontSize: '14px' }}><strong>Issuer:</strong> {selectedCert.issuer}</span>
                                <span style={{ color: '#64748b', fontSize: '14px' }}><strong>Date:</strong> {selectedCert.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    // CONTACT PAGE
    const ContactPage = () => (
        <section style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '100px 20px 60px',
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '40px',
                maxWidth: '600px',
                width: '100%',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            }}>
                <h2 style={{ fontSize: '32px', color: '#1e293b', textAlign: 'center', marginBottom: '8px' }}>Get In Touch</h2>
                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '30px' }}>I'll respond within 2 hours!</p>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Your Name *</label>
                        <input type="text" name="name" placeholder="John Doe" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Email Address *</label>
                        <input type="email" name="email" placeholder="you@example.com" required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Your Message *</label>
                        <textarea name="message" rows="4" placeholder="Tell me about your project..." required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', resize: 'vertical' }} />
                    </div>

                    {formStatus && (
                        <p style={{
                            marginBottom: '15px',
                            padding: '10px',
                            backgroundColor: formStatus.includes('✅') ? '#d4edda' : '#f8d7da',
                            color: formStatus.includes('✅') ? '#155724' : '#721c24',
                            borderRadius: '8px',
                            fontSize: '14px',
                            textAlign: 'center',
                        }}>
                            {formStatus}
                        </p>
                    )}

                    <button type="submit" style={{
                        backgroundColor: '#667eea',
                        color: 'white',
                        width: '100%',
                        padding: '14px',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background 0.3s',
                    }}
                        onMouseEnter={e => e.target.style.background = '#764ba2'}
                        onMouseLeave={e => e.target.style.background = '#667eea'}>
                        ✉️ Send Message
                    </button>
                </form>

                <div style={{
                    marginTop: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '25px',
                    flexWrap: 'wrap',
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '20px',
                }}>
                    <div>
                        <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>📞 Call/WhatsApp</p>
                        <a href="tel:923288716168" style={{ color: '#667eea', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>0328-8716168</a>
                    </div>
                    <div>
                        <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>📧 Email</p>
                        <a href="mailto:nehalrauf199@gmail.com" style={{ color: '#667eea', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>nehalrauf199@gmail.com</a>
                    </div>
                    <div>
                        <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>🔗 LinkedIn</p>
                        <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank" style={{ color: '#667eea', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>Connect</a>
                    </div>
                </div>
            </div>
        </section>
    );

    // Footer
    const Footer = () => (
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
                <button onClick={() => setCurrentPage('home')} style={{ color: '#94a3b8', margin: '0 8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>Back to Top ↑</button>
            </div>
        </footer>
    );

    // RENDER
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
        @media (max-width: 768px) {
          nav > div > div:last-child {
            display: none !important;
          }
          nav > div > button {
            display: block !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          .profile-image-container {
            width: 200px !important;
            height: 200px !important;
          }
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) {
          nav > div > button {
            display: none !important;
          }
        }
      `}</style>

            <Navbar />

            {currentPage === 'home' && <HomePage />}
            {currentPage === 'projects' && <ProjectsPage />}
            {currentPage === 'certificates' && <CertificatesPage />}
            {currentPage === 'contact' && <ContactPage />}

            <Footer />
        </div>
    );
}