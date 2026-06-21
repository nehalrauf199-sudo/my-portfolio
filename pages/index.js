import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
    const [currentPage, setCurrentPage] = useState('home');

    // Navigation Component
    const Navbar = () => (
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
            <div>
                <button onClick={() => setCurrentPage('home')} style={navButtonStyle(currentPage === 'home')}>Home</button>
                <button onClick={() => setCurrentPage('projects')} style={navButtonStyle(currentPage === 'projects')}>Projects</button>
                <button onClick={() => setCurrentPage('certificates')} style={navButtonStyle(currentPage === 'certificates')}>Certificates</button>
                <button onClick={() => setCurrentPage('contact')} style={navButtonStyle(currentPage === 'contact')}>Contact</button>
            </div>
        </nav>
    );

    const navButtonStyle = (isActive) => ({
        background: isActive ? 'white' : 'transparent',
        color: isActive ? '#667eea' : 'white',
        border: 'none',
        padding: '8px 18px',
        margin: '0 5px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: isActive ? 'bold' : 'normal',
        transition: 'all 0.3s',
    });

    // Footer Component
    const Footer = () => (
        <footer style={{
            backgroundColor: '#1e293b',
            color: '#94a3b8',
            textAlign: 'center',
            padding: '20px',
            fontSize: '14px',
        }}>
            <p>© 2026 Nehal Rauf. Available for hire immediately.</p>
            <div style={{ marginTop: '10px' }}>
                <a href="https://github.com/nehalrauf199-sudO" target="_blank" style={{ color: '#94a3b8', margin: '0 10px', textDecoration: 'none' }}>GitHub</a>
                <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank" style={{ color: '#94a3b8', margin: '0 10px', textDecoration: 'none' }}>LinkedIn</a>
            </div>
        </footer>
    );

    // HOME PAGE
    const HomePage = () => (
        <div>
            {/* Hero Section */}
            <div style={{
                minHeight: '80vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 20px',
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
                    <button onClick={() => setCurrentPage('contact')} style={{
                        backgroundColor: '#ffd700',
                        color: '#333',
                        padding: '14px 40px',
                        borderRadius: '50px',
                        border: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'transform 0.3s',
                    }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
                        📞 Hire Me Now
                    </button>
                </div>
            </div>

            {/* About Section */}
            <div style={{
                padding: '60px 20px',
                backgroundColor: '#f8fafc',
                textAlign: 'center',
            }}>
                <h2 style={{ fontSize: '32px', color: '#1e293b', marginBottom: '40px' }}>About Me</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
                    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: '120px' }}>
                        <h3 style={{ fontSize: '32px', color: '#667eea', margin: 0 }}>3+</h3>
                        <p style={{ color: '#475569', margin: '5px 0 0' }}>Years Experience</p>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: '120px' }}>
                        <h3 style={{ fontSize: '32px', color: '#667eea', margin: 0 }}>10+</h3>
                        <p style={{ color: '#475569', margin: '5px 0 0' }}>Projects Done</p>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: '120px' }}>
                        <h3 style={{ fontSize: '32px', color: '#667eea', margin: 0 }}>24/7</h3>
                        <p style={{ color: '#475569', margin: '5px 0 0' }}>Support</p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div style={{
                padding: '60px 20px',
                backgroundColor: 'white',
                textAlign: 'center',
            }}>
                <h2 style={{ fontSize: '32px', color: '#1e293b', marginBottom: '40px' }}>Technical Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
                    {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Python', 'HTML/CSS'].map((skill) => (
                        <div key={skill} style={{
                            backgroundColor: '#f1f5f9',
                            padding: '18px',
                            borderRadius: '10px',
                            fontWeight: '600',
                            color: '#334155',
                        }}>
                            ⚡ {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // PROJECTS PAGE
    const ProjectsPage = () => (
        <div style={{ padding: '100px 20px 40px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '36px', textAlign: 'center', color: '#1e293b' }}>My Projects</h1>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>Here's what I've built</p>

            <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}>
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
        </div>
    );

    // CERTIFICATES PAGE
    const CertificatesPage = () => (
        <div style={{ padding: '100px 20px 40px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '36px', textAlign: 'center', color: '#1e293b' }}>My Certificates</h1>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>Certifications and achievements</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                {[
                    { name: 'Full-Stack Web Development', issuer: 'Example Institute', date: '2025', emoji: '📜' },
                    { name: 'React Advanced', issuer: 'Example Institute', date: '2025', emoji: '⚛️' },
                ].map((cert) => (
                    <div key={cert.name} style={{
                        backgroundColor: 'white',
                        padding: '30px',
                        borderRadius: '16px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        textAlign: 'center',
                        border: '1px solid #e2e8f0',
                    }}>
                        <div style={{ fontSize: '48px' }}>{cert.emoji}</div>
                        <h3 style={{ fontSize: '20px', color: '#1e293b', margin: '15px 0 5px' }}>{cert.name}</h3>
                        <p style={{ color: '#64748b' }}>{cert.issuer}</p>
                        <p style={{ color: '#94a3b8', fontSize: '14px' }}>{cert.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    // CONTACT PAGE
    const ContactPage = () => (
        <div style={{
            minHeight: '80vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '100px 20px 40px',
        }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '40px',
                maxWidth: '500px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            }}>
                <h2 style={{ fontSize: '32px', color: '#1e293b', marginBottom: '10px' }}>Get In Touch</h2>
                <p style={{ color: '#64748b', marginBottom: '30px' }}>Let's discuss your project!</p>

                <a href="https://wa.me/923288716168?text=Hi%20Nehal,%20I%20saw%20your%20portfolio" target="_blank" style={{
                    backgroundColor: '#25D366',
                    color: 'white',
                    padding: '16px 40px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginBottom: '30px',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                }}>
                    💬 Message Me on WhatsApp
                </a>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '25px',
                    flexWrap: 'wrap',
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '25px',
                }}>
                    <div>
                        <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>📞 Call</p>
                        <a href="tel:923288716168" style={{ color: '#667eea', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>0328-8716168</a>
                    </div>
                    <div>
                        <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>📧 Email</p>
                        <a href="mailto:nehalrauf199@gmail.com" style={{ color: '#667eea', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>nehalrauf199@gmail.com</a>
                    </div>
                    <div>
                        <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>🔗 LinkedIn</p>
                        <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank" style={{ color: '#667eea', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>Connect</a>
                    </div>
                </div>
            </div>
        </div>
    );

    // RENDER THE SELECTED PAGE
    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <Head>
                <title>Nehal Rauf | Full-Stack Developer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Hire Nehal Rauf - Professional Full-Stack Developer" />
            </Head>

            <Navbar />

            {currentPage === 'home' && <HomePage />}
            {currentPage === 'projects' && <ProjectsPage />}
            {currentPage === 'certificates' && <CertificatesPage />}
            {currentPage === 'contact' && <ContactPage />}

            <Footer />
        </div>
    );
}