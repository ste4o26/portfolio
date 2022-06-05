import React from 'react';

import Card from './ui/Card';

import classes from './AboutContent.module.css';

const AboutContent = () => {
    return (
        <main className={classes.main}>
            <header>
                <h2>About Me</h2>
            </header>

            <section className={classes.content}>
                <Card>
                    <p>
                        Hello, my name is Stefan Damyanov. I am web developer based in Sofia, Bulgaria.
                        My mission is to consume as much as possible
                        knowadge so i can be usfull to the team members and the clients.
                    </p>
                </Card>

                <Card>
                    <p>
                        When working on a project the most important thing for me is to write
                        clean and efficient code. I love code debbuging and finding bugs.
                        This helps me to avoide making them in the future.
                    </p>
                </Card>

                <Card>
                    <p>
                       Learning about all this technologies isnt my only passion. 
                       I love to spreading the knowadge i have consumed with 
                       everyone who wants to learn  or perhaps just need some help.
                    </p>
                </Card>
            </section>
        </main>
    );
}

export default AboutContent;