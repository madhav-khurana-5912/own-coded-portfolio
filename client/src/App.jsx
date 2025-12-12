import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Work from './components/Work';
import Testimonials from './components/Testimonials';
import Admin from './pages/Admin';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '6rem 2rem 2rem 2rem',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Work />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </div>

                <footer style={{
                    padding: '2rem 0',
                    marginTop: '4rem',
                    borderTop: '1px solid #222',
                    textAlign: 'center',
                    color: '#444',
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: '0.9rem',
                }}>
                    &copy; 2025 Madhav Khurana. All Rights Reserved.
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
