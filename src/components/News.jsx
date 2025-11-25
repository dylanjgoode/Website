import React from 'react';

const News = () => {
    return (
        <section style={styles.section}>
            <div className="container">
                <h2 style={styles.heading}>See What Our Clients Have To Say....</h2>
                <div style={styles.content}>
                    <div style={styles.article}>
                        <h3 style={styles.articleTitle}>RGC Partners with DPD Ireland</h3>
                        <p style={styles.text}>
                            RGC Technologies Limited are delighted to have been chosen by DPD Ireland as its partner to provide them with the RGC CMMS ( Computerised Maintenance Management System ) to support their maintenance operations in Ireland. Michael Kelly, Head of Central Operations for DPD Ireland said that the business has seen significant growth this year –
                        </p>
                        <blockquote style={styles.quote}>
                            “During the height of the lockdown we averaged 730,000 parcels deliveries per week which was double what would usually be delivered and we expect this to continue as we move into peak with Black Friday, Cyber Monday and Christmas just around the corner. We need to maximise the up time of the sort to support the throughput of this higher parcel volume and we see the RGC Enterprise System as the right solution to help us do this so that we can continue to deliver an Outstanding Customer Experience to our customers.”
                            <footer style={styles.quoteFooter}>— Michael Kelly, Head of Central Operations for DPD Ireland</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: 'var(--white)', // Changed to white to alternate with WhyChooseUs
        padding: '6rem 0',
    },
    heading: {
        fontSize: '2.5rem',
        color: 'var(--text-color)',
        marginBottom: '3rem',
        textAlign: 'center',
    },
    content: {
        maxWidth: '900px',
        margin: '0 auto',
    },
    article: {
        backgroundColor: 'var(--light-bg)', // Changed to light-bg
        padding: '4rem',
        borderRadius: '16px',
        boxShadow: 'var(--shadow-md)',
    },
    articleTitle: {
        fontSize: '2rem',
        color: 'var(--primary-color)',
        marginBottom: '1.5rem',
    },
    text: {
        fontSize: '1.1rem',
        color: '#444',
        marginBottom: '2rem',
        lineHeight: '1.8',
    },
    quote: {
        borderLeft: '5px solid var(--accent-color)',
        paddingLeft: '2rem',
        fontStyle: 'italic',
        color: '#333',
        fontSize: '1.2rem',
        lineHeight: '1.8',
        backgroundColor: 'rgba(255,255,255,0.5)',
        padding: '2rem',
        borderRadius: '0 12px 12px 0',
    },
    quoteFooter: {
        display: 'block',
        marginTop: '1.5rem',
        fontSize: '1rem',
        fontWeight: '700',
        color: 'var(--primary-color)',
        fontStyle: 'normal',
    },
};

export default News;
