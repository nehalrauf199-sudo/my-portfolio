import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <Head>
                <title>Nehal Rauf | Full-Stack Developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
                <meta name="description" content="Hire Nehal Rauf - Professional Full-Stack Developer" />
            </Head>

            {/* Navigation with Hamburger */}
            <nav style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                backgroundColor: '#667eea',
                padding: '15px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}>
                <h1 style={{ color: 'white', margin: 0, fontSize: '22px' }}>Nehal Rauf</h1>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '10px' }}>
                    <a href="#home" style={{ color: 'white', textDecoration: 'none', padding: '8px 15px', borderRadius: '20px' }}>Home</a>
                    <a href="#projects" style={{ color: 'white', textDecoration: 'none', padding: '8px 15px', borderRadius: '20px' }}>Projects</a>
                    <a href="#certificates" style={{ color: 'white', textDecoration: 'none', padding: '8px 15px', borderRadius: '20px' }}>Certificates</a>
                    <a href="#contact" style={{ color: 'white', textDecoration: 'none', padding: '8px 15px', borderRadius: '20px' }}>Contact</a>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '28px',
                        cursor: 'pointer',
                    }}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: '60px',
                    left: 0,
                    right: 0,
                    backgroundColor: '#667eea',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    zIndex: 999,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                }}>
                    <a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', padding: '10px' }} onClick={() => setIsMenuOpen(false)}>🏠 Home</a>
                    <a href="#projects" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', padding: '10px' }} onClick={() => setIsMenuOpen(false)}>📁 Projects</a>
                    <a href="#certificates" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', padding: '10px' }} onClick={() => setIsMenuOpen(false)}>📜 Certificates</a>
                    <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', padding: '10px' }} onClick={() => setIsMenuOpen(false)}>📞 Contact</a>
                </div>
            )}

            {/* HOME SECTION */}
            <section id="home" style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px 40px',
                textAlign: 'center',
                color: 'white',
            }}>
                <div>
                    {/* Profile Photo */}
                    <div style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        margin: '0 auto 25px',
                        border: '4px solid #ffd700',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
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
                    <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>
                        I'm <span style={{ color: '#ffd700' }}>Nehal Rauf</span>
                    </h1>
                    <h2 style={{ fontSize: '28px', color: '#ffd700', marginBottom: '15px' }}>
                        Full-Stack Developer
                    </h2>
                    <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 25px', color: '#f0f0f0' }}>
                        Computer Science undergraduate with 3.84 GPA. I build fast, responsive websites.
                    </p>
                    <a href="#contact" style={{
                        backgroundColor: '#ffd700',
                        color: '#333',
                        padding: '14px 40px',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        display: 'inline-block',
                    }}>
                        📞 Hire Me Now
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section style={{
                padding: '60px 20px',
                backgroundColor: '#f8fafc',
                textAlign: 'center',
            }}>
                <h2 style={{ fontSize: '32px', color: '#1e293b', marginBottom: '40px' }}>About Me</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: '120px' }}>
                        <h3 style={{ fontSize: '32px', color: '#667eea', margin: 0 }}>3+</h3>
                        <p style={{ color: '#475569', margin: '5px 0 0' }}>Years</p>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: '120px' }}>
                        <h3 style={{ fontSize: '32px', color: '#667eea', margin: 0 }}>10+</h3>
                        <p style={{ color: '#475569', margin: '5px 0 0' }}>Projects</p>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: '120px' }}>
                        <h3 style={{ fontSize: '32px', color: '#667eea', margin: 0 }}>24/7</h3>
                        <p style={{ color: '#475569', margin: '5px 0 0' }}>Support</p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section style={{
                padding: '60px 20px',
                backgroundColor: 'white',
                textAlign: 'center',
            }}>
                <h2 style={{ fontSize: '32px', color: '#1e293b', marginBottom: '40px' }}>Technical Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px', maxWidth: '900px', margin: '0 auto' }}>
                    {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Python', 'HTML/CSS'].map((skill) => (
                        <div key={skill} style={{
                            backgroundColor: '#f1f5f9',
                            padding: '15px',
                            borderRadius: '10px',
                            fontWeight: '600',
                            color: '#334155',
                        }}>
                            ⚡ {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" style={{
                padding: '60px 20px',
                backgroundColor: '#f8fafc',
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '32px', textAlign: 'center', color: '#1e293b' }}>My Projects</h2>
                    <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>Here's what I've built</p>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        padding: '30px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    }}>
                        <h3 style={{ fontSize: '24px', color: '#1e293b' }}>ISTS Educational Website</h3>
                        <p style={{ color: '#64748b', marginBottom: '15px' }}>
                            Complete web platform for an educational institute with event management, user registration, and dynamic content.
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
                </div>
            </section>

            {/* CERTIFICATES SECTION */}
            <section id="certificates" style={{
                padding: '60px 20px',
                backgroundColor: 'white',
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '32px', textAlign: 'center', color: '#1e293b' }}>My Certificates</h2>
                    <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>Certifications and achievements</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                        {[
                            { name: 'Full-Stack Web Development', issuer: 'Example Institute', date: '2025', emoji: '📜' },
                            { name: 'React Advanced', issuer: 'Example Institute', date: '2025', emoji: '⚛️' },
                        ].map((cert) => (
                            <div key={cert.name} style={{
                                backgroundColor: '#f8fafc',
                                padding: '25px',
                                borderRadius: '16px',
                                textAlign: 'center',
                                border: '1px solid #e2e8f0',
                            }}>
                                <div style={{ fontSize: '48px' }}>{cert.emoji}</div>
                                <h3 style={{ fontSize: '18px', color: '#1e293b', margin: '10px 0 5px' }}>{cert.name}</h3>
                                <p style={{ color: '#64748b' }}>{cert.issuer}</p>
                                <p style={{ color: '#94a3b8', fontSize: '14px' }}>{cert.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" style={{
                padding: '60px 20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}>
                <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        padding: '40px',
                    }}>
                        <h2 style={{ fontSize: '28px', color: '#1e293b', marginBottom: '10px' }}>Get In Touch</h2>
                        <p style={{ color: '#64748b', marginBottom: '25px' }}>Let's discuss your project!</p>

                        <a href="https://wa.me/923288716168?text=Hi%20Nehal,%20I%20saw%20your%20portfolio" target="_blank" style={{
                            backgroundColor: '#25D366',
                            color: 'white',
                            padding: '14px 30px',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            marginBottom: '25px',
                            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                        }}>
                            💬 Message Me on WhatsApp
                        </a>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                            flexWrap: 'wrap',
                            borderTop: '1px solid #e2e8f0',
                            paddingTop: '20px',
                        }}>
                            <div>
                                <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>📞 Call</p>
                                <a href="tel:923288716168" style={{ color: '#667eea', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>0328-8716168</a>
                            </div>
                            <div>
                                <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>📧 Email</p>
                                <a href="mailto:nehalrauf199@gmail.com" style={{ color: '#667eea', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>nehalrauf199@gmail.com</a>
                            </div>
                            <div>
                                <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>🔗 LinkedIn</p>
                                <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank" style={{ color: '#667eea', fontSize: '16px', fontWeight: 'bold', textDecoration: 'none' }}>Connect</a>
                            </div>
                        </div>
                    </div>
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
            </footer>

            {/* Mobile Responsive Styles */}
            <style jsx>{`
        @media (max-width: 768px) {
          nav > div:last-child {
            display: none !important;
          }
          nav > button {
            display: block !important;
          }
          h1 {
            font-size: 32px !important;
          }
          h2 {
            font-size: 22px !important;
          }
          .stats-container {
            gap: 15px !important;
          }
        }
        @media (min-width: 769px) {
          nav > button {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
        </div>
    );
}