import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <div style={{
                minHeight: '70vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 20px',
                textAlign: 'center',
                color: 'white',
            }}>
                <div>
                    <h1 style={{ fontSize: '48px' }}>I'm <span style={{ color: '#ffd700' }}>Nehal Rauf</span></h1>
                    <h2 style={{ fontSize: '28px', color: '#ffd700' }}>Full-Stack Developer</h2>
                    <p style={{ fontSize: '18px', maxWidth: '500px', margin: '20px auto' }}>
                        Computer Science undergraduate with 3.84 GPA.
                    </p>
                    <a href="/contact" style={{
                        backgroundColor: '#ffd700',
                        color: '#333',
                        padding: '12px 30px',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontWeight: 'bold',
                    }}>Hire Me</a>
                </div>
            </div>
        </Layout>
    );
}