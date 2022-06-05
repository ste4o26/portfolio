import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const overlaysDiv = document.getElementById('overlays');

const Backdrop = props => {
    return (
        <div onClick={props.onClose} className={classes.backdrop}></div>
    );
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    );
}

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, overlaysDiv)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlaysDiv)}
        </Fragment>
    );
}

export default Modal;