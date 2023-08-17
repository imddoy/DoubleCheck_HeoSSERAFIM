import React from 'react';
import { Div } from '../components/About/AboutStyle';
import Section1 from '../components/About/Section1';
import Section2 from '../components/About/Section2';
import Section3 from '../components/About/Section3';
import Section4 from '../components/About/Section4';

function About() {
    return (
        <Div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </Div>
    );
}

export default About;
