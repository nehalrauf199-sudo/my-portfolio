import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <Layout>
            <section style={{
                padding: '60px 20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        padding: '40px',
                        maxWidth: '600px',
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Get In Touch</h2>
                    <p style={{ color: '#666', marginBottom: '30px' }}>
                        Let's discuss your project! Reach out to me directly.
                    </p>

                    <a
                        href="https://wa.me/923288716168?text=Hi%20Nehal,%20I%20saw%20your%20portfolio"
                        target="_blank"
                        style={{
                            backgroundColor: '#25D366',
                            color: 'white',
                            padding: '16px 40px',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            marginBottom: '30px',
                            transition: 'transform 0.3s',
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        💬 Message Me on WhatsApp
                    </a>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                        <div>
                            <p style={{ color: '#666', fontSize: '14px' }}>📞 Call</p>
                            <a href="tel:923288716168" style={{ color: '#667eea', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>0328-8716168</a>
                        </div>
                        <div>
                            <p style={{ color: '#666', fontSize: '14px' }}>📧 Email</p>
                            <a href="mailto:nehalrauf199@gmail.com" style={{ color: '#667eea', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>nehalrauf199@gmail.com</a>
                        </div>
                        <div>
                            <p style={{ color: '#666', fontSize: '14px' }}>🔗 LinkedIn</p>
                            <a href="https://www.linkedin.com/in/nehall-rauf" target="_blank" style={{ color: '#667eea', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>Connect</a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </Layout>
    );
}