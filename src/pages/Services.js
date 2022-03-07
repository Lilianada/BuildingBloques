import ComingSoonPage from "../components/Coming Soon/ComingSoon";
import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer"; 
import HeroSection from '../components/Hero/Hero';
import { Slide } from 'react-reveal';


export default function  ServicePage () {
        return (
            <div className="bodyWrapper">
                <NavBar />
                <Slide bottom>
                    <HeroSection />

                    <ComingSoonPage />

                    <Footer />
                </ Slide>
            </div>
        );
}