import React from 'react';
import Hero from '../Components/Hero/Hero';
import About from '../Pages/About/About';
import Projects from '../Pages/Projects/Prohects';

const Router = () => {
    return (
        <div>
            <section id='hero'><Hero/></section>
            <section id='about'><About/></section>
            <section id='projects'><Projects/></section>
            <section id='contact'></section>
        </div>
    );
};

export default Router;