import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Work from '../components/Work';
import Testimonials from '../components/Testimonials';

function Home() {
    return (
        <>
            <Hero />
            <main style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
                <section id="skills"><Skills animated={true} /></section>
                <section id="experience"><Experience /></section>
                <section id="projects"><Work /></section>
                <section id="testimonials"><Testimonials /></section>
            </main>
        </>
    );
}

export default Home;
