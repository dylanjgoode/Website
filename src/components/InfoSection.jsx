import React from 'react';

const InfoSection = () => {
    const specializations = [
        "CMMS Asset Management and CAFM Facilities Management",
        "Planned, Preventative and Predictive ( PPM ) Maintenance scheduling",
        "Field Service Management",
        "Purchasing and Supplier Management",
        "Customer Management, Work In Progress (WIP), Quotations and Billing",
        "Food, Packing and Renewable Energy"
    ];

    return (
        <section style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.textBlock}>
                    <h2 style={styles.heading}>Giving you the Information you need, when and where you need it</h2>
                    <p style={styles.description}>
                        The RGC Enterprise System gives clients full visibility of their activities enabling them to maximise the return on their investment and minimise the potential of unexpected down time.
                    </p>
                </div>

                <div style={styles.specializationBlock}>
                    <h3 style={styles.subHeading}>We specialise in the following areas</h3>
                    <ul style={styles.list}>
                        {specializations.map((item, index) => (
                            <li key={index} style={styles.listItem}>
                                <span style={styles.bullet}>•</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '6rem 0',
        backgroundColor: 'var(--white)',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
    },
    textBlock: {
        paddingRight: '2rem',
    },
    heading: {
        fontSize: '2.5rem',
        color: 'var(--primary-color)',
        marginBottom: '1.5rem',
    },
    description: {
        fontSize: '1.2rem',
        color: '#555',
        lineHeight: '1.8',
    },
    specializationBlock: {
        backgroundColor: 'var(--light-bg)',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: 'var(--shadow-md)',
    },
    subHeading: {
        fontSize: '1.5rem',
        color: 'var(--secondary-color)',
        marginBottom: '1.5rem',
        borderBottom: '2px solid #ddd',
        paddingBottom: '0.5rem',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    listItem: {
        fontSize: '1.1rem',
        color: '#444',
        display: 'flex',
        alignItems: 'flex-start',
    },
    bullet: {
        color: 'var(--accent-color)',
        marginRight: '0.8rem',
        fontWeight: 'bold',
    },
};

export default InfoSection;
