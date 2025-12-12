import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { collection, addDoc, getDocs, deleteDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { FaTrash, FaPlus } from 'react-icons/fa';

// HARDCODED ADMIN CREDENTIALS - Change these to your preferred values
const ADMIN_USERNAME = 'madhav';
const ADMIN_PASSWORD = 'M@dhav123';

function Admin() {
    const [searchParams] = useSearchParams();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [form, setForm] = useState({
        name: '',
        role: '',
        company: '',
        message: '',
        avatar: ''
    });

    // Check authentication from URL params - HARDCODED
    useEffect(() => {
        const user = searchParams.get('user');
        const pass = searchParams.get('pass');

        if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
        }
    }, [searchParams]);

    const fetchTestimonials = async () => {
        try {
            setError('');
            const querySnapshot = await getDocs(collection(db, 'testimonials'));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTestimonials(data);
        } catch (err) {
            console.error('Error fetching:', err);
            setError('Error fetching testimonials: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchTestimonials();
        }
    }, [isAuthenticated]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.message) {
            alert('Name and message are required!');
            return;
        }

        setSubmitting(true);
        setError('');

        try {
            await addDoc(collection(db, 'testimonials'), {
                name: form.name,
                role: form.role || '',
                company: form.company || '',
                message: form.message,
                avatar: form.avatar || '',
                createdAt: Timestamp.now()
            });
            setForm({ name: '', role: '', company: '', message: '', avatar: '' });
            await fetchTestimonials();
            alert('Testimonial added successfully!');
        } catch (err) {
            console.error('Error adding testimonial:', err);
            setError('Error adding testimonial: ' + err.message);
            alert('Error: ' + err.message);
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this testimonial?')) return;

        try {
            await deleteDoc(doc(db, 'testimonials', id));
            fetchTestimonials();
        } catch (err) {
            console.error('Error deleting:', err);
        }
    };

    const inputStyle = {
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '8px',
        padding: '0.8rem 1rem',
        color: '#fff',
        outline: 'none',
        fontFamily: "'Open Sans', sans-serif",
        fontSize: '0.95rem',
        width: '100%',
    };

    // Not authenticated - SHOW FAKE 404 PAGE
    if (!isAuthenticated) {
        return (
            <div style={{ textAlign: 'center', paddingTop: '6rem' }}>
                <h1 style={{
                    fontSize: '8rem',
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    color: '#222',
                    margin: 0,
                    lineHeight: 1,
                }}>
                    404
                </h1>
                <h2 style={{
                    fontSize: '1.5rem',
                    fontFamily: "'Oswald', sans-serif",
                    color: '#fff',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                }}>
                    Page Not Found
                </h2>
                <p style={{ color: '#666', marginBottom: '2rem', fontFamily: "'Open Sans', sans-serif" }}>
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/" style={{
                    display: 'inline-block',
                    background: '#fff',
                    color: '#000',
                    padding: '0.8rem 2rem',
                    borderRadius: '8px',
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 600,
                    textDecoration: 'none',
                }}>
                    Go Home
                </Link>
            </div>
        );
    }

    // Authenticated - show admin panel
    return (
        <div style={{ paddingTop: '1rem' }}>
            <h1 style={{
                fontSize: '2.5rem',
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                marginBottom: '1rem',
                color: '#fff',
            }}>
                🔓 Admin Panel
            </h1>

            <p style={{ color: '#4f4', marginBottom: '2rem', fontSize: '0.9rem' }}>
                ✓ Authenticated as {ADMIN_USERNAME}
            </p>

            {error && (
                <div style={{
                    background: '#331111',
                    border: '1px solid #f44',
                    borderRadius: '8px',
                    padding: '1rem',
                    marginBottom: '1.5rem',
                    color: '#f88',
                    fontSize: '0.9rem',
                }}>
                    ⚠️ {error}
                </div>
            )}

            {/* Add Testimonial Form */}
            <div style={{
                background: '#0f0f0f',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #1a1a1a',
                marginBottom: '3rem',
            }}>
                <h2 style={{
                    fontSize: '1.3rem',
                    fontFamily: "'Oswald', sans-serif",
                    marginBottom: '1.5rem',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}>
                    <FaPlus /> Add New Testimonial
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Name *</label>
                            <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" style={inputStyle} required />
                        </div>
                        <div>
                            <label style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Company</label>
                            <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Acme Inc." style={inputStyle} />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Role</label>
                            <input type="text" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="CEO" style={inputStyle} />
                        </div>
                        <div>
                            <label style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Avatar URL</label>
                            <input type="url" value={form.avatar} onChange={(e) => setForm({ ...form, avatar: e.target.value })} placeholder="https://..." style={inputStyle} />
                        </div>
                    </div>

                    <div>
                        <label style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem', display: 'block' }}>Message *</label>
                        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Write testimonial..." rows={4} style={{ ...inputStyle, resize: 'vertical' }} required />
                    </div>

                    <button type="submit" disabled={submitting} style={{
                        background: submitting ? '#444' : '#fff',
                        color: '#000',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: '1rem',
                        cursor: submitting ? 'not-allowed' : 'pointer',
                        alignSelf: 'flex-start',
                    }}>
                        {submitting ? 'Adding...' : 'Add Testimonial'}
                    </button>
                </form>
            </div>

            {/* Existing Testimonials */}
            <h2 style={{ fontSize: '1.5rem', fontFamily: "'Oswald', sans-serif", marginBottom: '1.5rem', color: '#fff' }}>
                Existing Testimonials ({testimonials.length})
            </h2>

            {loading ? (
                <p style={{ color: '#888' }}>Loading...</p>
            ) : testimonials.length === 0 ? (
                <p style={{ color: '#888' }}>No testimonials yet.</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {testimonials.map((t) => (
                        <div key={t.id} style={{
                            background: '#0f0f0f',
                            borderRadius: '8px',
                            padding: '1.5rem',
                            border: '1px solid #1a1a1a',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            gap: '1rem',
                        }}>
                            <div style={{ flex: 1 }}>
                                <p style={{ color: '#fff', fontWeight: 600, marginBottom: '0.25rem' }}>
                                    {t.name} {t.company && <span style={{ color: '#666', fontWeight: 400 }}>@ {t.company}</span>}
                                </p>
                                <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: '1.5' }}>"{t.message}"</p>
                            </div>
                            <button onClick={() => handleDelete(t.id)} style={{
                                background: 'transparent',
                                border: '1px solid #333',
                                borderRadius: '6px',
                                padding: '0.5rem',
                                color: '#f44',
                                cursor: 'pointer',
                            }}>
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Admin;
