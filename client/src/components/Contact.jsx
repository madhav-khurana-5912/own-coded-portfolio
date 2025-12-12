import React, { useState } from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        // Mock API call
        setTimeout(() => setStatus('Message sent!'), 1500);
    };

    return (
        <section>
            <div style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '1rem' }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    color: '#fff'
                }}>Get In Touch</h2>
                <p style={{
                    color: '#888',
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '1.1rem'
                }}>Have a project in mind? Let's talk.</p>
            </div>

            <div style={{
                maxWidth: '500px',
                margin: '0 auto',
                background: '#0f0f0f',
                padding: '2.5rem',
                borderRadius: '16px',
                border: '1px solid #1a1a1a'
            }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: '#666', fontSize: '0.85rem', fontFamily: "'Open Sans', sans-serif" }}>Your Email</label>
                        <input type="email" placeholder="name@example.com" required style={{
                            background: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: '8px',
                            padding: '0.8rem 1rem',
                            color: '#fff',
                            outline: 'none',
                            fontFamily: "'Open Sans', sans-serif"
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ color: '#666', fontSize: '0.85rem', fontFamily: "'Open Sans', sans-serif" }}>Message</label>
                        <textarea placeholder="Tell me about your project..." rows="4" required style={{
                            background: '#1a1a1a',
                            border: '1px solid #333',
                            borderRadius: '8px',
                            padding: '1rem',
                            color: '#fff',
                            outline: 'none',
                            resize: 'vertical',
                            fontFamily: "'Open Sans', sans-serif"
                        }}></textarea>
                    </div>

                    <button type="submit" style={{
                        marginTop: '0.5rem',
                        background: '#fff',
                        color: '#000',
                        border: 'none',
                        padding: '1rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 700,
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: '1rem',
                        transition: 'opacity 0.2s',
                    }}>
                        {status || 'Send Message'}
                    </button>
                </form>

                <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', color: '#666' }}>
                    <FaTwitter size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#666'} />
                    <FaLinkedinIn size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#666'} />
                    <FaGithub size={20} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#666'} />
                </div>
            </div>
        </section>
    );
}
export default Contact;
