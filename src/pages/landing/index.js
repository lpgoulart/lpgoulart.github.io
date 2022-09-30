import React, { useEffect } from 'react';
import About from '../../components/section/about';
import Opening from '../../components/section/opening';
import Projects from '../../components/section/projects';
import Experiences from '../../components/section/experiences';
import Certificates from '../../components/section/certificates';
import Footer from '../../components/section/footer';
import Header from '../../components/section/header';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../store/mangaManager';

const Landing = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchData())
    }, dispatch)

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