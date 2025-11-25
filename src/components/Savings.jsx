import React from 'react';

const Savings = () => {
    const savingsPoints = [
        {
            title: "Maximise Uptime",
            text: "Maximising the uptime of the asset by keeping it working and generating revenue"
        },
        {
            title: "Reduce Downtime",
            text: "Reducing costly downtime by scheduling preventative and planned maintenance"
        },
        {
            title: "Increase Lifecycle",
            text: "Increasing the life cycle of your assets and facilities giving you a better return on investment"
        },
        {
            title: "Optimise Stock",
            text: "Management of the parts required for maintenance and repairs so you only stock what is required"
        }
    ];

    return (
        <section style={styles.section}>
            <div className="container">
                <div style={styles.header}>
                    <h2 style={styles.title}>Significant Savings</h2>
                    <p style={styles.subtitle}>
                        Achieve between <span style={styles.highlight}>12% to 18% savings</span> on your maintenance and operations budget when you implement The RGC Enterprise System CMMS or CAFM solution.
                    </p>
                </div>

                <div style={styles.grid}>
                    {savingsPoints.map((point, index) => (
                        <div key={index} style={styles.card}>
                            <h3 style={styles.cardTitle}>{point.title}</h3>
                            <p style={styles.cardText}>{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '6rem 0',
        backgroundColor: 'var(--primary-color)',
        color: 'var(--white)',
    },
    header: {
        textAlign: 'center',
        marginBottom: '4rem',
        maxWidth: '800px',
        margin: '0 auto 4rem auto',
    },
    title: {
        fontSize: '3rem',
        marginBottom: '1.5rem',
        color: 'var(--white)',
    },
    subtitle: {
        fontSize: '1.3rem',
        lineHeight: '1.6',
        opacity: '0.9',
    },
    highlight: {
        color: 'var(--accent-color)',
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'transform 0.3s ease',
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'var(--accent-color)',
        marginBottom: '1rem',
    },
    cardText: {
        fontSize: '1.1rem',
        lineHeight: '1.5',
    },
};

export default Savings;
