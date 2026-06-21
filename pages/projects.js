import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'ISTS Educational Website',
        description: 'Complete web platform for an educational institute with event management, user registration, and dynamic content.',
        tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        github: 'https://github.com/nehalrauf199-sudO/ists-website',
        live: 'https://www.ists-institute.com',
        emoji: '🏫',
    },
    // Add more projects here
];

export default function Projects() {
    return (
        <Layout>
            <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ fontSize: '36px', textAlign: 'center', marginBottom: '40px' }}
                >
                    My Projects
                </motion.h1>

                <div style={{ display: 'grid', gap: '30px' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                backgroundColor: '#f8f9fa',
                                borderRadius: '16px',
                                padding: '30px',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '30px',
                                alignItems: 'center',
                            }}
                        >
                            <div>
                                <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>{project.title}</h2>
                                <p style={{ color: '#666', marginBottom: '20px' }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                    {project.tech.map((tech) => (
                                        <span key={tech} style={{ backgroundColor: '#e0e7ff', color: '#667eea', padding: '4px 12px', borderRadius: '15px', fontSize: '14px' }}>{tech}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <a href={project.github} target="_blank" style={{ backgroundColor: '#333', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none' }}>📂 Code</a>
                                    <a href={project.live} target="_blank" style={{ backgroundColor: '#667eea', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none' }}>🔗 Live Demo</a>
                                </div>
                            </div>
                            <div style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '12px', padding: '40px', textAlign: 'center', color: 'white', fontSize: '60px' }}>
                                {project.emoji}
                                <p style={{ fontSize: '16px', marginTop: '20px' }}>Click Live Demo to visit →</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}