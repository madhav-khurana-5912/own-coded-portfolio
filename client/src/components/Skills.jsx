import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaPython, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiDjango, SiPostgresql, SiFirebase, SiVercel, SiGooglecloud } from 'react-icons/si';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#fff' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#fff' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#fff' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#fff' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#fff' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Vercel', icon: <SiVercel />, color: '#fff' },
    { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285F4' },
];

const row1 = skills.slice(0, 10);
const row2 = skills.slice(10);

const SkillCard = ({ skill, animated }) => (
    <div style={{
        background: '#0f0f0f',
        borderRadius: '10px',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.6rem',
        minWidth: animated ? '100px' : 'auto',
        flexShrink: 0,
        transition: 'transform 0.2s, background 0.2s',
        cursor: 'default',
    }}
        onMouseEnter={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#0f0f0f'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
        <div style={{ fontSize: '2rem', color: skill.color }}>{skill.icon}</div>
        <span style={{ fontSize: '0.7rem', color: '#888', textAlign: 'center', whiteSpace: 'nowrap' }}>{skill.name}</span>
    </div>
);

function Skills({ animated = false }) {
    if (animated) {
        return (
            <section>
                <style>
                    {`
                        @keyframes slideLeft {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        @keyframes slideRight {
                            0% { transform: translateX(-50%); }
                            100% { transform: translateX(0); }
                        }
                        .slide-track-left {
                            display: flex;
                            gap: 0.75rem;
                            animation: slideLeft 25s linear infinite;
                        }
                        .slide-track-right {
                            display: flex;
                            gap: 0.75rem;
                            animation: slideRight 25s linear infinite;
                        }
                        .slide-track-left:hover,
                        .slide-track-right:hover {
                            animation-play-state: paused;
                        }
                    `}
                </style>

                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '1px',
                }}>What I Work With</h2>

                <div style={{
                    overflow: 'hidden',
                    marginBottom: '0.75rem',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}>
                    <div className="slide-track-left">
                        {[...row1, ...row1].map((s, i) => (
                            <SkillCard key={`${s.name}-${i}`} skill={s} animated={true} />
                        ))}
                    </div>
                </div>

                <div style={{
                    overflow: 'hidden',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}>
                    <div className="slide-track-right">
                        {[...row2, ...row2].map((s, i) => (
                            <SkillCard key={`${s.name}-${i}`} skill={s} animated={true} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Static grid version
    return (
        <section>
            <h2 style={{
                fontSize: '2rem',
                marginBottom: '2rem',
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: '1px',
            }}>What I Work With</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(6, 1fr)',
                gap: '0.75rem'
            }}>
                {skills.map(s => (
                    <SkillCard key={s.name} skill={s} animated={false} />
                ))}
            </div>
        </section>
    );
}

export default Skills;
