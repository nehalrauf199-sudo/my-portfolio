import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        if (!name || !email || !message) {
            setFormStatus('❌ Please fill all fields');
            return;
        }

        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0A%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
        window.location.href = `mailto:nehalrauf199@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        setFormStatus('✅ Opening your email app...');
        setTimeout(() => setFormStatus(''), 3000);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <Head>
                <title>Contact | Nehal Rauf</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <style jsx global>{`
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { background: #f8fafc; }
                @media (max-width: 768px) {
                    .contact-card { padding: 25px !important; }
                }
            `}</style>

            {/* Navigation */}
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
                <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '22px', fontWeight: 'bold' }}>
                    Nehal Rauf
                </a>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                    <a href="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
                    <a href="/certificates" style={{ color: 'white', textDecoration: 'none' }}>Certificates</a>
                    <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', borderBottom: '2px solid white' }}>Contact</a>
                </div>
            </nav>

            {/* Contact Section */}
            <section style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 20px 60px',
            }}>
                <div className="contact-card" style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    padding: '40px',
                    maxWidth: '600px',
                    width: '100%',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                }}>
                    <h2 style={{
                        fontSize: '32px',
                        color: '#1e293b',
                        textAlign: 'center',
                        marginBottom: '8px',
                    }}>Get In Touch</h2>
                    <p style={{
                        textAlign: 'center',
                        color: '#64748b',
                        marginBottom: '30px',
                    }}>I'll respond within 2 hours!</p>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Your Name *</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Your Message *</label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Tell me about your project..."
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    resize: 'vertical',
                                }}
                            />
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

                        <button
                            type="submit"
                            style={{
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
                            onMouseLeave={e => e.target.style.background = '#667eea'}
                        >
                            ✉️ Send Message
                        </button>
                    </form>

                    {/* Direct Contact Info */}
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

            {/* Footer */}
            <footer style={{
                backgroundColor: '#1e293b',
                color: '#94a3b8',
                textAlign: 'center',
                padding: '20px',
                fontSize: '14px',
            }}>
                <p>© 2026 Nehal Rauf. All rights reserved.</p>
            </footer>
        </div>
    );
}