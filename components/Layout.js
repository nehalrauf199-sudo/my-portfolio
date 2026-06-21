import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', paddingTop: '80px' }}>
            <Navbar />
            <main>{children}</main>
            <footer style={{
                backgroundColor: '#333',
                color: '#999',
                textAlign: 'center',
                padding: '20px',
                fontSize: '12px',
                marginTop: '40px',
            }}>
                <p>© 2026 Nehal Rauf. Available for hire immediately.</p>
                <div style={{ marginTop: '8px' }}>
                    <a href="https://github.com/nehalrauf199-sudO" target="_blank" style={{ color: '#999', margin: '0 8px', textDecoration: 'none' }}>GitHub</a>
                    <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank" style={{ color: '#999', margin: '0 8px', textDecoration: 'none' }}>LinkedIn</a>
                    <a href="/" style={{ color: '#999', margin: '0 8px', textDecoration: 'none' }}>Back to Top ↑</a>
                </div>
            </footer>
        </div>
    );
}