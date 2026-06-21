import Navbar from './Navbar';
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', paddingTop: '80px' }}>
            <Navbar />
            <main>{children}</main>
            <footer style={{
                backgroundColor: '#1e293b',
                color: '#94a3b8',
                textAlign: 'center',
                padding: '30px 20px',
                fontSize: '14px',
                marginTop: '40px',
            }}>
                <p>© 2026 Nehal Rauf. Available for hire immediately.</p>
                <div style={{ marginTop: '10px' }}>
                    <a href="https://github.com/nehalrauf199-sudO" target="_blank" style={{ color: '#94a3b8', margin: '0 10px', textDecoration: 'none' }}>GitHub</a>
                    <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank" style={{ color: '#94a3b8', margin: '0 10px', textDecoration: 'none' }}>LinkedIn</a>
                    <a href="/" style={{ color: '#94a3b8', margin: '0 10px', textDecoration: 'none' }}>Home</a>
                </div>
            </footer>
        </div>
    );
}