import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <nav style={{
                backgroundColor: '#667eea',
                padding: '15px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <h1 style={{ color: 'white', margin: 0 }}>Nehal Rauf</h1>
                <div>
                    <Link href="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</Link>
                    <Link href="/projects" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Projects</Link>
                    <Link href="/certificates" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Certificates</Link>
                    <Link href="/contact" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Contact</Link>
                </div>
            </nav>
            <main>{children}</main>
            <footer style={{
                backgroundColor: '#333',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
                marginTop: '40px',
            }}>
                <p>© 2026 Nehal Rauf</p>
            </footer>
        </div>
    );
}