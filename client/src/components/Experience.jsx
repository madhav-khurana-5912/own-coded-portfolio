import React from 'react';
import { BiBriefcase } from 'react-icons/bi';

const experiences = [
    {
        role: 'Senior Software Engineer',
        company: 'Acme Corporation',
        duration: '2021 - Present',
        description: "Error 404: Job description not found. My accomplishments are so vast, they break the character limit. I can only say I am a code-slinging, bug-vanquishing hero. Please give me the job."
    },
    {
        role: 'Software Engineer',
        company: 'Innovate Inc.',
        duration: '2019 - 2021',
        description: "Error 404: My achievements at this company are currently unavailable as they are being transcribed into an epic poem. It is legendary. Please give me the job."
    },
    {
        role: 'Junior Developer',
        company: 'Tech Solutions LLC',
        duration: '2017 - 2019',
        description: "Error 404: The description of my meteoric rise from a junior developer to a coding prodigy has been redacted for national security reasons. It is impressive. Please give me the job."
    }
];

function Experience() {
    return (
        <section>
            <h2 style={{
                fontSize: '2rem',
                marginBottom: '2rem',
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: '1px',
                color: '#fff',
            }}>
                My Experience
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {experiences.map((exp, index) => (
                    <div key={index} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                        <div style={{
                            marginTop: '0.3rem',
                            color: '#fff',
                            fontSize: '1.4rem',
                            opacity: 0.9
                        }}>
                            <BiBriefcase />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <div style={{
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                color: '#fff',
                                fontFamily: "'Oswald', sans-serif",
                                letterSpacing: '0.5px'
                            }}>
                                {exp.role} <span style={{ color: '#888', fontWeight: 400, fontFamily: "'Open Sans', sans-serif" }}>@ {exp.company}</span>
                            </div>

                            <div style={{
                                fontSize: '0.85rem',
                                color: '#666',
                                fontFamily: "'Open Sans', sans-serif",
                                marginBottom: '0.25rem'
                            }}>
                                {exp.duration}
                            </div>

                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                color: '#999',
                                margin: 0,
                                maxWidth: '700px',
                                fontFamily: "'Open Sans', sans-serif",
                            }}>
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
