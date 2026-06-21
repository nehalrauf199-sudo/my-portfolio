import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Certificates() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [selectedCert, setSelectedCert] = useState(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
    ]

    const openModal = (cert) => setSelectedCert(cert)
    const closeModal = () => setSelectedCert(null)

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <Head>
                <title>Certificates | Nehal Rauf</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
            </Head>

            <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          background: white;
          border-radius: 20px;
          max-width: 650px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 30px;
          position: relative;
          animation: slideUp 0.3s ease;
        }
        .modal-content img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          max-height: 400px;
          object-fit: contain;
        }
        .close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 30px;
          cursor: pointer;
          color: #666;
          background: none;
          border: none;
          transition: transform 0.3s;
        }
        .close-btn:hover {
          transform: rotate(90deg);
          color: #333;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hamburger-btn { display: block !important; }
          .cert-grid { grid-template-columns: 1fr !important; }
          .modal-content { padding: 20px !important; margin: 10px !important; }
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

                    <div className="desktop-menu" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <Link href="/" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Home</Link>
                        <Link href="/projects" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Projects</Link>
                        <Link href="/certificates" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white', borderBottom: '2px solid #ffd700' }}>Certificates</Link>
                        <Link href="/contact" style={{ fontSize: '16px', fontWeight: '500', textDecoration: 'none', color: scrolled ? '#333' : 'white' }}>Contact</Link>
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
                            color: scrolled ? '#333' : 'white',
                        }}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

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

            {/* Certificates Content */}
            <div style={{
                padding: '100px 20px 60px',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                <h1 style={{
                    fontSize: '36px',
                    textAlign: 'center',
                    color: '#1e293b',
                    marginBottom: '10px',
                }}>
                    My Certificates
                </h1>
                <p style={{
                    textAlign: 'center',
                    color: '#64748b',
                    marginBottom: '50px',
                    fontSize: '16px',
                }}>
                    Click on any certificate to view it in detail
                </p>

                <div className="cert-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '30px',
                }}>
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            onClick={() => openModal(cert)}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                cursor: 'pointer',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                border: '2px solid transparent',
                                backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #ffd700, #667eea, #764ba2)',
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'padding-box, border-box',
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
                                <h3 style={{
                                    fontSize: '18px',
                                    color: '#1e293b',
                                    marginBottom: '8px',
                                    lineHeight: '1.3',
                                }}>
                                    {cert.title}
                                </h3>
                                <p style={{
                                    color: '#64748b',
                                    fontSize: '14px',
                                    marginBottom: '5px',
                                }}>
                                    {cert.issuer}
                                </p>
                                <p style={{
                                    color: '#94a3b8',
                                    fontSize: '12px',
                                }}>
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
            </div>

            {/* Modal */}
            {selectedCert && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>✕</button>
                        <h2 style={{
                            fontSize: '22px',
                            color: '#1e293b',
                            marginBottom: '15px',
                            paddingRight: '30px',
                            lineHeight: '1.3',
                        }}>
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
                        <div style={{
                            backgroundColor: '#f8fafc',
                            padding: '20px',
                            borderRadius: '12px',
                        }}>
                            <p style={{
                                color: '#475569',
                                fontSize: '15px',
                                lineHeight: '1.7',
                                marginBottom: '15px',
                                whiteSpace: 'pre-wrap',
                            }}>
                                {selectedCert.description}
                            </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '10px',
                                borderTop: '1px solid #e2e8f0',
                                paddingTop: '12px',
                            }}>
                                <span style={{ color: '#64748b', fontSize: '14px' }}>
                                    <strong>Issuer:</strong> {selectedCert.issuer}
                                </span>
                                <span style={{ color: '#64748b', fontSize: '14px' }}>
                                    <strong>Date:</strong> {selectedCert.date}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer style={{
                backgroundColor: '#1e293b',
                color: '#94a3b8',
                textAlign: 'center',
                padding: '20px',
                fontSize: '14px',
                marginTop: '40px',
            }}>
                <p>© 2026 Nehal Rauf. All rights reserved.</p>
                <div style={{ marginTop: '8px' }}>
                    <a href="https://github.com/nehalrauf199-sudO" target="_blank" style={{ color: '#94a3b8', margin: '0 8px', textDecoration: 'none' }}>GitHub</a>
                    <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank" style={{ color: '#94a3b8', margin: '0 8px', textDecoration: 'none' }}>LinkedIn</a>
                    <Link href="/" style={{ color: '#94a3b8', margin: '0 8px', textDecoration: 'none' }}>Home</Link>
                </div>
            </footer>
        </div>
    )
}