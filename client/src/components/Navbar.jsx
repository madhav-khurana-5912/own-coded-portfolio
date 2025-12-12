import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Testimonials'];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: '#000',
            padding: '1rem 0',
        }}>
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '0 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Link to="/" style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: '1px',
                    color: '#fff',
                    textDecoration: 'none',
                }}>
                    Madhav Khurana
                </Link>
                <ul style={{
                    display: 'flex',
                    gap: '1.5rem',
                    margin: 0,
                    padding: 0,
                    listStyle: 'none',
                }}>
                    {navItems.map((item) => (
                        <li key={item}>
                            <NavLink
                                to={`/${item.toLowerCase()}`}
                                style={({ isActive }) => ({
                                    color: isActive ? '#fff' : '#888',
                                    fontSize: '0.85rem',
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '4px',
                                    transition: 'color 0.2s ease',
                                    fontFamily: "'Open Sans', sans-serif",
                                })}
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
