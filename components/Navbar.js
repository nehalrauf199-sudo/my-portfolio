import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();

    const navItems = [
        { name: '🏠 Home', path: '/' },
        { name: '📁 Projects', path: '/projects' },
        { name: '📜 Certificates', path: '/certificates' },
        { name: '📞 Contact', path: '/contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
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
                <Link href="/" style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textDecoration: 'none',
                }}>
                    Nehal Rauf
                </Link>

                <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path} style={{
                            fontSize: '16px',
                            fontWeight: '500',
                            color: router.pathname === item.path ? '#667eea' : '#475569',
                            textDecoration: 'none',
                            borderBottom: router.pathname === item.path ? '3px solid #667eea' : 'none',
                            paddingBottom: '5px',
                            transition: 'color 0.3s',
                        }}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}