import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Certificates', path: '/certificates' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
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
                <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea', textDecoration: 'none' }}>
                    Nehal Rauf
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '30px' }}>
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path} style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: router.pathname === item.path ? '#667eea' : '#333',
                            textDecoration: 'none',
                            borderBottom: router.pathname === item.path ? '2px solid #667eea' : 'none',
                            paddingBottom: '5px',
                        }}>
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Hamburger Menu for Mobile */}
                <button onClick={() => setIsOpen(!isOpen)} style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    fontSize: '28px',
                    cursor: 'pointer',
                    '@media (max-width: 768px)': { display: 'block' }
                }}>
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    padding: '20px',
                    backgroundColor: 'white',
                    borderTop: '1px solid #eee',
                }}>
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path} style={{
                            fontSize: '18px',
                            color: router.pathname === item.path ? '#667eea' : '#333',
                            textDecoration: 'none',
                        }} onClick={() => setIsOpen(false)}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}