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
                        My mission is to consume as much knowledge as possible
                        so I can be useful to the team members and the clients.
                    </p>
                </Card>

                <Card>
                    <p>
                        When working on a project, the most important thing for me is to write
                        clean and efficient code. I love code debugging and finding bugs.
                        This helps me to avoid making the same mistakes in the future.
                    </p>
                </Card>

                <Card>
                    <p>
                       Learning about all these technologies is not my only passion. 
                       I love spreading the knowledge i have consumed with 
                       everyone who wants to learn or perhaps just need some help.
                    </p>
                </Card>
            </section>
        </main>
    );
}

export default AboutContent;
