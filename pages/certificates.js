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
                    style={{ fontSize: '36px', textAlign: 'center', color: '#1e293b', marginBottom: '15px' }}
                >
                    My Certificates
                </motion.h1>
                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>Certifications and achievements</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '16px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                textAlign: 'center',
                                border: '1px solid #e2e8f0',
                            }}
                        >
                            <div style={{ fontSize: '48px' }}>{cert.emoji}</div>
                            <h3 style={{ fontSize: '20px', color: '#1e293b', margin: '15px 0 5px' }}>{cert.name}</h3>
                            <p style={{ color: '#64748b' }}>{cert.issuer}</p>
                            <p style={{ color: '#94a3b8', fontSize: '14px' }}>{cert.date}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        textAlign: 'center',
                        marginTop: '40px',
                        padding: '30px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '12px',
                    }}
                >
                    <p style={{ color: '#64748b' }}>📸 You can add images of your certificates here</p>
                    <p style={{ color: '#94a3b8', fontSize: '14px' }}>Place your certificate images in the <code>/public</code> folder</p>
                </motion.div>
            </section>
        </Layout>
    );
}