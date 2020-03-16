import React from 'react';
import './Modal.css';

const modalOverlay = props =>{
    return <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal__header ${props.header}`}>
            <h2>{props.header}</h2>
        </header>
        <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault}>
            <div className={`modal__content ${props.contentClass}`}>
                {props.children}
            </div>
            <footer className={`modal__footer ${props.footer}`}>
                
            </footer>
        </form>
    </div>
}

const Modal = props => {};

export default Modal;