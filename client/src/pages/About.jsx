import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function About() {
    return (
        <div style={{ paddingTop: '2rem' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '4rem',
                minHeight: '60vh',
            }}>
                {/* Text Content */}
                <div style={{ flex: 1 }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '0.5rem',
                        lineHeight: 1.1,
                    }}>
                        About Me
                    </h1>
                    <h2 style={{
                        fontSize: '1.2rem',
                        fontFamily: "'JetBrains Mono', monospace",
                        color: '#666',
                        fontWeight: 400,
                        marginBottom: '2rem',
                    }}>
                        Madhav Khurana
                    </h2>

                    <div style={{
                        fontFamily: "'Open Sans', sans-serif",
                        color: '#999',
                        lineHeight: '1.8',
                        fontSize: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                    }}>
                        <p>
                            I am a passionate and driven Software Engineer based in Delhi,
                            India, with a specialization in crafting beautiful, functional,
                            and high-performance web experiences. My journey in technology has
                            been fueled by a desire to turn complex problems into elegant,
                            user-centric solutions.
                        </p>
                        <p>
                            From architecting robust back-end systems to building intuitive
                            and responsive user interfaces, I thrive on the challenges that
                            come with creating exceptional digital products. I am constantly
                            exploring new technologies and methodologies to refine my skills
                            and stay at the forefront of web development.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring the latest tech
                            trends, contributing to open-source projects, or enjoying a good
                            cup of coffee.
                        </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2.5rem' }}>
                        <a href="mailto:contact@example.com" style={{
                            background: '#f5f5f5',
                            color: '#000',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '4px',
                            fontFamily: "'Oswald', sans-serif", // Or Open Sans/Inter based on preference, button looks Oswald or generic sans
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-block',
                        }}>
                            Get In Touch
                        </a>

                        <a href="https://github.com/madhav-khurana-5912" target="_blank" rel="noreferrer" style={{
                            width: '36px', height: '36px', border: '1px solid #333',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            borderRadius: '4px', color: '#888', textDecoration: 'none'
                        }}>
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/madhav-khurana-site" target="_blank" rel="noreferrer" style={{
                            width: '36px', height: '36px', border: '1px solid #333',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            borderRadius: '4px', color: '#888', textDecoration: 'none'
                        }}>
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        width: '350px',
                        height: '350px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid #fff',
                        boxShadow: '0 0 20px rgba(255,255,255,0.2)', // Glow effect
                        position: 'relative',
                    }}>
                        {/* Replace with actual image source or a placeholder */}
                        <img
                            src="/images/profile.jpg"
                            alt="Madhav Khurana"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
