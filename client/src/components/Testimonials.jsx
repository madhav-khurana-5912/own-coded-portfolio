import React, { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { FaQuoteLeft } from 'react-icons/fa';

function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);
                const testimonialsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTestimonials(testimonialsData);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) {
        return (
            <section>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#fff',
                }}>Testimonials</h2>
                <p style={{ color: '#888', textAlign: 'center' }}>Loading testimonials...</p>
            </section>
        );
    }

    if (testimonials.length === 0) {
        return (
            <section>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: '#fff',
                }}>Testimonials</h2>
                <p style={{ color: '#888', textAlign: 'center' }}>No testimonials yet. Be the first to leave one!</p>
            </section>
        );
    }

    return (
        <section>
            <h2 style={{
                fontSize: '2rem',
                marginBottom: '2rem',
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: '1px',
                color: '#fff',
            }}>Testimonials</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
            }}>
                {testimonials.map((t) => (
                    <div key={t.id} style={{
                        background: '#0f0f0f',
                        borderRadius: '12px',
                        padding: '2rem',
                        border: '1px solid #1a1a1a',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}>
                        <FaQuoteLeft style={{ color: '#333', fontSize: '1.5rem' }} />

                        <p style={{
                            color: '#ccc',
                            fontFamily: "'Open Sans', sans-serif",
                            fontSize: '0.95rem',
                            lineHeight: '1.7',
                            flex: 1,
                        }}>
                            "{t.message}"
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                            {t.avatar ? (
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    }}
                                />
                            ) : (
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    background: '#1a1a1a',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#666',
                                    fontWeight: 700,
                                    fontFamily: "'Oswald', sans-serif",
                                }}>
                                    {t.name?.charAt(0).toUpperCase()}
                                </div>
                            )}
                            <div>
                                <p style={{
                                    color: '#fff',
                                    fontWeight: 600,
                                    fontFamily: "'Oswald', sans-serif",
                                    margin: 0,
                                }}>
                                    {t.name}
                                </p>
                                {t.company && (
                                    <p style={{
                                        color: '#666',
                                        fontSize: '0.85rem',
                                        margin: 0,
                                        fontFamily: "'Open Sans', sans-serif",
                                    }}>
                                        {t.role && `${t.role} at `}{t.company}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
