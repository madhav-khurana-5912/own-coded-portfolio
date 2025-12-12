import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Hero() {
    return (
        <header id="about" style={{
            padding: '3rem 0 5rem 0',
        }}>
            <div style={{
                background: '#0a0a0a',
                border: '1px solid #1a1a1a',
                borderRadius: '8px',
                padding: '2.5rem 3rem',
                position: 'relative',
            }}>
                {/* Social Icons - Top Right */}
                <div style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem',
                    display: 'flex',
                    gap: '0.5rem',
                }}>
                    <a
                        href="https://github.com/madhav-khurana-5912"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            width: '36px',
                            height: '36px',
                            background: '#1a1a1a',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#888',
                            transition: 'all 0.2s ease',
                            border: '1px solid #222',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#888'; }}
                    >
                        <FaGithub size={16} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/madhav-khurana-site"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            width: '36px',
                            height: '36px',
                            background: '#1a1a1a',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#888',
                            transition: 'all 0.2s ease',
                            border: '1px solid #222',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#444'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#888'; }}
                    >
                        <FaLinkedinIn size={16} />
                    </a>
                </div>

                {/* Name */}
                <h1 style={{
                    fontSize: '3.5rem',
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    lineHeight: '1.0',
                    margin: 0,
                    letterSpacing: '2px',
                }}>
                    Madhav Khurana
                </h1>

                {/* Location */}
                <p style={{
                    color: '#666',
                    fontSize: '0.85rem',
                    margin: '0.4rem 0 0 0',
                }}>
                    Delhi, India
                </p>

                {/* Title with underline */}
                <p style={{
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: "'Open Sans', sans-serif",
                    marginTop: '1.5rem',
                    marginBottom: '0.75rem',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                }}>
                    Software Engineer & Web Developer
                </p>

                {/* Description */}
                <p style={{
                    color: '#777',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    maxWidth: '550px',
                    margin: 0,
                    fontFamily: "'Open Sans', sans-serif",
                }}>
                    I specialize in crafting beautiful, functional, and performant web
                    experiences, turning complex problems into elegant solutions.
                </p>
            </div>
        </header>
    );
}

export default Hero;
