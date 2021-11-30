import React, { Fragment } from 'react'
import classes from './Modal.module.css';
import ReactDom from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModelOverlay = props => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
    );
}

const portalElement = document.getElementById('overlays');

const Model = props => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
        </Fragment>
    )
}

export default Model
