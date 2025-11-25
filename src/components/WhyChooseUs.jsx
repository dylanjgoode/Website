import React from 'react';
import { Smartphone, Building, Wrench, Package, ClipboardList, TrendingDown, Layers, BarChart } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        {
            title: "Mobile App for Engineers",
            description: "Field and Internal staff can pro-actively manage their tasks in real time",
            icon: <Smartphone size={40} color="var(--primary-color)" />
        },
        {
            title: "Asset & Facilities Management",
            description: "Allocate and Manage Jobs to ensure Assets are tracked and facilities remain operational",
            icon: <Building size={40} color="var(--primary-color)" />
        },
        {
            title: "Preventative and Reactive Maintenance",
            description: "Maximise ROI by managing uptime and minimising costly down time",
            icon: <Wrench size={40} color="var(--primary-color)" />
        },
        {
            title: "Stock Control",
            description: "Optimise your Supply Chain and have visibility of your inventory and stock across multiple sites and warehouse locations",
            icon: <Package size={40} color="var(--primary-color)" />
        },
        {
            title: "Project Management",
            description: "Ability to Manage Projects, cost estimates, timescales and progress – all from the one system",
            icon: <ClipboardList size={40} color="var(--primary-color)" />
        },
        {
            title: "Reduce costs",
            description: "Utilise the RGC Enterprise System to align departments ensuring maximum focus on your Company Strategy and process requirements",
            icon: <TrendingDown size={40} color="var(--primary-color)" />
        },
        {
            title: "Consolidate",
            description: "The management of activities into a Single System including the ability to add multiple Companies on one database",
            icon: <Layers size={40} color="var(--primary-color)" />
        },
        {
            title: "Reporting",
            description: "Utilise the reporting tool to give you visibility of the key information that you need to manage your business",
            icon: <BarChart size={40} color="var(--primary-color)" />
        }
    ];

    return (
        <section style={styles.section}>
            <div className="container">
                <div style={styles.header}>
                    <h2 style={styles.heading}>Why Choose Us!</h2>
                    <p style={styles.subHeading}>
                        The RGC Enterprise System gives you a flexible and integrated suite of modules, in one system that can potentially replace the multiple systems, spreadsheets and paperwork that you may currently use to manage your business.
                    </p>
                    <p style={styles.subHeading}>
                        By consolidating your current businesses processes into one system the RGC Enterprise System can offer you all of the following :-
                    </p>
                </div>

                <div style={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.icon}>{benefit.icon}</div>
                            <h3 style={styles.cardTitle}>{benefit.title}</h3>
                            <p style={styles.cardDescription}>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: 'var(--light-bg)',
        padding: '6rem 0',
    },
    header: {
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto 4rem auto',
    },
    heading: {
        fontSize: '2.5rem',
        color: 'var(--text-color)',
        marginBottom: '2rem',
    },
    subHeading: {
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '1.5rem',
        lineHeight: '1.6',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
    },
    card: {
        padding: '2rem',
        borderRadius: '12px',
        backgroundColor: 'var(--white)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'transform 0.3s ease',
        border: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    icon: {
        marginBottom: '1.5rem',
        backgroundColor: 'var(--light-bg)',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: '1.3rem',
        color: 'var(--primary-color)',
        marginBottom: '1rem',
        minHeight: '3rem', // Align titles
    },
    cardDescription: {
        color: '#666',
        fontSize: '0.95rem',
    },
};

export default WhyChooseUs;
