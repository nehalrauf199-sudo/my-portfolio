import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'ISTS Educational Website',
        description: 'Complete web platform for an educational institute with event management, user registration, and dynamic content management.',
        tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        github: 'https://github.com/nehalrauf199-sudO/ists-website',
        live: 'https://www.ists-institute.com',
        emoji: '🏫',
    },
];

export default function Projects() {
    return (
        <Layout>
            <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ fontSize: '36px', textAlign: 'center', color: '#1e293b', marginBottom: '15px' }}
                >
                    My Projects
                </motion.h1>
                <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '40px' }}>Here's what I've built</p>

                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                            backgroundColor: '#f8fafc',
                            borderRadius: '16px',
                            padding: '30px',
                            marginBottom: '30px',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '30px',
                            alignItems: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        }}
                    >
                        <div>
                            <h2 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '15px' }}>{project.title}</h2>
                            <p style={{ color: '#64748b', marginBottom: '20px' }}>{project.description}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                {project.tech.map((tech) => (
                                    <span key={tech} style={{ backgroundColor: '#e2e8f0', color: '#475569', padding: '4px 12px', borderRadius: '15px', fontSize: '13px' }}>{tech}</span>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                <a href={project.github} target="_blank" style={{ backgroundColor: '#1e293b', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none' }}>📂 View Code</a>
                                <a href={project.live} target="_blank" style={{ backgroundColor: '#667eea', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none' }}>🔗 Live Demo</a>
                            </div>
                        </div>
                        <div style={{
                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                            borderRadius: '12px',
                            padding: '40px',
                            textAlign: 'center',
                            color: 'white',
                            fontSize: '60px',
                            minHeight: '200px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}>
                            {project.emoji}
                            <p style={{ fontSize: '16px', marginTop: '15px' }}>Click Live Demo →</p>
                        </div>
                    </motion.div>
                ))}
            </section>
        </Layout>
    );
}