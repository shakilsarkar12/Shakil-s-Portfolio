import React from 'react';
import Hero from '../Components/Hero/Hero';
import About from '../Pages/About/About';
import Projects from '../Pages/Projects/Projects';
import Contact from '../Pages/Contact/Contact';
import MySkills from '../Pages/MySkills/MySkills';

const Router = () => {
    return (
        <div>
            <section id='hero'><Hero/></section>
            <section id='about'><About/></section>
            <section id='skills'><MySkills/></section>
            <section id='projects'><Projects/></section>
            <section id='contact'><Contact/></section>
        </div>
    );
};

export default Router;