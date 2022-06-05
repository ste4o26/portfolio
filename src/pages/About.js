import React, { Fragment, useState, useEffect } from 'react';

import AboutHeader from '../components/AboutHeader';
import AboutContent from '../components/AboutContent';

const About = () => {
    const [isHidden, setIsHidden] = useState(true);
    const showContentHandler = () => {
        if (window.screen.availWidth < 1500) {
            setIsHidden(false);
            return;
        }

        if (window.scrollY >= 1.6) setIsHidden(false);
        else setIsHidden(true);
    };

    window.addEventListener('scroll', showContentHandler);

    useEffect(() => {
        if (window.screen.availWidth < 500) {
            setIsHidden(false);
        }
    }, []);

    return (
        <Fragment>
            <AboutHeader isHiddenContent={isHidden} />
            {!isHidden && <AboutContent />}
        </Fragment>
    );
}

export default About;