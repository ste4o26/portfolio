import React, { useState } from 'react';

import Card from './ui/Card';
import Button from './ui/Button';
import Modal from './ui/Modal';
import useSlider from '../hooks/use-slider';

import classes from './Project.module.css'

const Project = props => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const slider = useSlider([...props.project.images]);
    const prevImageHandler = () => slider.prev();
    const nextImageHandler = () => slider.next();

    const openModalHandler = () => setIsOpenModal(true);
    const closeModalHandler = () => setIsOpenModal(false);

    return (
        <Card>
            <article className={classes.project}>
                <header className={classes.header}>
                    <section className={classes.slider}>
                        <img onClick={openModalHandler} src={'./assets/' + slider.currentImage}
                            alt='This is the home page of an anime video streaming platform.' />

                        <div className={classes.buttons}>
                            <Button onClick={prevImageHandler}>Prev</Button>
                            <Button onClick={nextImageHandler}>Next</Button>
                        </div>
                    </section>

                    {
                        isOpenModal && <Modal onClose={closeModalHandler}>
                            <div onClick={closeModalHandler} className={classes.imgContainer}>
                                <img src={'./assets/' + slider.currentImage} />
                            </div>
                            <div className={classes.actions}>
                                <Button onClick={prevImageHandler}>Prev</Button>
                                <Button onClick={closeModalHandler}>Close</Button>
                                <Button onClick={nextImageHandler}>Next</Button>
                            </div>
                        </Modal>
                    }

                    <section className={classes.heading}>
                        <h2>{props.project.title}</h2>
                        <a href={props.project.link} target="_blank"><strong>Source code</strong></a>
                        <p>Started at: {props.project.dates.start}</p>
                        <p>Ended at: {props.project.dates.end}</p>
                    </section>
                </header>

                <main className={classes.about}>
                    <section>
                        <header>
                            <h3>Technologies</h3>
                        </header>
                        <div>
                            {props.project.technologies.join(', ')}
                        </div>
                    </section>

                    <section>
                        <header>
                            <h3>Description</h3>
                        </header>
                        <div>
                            {props.project.descriptions.map((item, id) => <p key={id}>{item}</p>)}
                        </div>

                    </section>

                </main>
            </article>
        </Card>
    );
}

export default Project;