import React from 'react';
import About from '../../components/section/about';
import Opening from '../../components/section/opening';
import Projects from '../../components/section/projects';
import Experiences from '../../components/section/experiences';
import Certificates from '../../components/section/certificates';
import Footer from '../../components/section/footer';
import Header from '../../components/section/header';

const Landing = () => {

    return (
        <>
            <Header />
            <Opening />
            <About />
            <Projects />
            <Experiences />
            <Certificates />
            <Footer />
        </>
    )
}

export default Landing;