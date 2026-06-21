import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
            {/* Hero Section */}
            <section style={{
                minHeight: '80vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px 20px',
                textAlign: 'center',
                color: 'white',
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
                        I'm <span style={{ color: '#ffd700' }}>Nehal Rauf</span>
                    </h1>
                    <h2 style={{ fontSize: '32px', color: '#ffd700', marginBottom: '20px' }}>
                        Full-Stack Developer
                    </h2>
                    <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto 30px' }}>
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
                    }}>
                        Hire Me Now
                    </Link>
                </motion.div>
            </section>

            {/* About Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                style={{ padding: '60px 20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}
            >
                <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>About Me</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
                    <div><h3>3+</h3><p>Years Experience</p></div>
                    <div><h3>10+</h3><p>Projects Done</p></div>
                    <div><h3>24/7</h3><p>Support</p></div>
                </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ padding: '60px 20px', backgroundColor: 'white', textAlign: 'center' }}
            >
                <h2 style={{ fontSize: '32px', marginBottom: '40px' }}>Technical Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
                    {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Python', 'HTML/CSS'].map((skill) => (
                        <div key={skill} style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '10px' }}>
                            ⚡ {skill}
                        </div>
                    ))}
                </div>
            </motion.section>
        </Layout>
    );
}