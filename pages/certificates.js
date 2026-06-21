import Layout from '../components/Layout';

export default function Certificates() {
    return (
        <Layout>
            <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center' }}>My Certificates</h1>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginTop: '30px',
                }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}>
                        <h3>📜 Full-Stack Development</h3>
                        <p>Example Institute</p>
                        <p style={{ color: '#666' }}>2025</p>
                    </div>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '10px',
                        textAlign: 'center',
                    }}>
                        <h3>📜 React Advanced</h3>
                        <p>Example Institute</p>
                        <p style={{ color: '#666' }}>2025</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}