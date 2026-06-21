import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Projects() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <Head>
                <title>Projects | Nehal Rauf</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

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
                }}>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: scrolled ? '#333' : 'white',
                        margin: 0,
                    }}>
                        Nehal Rauf
                    </h1>
                    <div style={{ display: 'flex', gap: '25px' }}>
                        <Link href="/" style={{ color: scrolled ? '#333' : 'white', textDecoration: 'none', fontSize: '16px' }}>Home</Link>
                        <Link href="/projects" style={{ color: scrolled ? '#333' : 'white', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold', borderBottom: '2px solid #ffd700' }}>Projects</Link>
                        <Link href="/certificates" style={{ color: scrolled ? '#333' : 'white', textDecoration: 'none', fontSize: '16px' }}>Certificates</Link>
                        <Link href="/contact" style={{ color: scrolled ? '#333' : 'white', textDecoration: 'none', fontSize: '16px' }}>Contact</Link>
                    </div>
                </div>
            </nav>

            {/* Projects Content */}
            <section style={{
                minHeight: '100vh',
                padding: '100px 20px 60px',
                backgroundColor: '#f8fafc',
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '36px', textAlign: 'center', color: '#1e293b' }}>My Projects</h1>
                    <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>Here's what I've built</p>

                    <div style={{
                        backgroundColor: 'white',
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

                            {/* PROJECT IMAGE - YOUR project.png */}
                            <div style={{
                                backgroundColor: '#f1f5f9',
                                borderRadius: '12px',
                                padding: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '200px',
                                overflow: 'hidden',
                            }}>
                                <img
                                    src="/project.png"
                                    alt="ISTS Website Project"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '250px',
                                        objectFit: 'contain',
                                        borderRadius: '8px',
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `
                      <div style="
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        width: 100%;
                        height: 200px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-size: 60px;
                        border-radius: 12px;
                      ">
                        🏫
                      </div>
                    `;
                                    }}
                                />
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
            }}>
                <p>© 2026 Nehal Rauf. All rights reserved.</p>
            </footer>
        </div>
    );
}