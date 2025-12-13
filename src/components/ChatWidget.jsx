import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm the RGC AI assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();

            setMessages(prev => [...prev, { text: data.text, sender: 'bot' }]);

        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting to the server.", sender: 'bot' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.wrapper}>
            {/* Chat Window */}
            {isOpen && (
                <div style={styles.window}>
                    <div style={styles.header}>
                        <div style={styles.headerTitle}>
                            <Bot size={20} />
                            <span>RGC Assistant</span>
                        </div>
                        <button onClick={toggleChat} style={styles.closeBtn}>
                            <X size={20} />
                        </button>
                    </div>

                    <div style={styles.messages}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{
                                ...styles.message,
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                backgroundColor: msg.sender === 'user' ? 'var(--primary-color)' : '#f1f1f1',
                                color: msg.sender === 'user' ? 'white' : 'black',
                            }}>
                                {msg.sender === 'bot' && <Bot size={16} style={{ marginRight: '8px', marginTop: '4px', flexShrink: 0 }} />}
                                <div style={styles.messageContent}>
                                    {msg.sender === 'bot' ? (
                                        <ReactMarkdown
                                            components={{
                                                p: ({ node, ...props }) => <p style={{ margin: '0 0 8px 0', lastChild: { marginBottom: 0 } }} {...props} />,
                                                ul: ({ node, ...props }) => <ul style={{ margin: '0 0 8px 0', paddingLeft: '20px' }} {...props} />,
                                                li: ({ node, ...props }) => <li style={{ marginBottom: '4px' }} {...props} />,
                                                strong: ({ node, ...props }) => <strong style={{ fontWeight: '600' }} {...props} />,
                                            }}
                                        >
                                            {msg.text}
                                        </ReactMarkdown>
                                    ) : (
                                        msg.text
                                    )}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ ...styles.message, alignSelf: 'flex-start', backgroundColor: '#f1f1f1' }}>
                                <Bot size={16} style={{ marginRight: '8px' }} />
                                Typing...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} style={styles.inputArea}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                            style={styles.input}
                        />
                        <button type="submit" style={styles.sendBtn} disabled={isLoading}>
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button onClick={toggleChat} style={styles.toggleBtn}>
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>
        </div>
    );
};

const styles = {
    wrapper: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    toggleBtn: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s',
    },
    window: {
        width: '437px', // Increased by ~25% from 350px
        height: '500px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid #eee',
    },
    header: {
        padding: '1rem',
        backgroundColor: 'var(--primary-color)',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontWeight: 'bold',
    },
    closeBtn: {
        background: 'none',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
    },
    messages: {
        flex: 1,
        padding: '1rem',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
    },
    message: {
        maxWidth: '85%',
        padding: '0.8rem',
        borderRadius: '12px',
        fontSize: '0.9rem',
        lineHeight: '1.4',
        display: 'flex',
        alignItems: 'flex-start',
    },
    messageContent: {
        wordBreak: 'break-word',
    },
    inputArea: {
        padding: '1rem',
        borderTop: '1px solid #eee',
        display: 'flex',
        gap: '0.5rem',
    },
    input: {
        flex: 1,
        padding: '0.8rem',
        borderRadius: '20px',
        border: '1px solid #ddd',
        outline: 'none',
    },
    sendBtn: {
        background: 'none',
        border: 'none',
        color: 'var(--primary-color)',
        cursor: 'pointer',
    },
};

export default ChatWidget;
