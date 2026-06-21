import Layout from '../components/Layout';

export default function Contact() {
    return (
        <Layout>
            <div style={{
                minHeight: '70vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 20px',
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '15px',
                    maxWidth: '500px',
                    width: '100%',
                    textAlign: 'center',
                }}>
                    <h2>Get In Touch</h2>
                    <p style={{ color: '#666' }}>Message me directly:</p>
                    <a href="https://wa.me/923288716168" target="_blank" style={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        padding: '12px 30px',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        margin: '20px 0',
                        fontWeight: 'bold',
                    }}>💬 WhatsApp</a>
                    <div>
                        <p>📞 0328-8716168</p>
                        <p>📧 nehalrauf199@gmail.com</p>
                        <p>🔗 <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank">LinkedIn</a></p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}