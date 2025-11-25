import React from 'react';
import heroImage from '../assets/hero-illustration.png';

const Hero = () => {
    return (
        <section style={styles.hero}>
            <div className="container" style={styles.container}>
                <div style={styles.content}>
                    <h1 style={styles.title}>JOBPAL</h1>
                    <p style={styles.subtitle}>
                        Expertly designed and developed in Ireland, delivers an elite CMMS solutions.
                        <br /><br />
                        Empowering organisations worldwide to achieve unparalleled excellence in maintenance and asset management.
                    </p>
                    <div style={styles.ctaGroup}>
                        <button className="btn btn-primary">Book a Demo</button>
                        <div style={styles.contactInfo}>
                            <p><strong>Book a Demo</strong></p>
                            <p>Phone: +353 1663 6999</p>
                            <p>Email: <a href="mailto:info@rgc.ie" style={{ textDecoration: 'underline' }}>info@rgc.ie</a></p>
                        </div>
                    </div>
                </div>
                <div style={styles.imagePlaceholder}>
                    <img src={heroImage} alt="JobPal Dashboard" style={styles.image} />
                </div>
            </div>
        </section>
    );
};

const styles = {
    hero: {
        backgroundColor: 'var(--light-bg)',
        padding: '6rem 0',
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: '4rem',
        flexWrap: 'wrap',
    },
    content: {
        flex: 1,
        minWidth: '300px',
    },
    title: {
        fontSize: '4rem',
        color: 'var(--primary-color)',
        marginBottom: '1rem',
        lineHeight: '1.1',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#555',
        marginBottom: '2.5rem',
        maxWidth: '600px',
    },
    ctaGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    contactInfo: {
        fontSize: '0.9rem',
        color: '#666',
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: '1rem',
        borderRadius: '8px',
        borderLeft: '4px solid var(--accent-color)',
    },
    imagePlaceholder: {
        flex: 1,
        minWidth: '300px',
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-lg)',
    },
};

export default Hero;
