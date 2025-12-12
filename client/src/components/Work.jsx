import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    { title: 'E-commerce Platform', desc: 'A full-featured online store with cart, payments (Stripe), and user authentication.', tags: ['React', 'Node', 'Stripe'] },
    { title: 'Task Management Tool', desc: 'Productivity app with drag-and-drop Kanban board and real-time updates.', tags: ['Vue', 'Firebase'] },
    { title: 'Portfolio Site', desc: 'Dark-themed personal portfolio built with React and Vite, focusing on performance.', tags: ['React', 'Vite', 'CSS Modules'] },
    { title: 'AI Chat Interface', desc: 'Responsive chat interface integrating OpenAI API for real-time conversation.', tags: ['Next.js', 'OpenAI', 'Tailwind'] },
];

function Work() {
    return (
        <section>
            <h2 style={{
                fontSize: '2rem',
                marginBottom: '2rem',
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: '1px',
                color: '#fff',
            }}>My Work</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {projects.map((p, i) => (
                    <div key={i} style={{
                        background: '#0f0f0f',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid #1a1a1a',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s ease',
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{
                            height: '180px',
                            background: '#1a1a1a',
                            borderRadius: '8px',
                            marginBottom: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#444',
                            fontSize: '0.9rem',
                            fontFamily: "'Open Sans', sans-serif"
                        }}>
                            [Project Preview]
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <h3 style={{
                                fontSize: '1.3rem',
                                margin: 0,
                                fontFamily: "'Oswald', sans-serif",
                                fontWeight: 500
                            }}>{p.title}</h3>
                            <div style={{ display: 'flex', gap: '0.75rem', color: '#666' }}>
                                <FaGithub style={{ cursor: 'pointer' }} size={18} />
                                <FaExternalLinkAlt style={{ cursor: 'pointer' }} size={16} />
                            </div>
                        </div>

                        <p style={{
                            color: '#999',
                            fontSize: '0.95rem',
                            marginBottom: '1.5rem',
                            flex: 1,
                            fontFamily: "'Open Sans', sans-serif",
                            lineHeight: 1.6
                        }}>{p.desc}</p>

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {p.tags.map(t => (
                                <span key={t} style={{
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.75rem',
                                    background: '#1a1a1a',
                                    borderRadius: '20px',
                                    color: '#ccc',
                                    fontFamily: "'Open Sans', sans-serif"
                                }}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Work;
