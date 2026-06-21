import Head from 'next/head'
import Link from 'next/link'
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
                        <Link href="/projects" style={{ color: scrolled ? '#333' : 'white', textDecoration: 'none', fontSize: '16px' }}>Projects</Link>
                        <Link href="/certificates" style={{ color: scrolled ? '#333' : 'white', textDecoration: 'none', fontSize: '16px' }}>Certificates</Link>
                        <Link href="/contact" style={{ color: scrolled ? '#333' : 'white', textDecoration: 'none', fontSize: '16px' }}>Contact</Link>
                    </div>
                </div>
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
                            Computer Science undergraduate with 3.84 GPA. I build fast, responsive websites.
                        </p>
                        <Link href="/contact" style={{
                            backgroundColor: '#ffd700',
                            color: '#333',
                            padding: '14px 30px',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            display: 'inline-block',
                        }}>
                            📞 Hire Me Now
                        </Link>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <div style={{
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
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section style={{
                padding: '60px 20px',
                backgroundColor: '#f8f9fa',
                textAlign: 'center',
            }}>
                <h2 style={{ fontSize: '32px', color: '#333' }}>Technical Skills</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                    gap: '15px',
                    maxWidth: '900px',
                    margin: '40px auto 0',
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

            {/* Footer */}
            <footer style={{
                backgroundColor: '#1e293b',
                color: '#94a3b8',
                textAlign: 'center',
                padding: '20px',
            }}>
                <p>© 2026 Nehal Rauf. Available for hire immediately.</p>
            </footer>
        </div>
    );
}