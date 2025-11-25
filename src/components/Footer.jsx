import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <div style={styles.links}>
                    <a href="#" style={styles.link}>Cookie Policy</a>
                    <a href="#" style={styles.link}>Privacy Policy</a>
                    <a href="#" style={styles.link}>Privacy & Cookies Policy</a>
                </div>
                <div style={styles.copyright}>
                    &copy; {new Date().getFullYear()} RGC Technologies. Website by Stepping Online.
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: 'var(--dark-bg)',
        color: '#aaa',
        padding: '3rem 0',
        fontSize: '0.9rem',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
    },
    links: {
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    link: {
        color: '#aaa',
        textDecoration: 'none',
    },
    copyright: {
        textAlign: 'center',
    },
};

export default Footer;
