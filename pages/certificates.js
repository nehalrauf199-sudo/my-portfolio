import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const certificates = [
    { name: 'Full-Stack Web Development', issuer: 'Example Institute', date: '2025', emoji: '📜' },
    // Add your certificates here
];

export default function Certificates() {
    return (
        <Layout>
            <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ fontSize: '36px', textAlign: 'center', marginBottom: '40px' }}
                >
                    My Certificates
                </motion.h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '16px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                border: '1px solid #eee',
                            }}
                        >
                            <div style={{ fontSize: '48px' }}>{cert.emoji}</div>
                            <h3 style={{ fontSize: '20px', margin: '15px 0 5px' }}>{cert.name}</h3>
                            <p style={{ color: '#666' }}>{cert.issuer}</p>
                            <p style={{ color: '#999', fontSize: '14px' }}>{cert.date}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}