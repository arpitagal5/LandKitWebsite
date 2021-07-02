import React from 'react';
import Navigation from './components/Navigation';
import SectionFive from './components/Sections/SectionFive';
import SectionFour from './components/Sections/SectionFour';
import SectionTwo from './components/Sections/SectionTwo';
import SectionOne from './components/Sections/SectionOne';
import SectionThree from './components/Sections/SectionThree';
import FooterSection from './components/Sections/FooterSection';

const App = () => {
    return (
        <React.Fragment>
            <Navigation />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <FooterSection />
        </React.Fragment>
    );
}
export default App;