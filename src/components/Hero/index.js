import React from 'react'
import NavBar from '../Navbar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';

const Hero = () => {
    return (
    <HeroContainer>
        <NavBar />
        <HeroContent>
            <HeroItems>
                <HeroH1>Greatest Pizza Ever</HeroH1>
                <HeroP>HOT and ready in 30 minuets</HeroP>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
    );
}

export default Hero
