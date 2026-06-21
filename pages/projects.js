import Layout from '../components/Layout';

export default function Projects() {
    return (
        <Layout>
            <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center' }}>My Projects</h1>
                <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '30px',
                    borderRadius: '10px',
                    marginTop: '30px',
                }}>
                    <h2>ISTS Educational Website</h2>
                    <p>Complete web platform for an educational institute.</p>
                    <p>
                        <strong>Tech:</strong> Next.js, React, Node.js, MongoDB
                    </p>
                    <a href="https://www.ists-institute.com" target="_blank" style={{
                        backgroundColor: '#667eea',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        marginTop: '10px',
                    }}>View Live</a>
                </div>
            </div>
        </Layout>
    );
}