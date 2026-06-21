import Layout from '../components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <Layout>
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                    minHeight: '80vh',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '60px 20px',
                    textAlign: 'center',
                    color: 'white',
                }}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Profile Photo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            margin: '0 auto 30px',
                            border: '4px solid #ffd700',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        }}
                    >
                        <img
                            src="/neha pro.jpeg"
                            alt="Nehal Rauf"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </motion.div>

                    <h1 style={{ fontSize: '48px', marginBottom: '15px' }}>
                        I'm <span style={{ color: '#ffd700' }}>Nehal Rauf</span>
                    </h1>
                    <h2 style={{ fontSize: '28px', color: '#ffd700', marginBottom: '20px' }}>
                        Full-Stack Developer
                    </h2>
                    <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 30px', color: '#f0f0f0' }}>
                        Computer Science undergraduate with 3.84 GPA. I build fast, responsive websites.
                    </p>
                    <Link href="/contact" style={{
                        backgroundColor: '#ffd700',
                        color: '#333',
                        padding: '14px 40px',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        display: 'inline-block',
                        transition: 'transform 0.3s',
                    }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}>
                        📞 Hire Me Now
                    </Link>
                </motion.div>
            </motion.section>

            {/* About Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                    padding: '60px 20px',
                    backgroundColor: '#f8fafc',
                    textAlign: 'center'
                }}
            >
                <h2 style={{ fontSize: '32px', color: '#1e293b', marginBottom: '40px' }}>About Me</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
                    <motion.div whileHover={{ scale: 1.05 }} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: '120px' }}>
                        <h3 style={{ fontSize: '32px', color: '#667eea' }}>3+</h3>
                        <p style={{ color: '#475569' }}>Years Experience</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: '120px' }}>
                        <h3 style={{ fontSize: '32px', color: '#667eea' }}>10+</h3>
                        <p style={{ color: '#475569' }}>Projects Done</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: '120px' }}>
                        <h3 style={{ fontSize: '32px', color: '#667eea' }}>24/7</h3>
                        <p style={{ color: '#475569' }}>Support</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    padding: '60px 20px',
                    backgroundColor: 'white',
                    textAlign: 'center'
                }}
            >
                <h2 style={{ fontSize: '32px', color: '#1e293b', marginBottom: '40px' }}>Technical Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
                    {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Python', 'HTML/CSS'].map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                backgroundColor: '#f1f5f9',
                                padding: '20px',
                                borderRadius: '12px',
                                fontWeight: '600',
                                color: '#334155',
                                cursor: 'pointer',
                            }}
                        >
                            ⚡ {skill}
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </Layout>
    );
}