import {Component, useEffect, useRef} from "react";
import classes from './Modal.module.css';
import Portal from "./Portal";
import InputRef from "./InputRef";
import InputUsingRef from "./InputRef";
const CreateModal = (closeModal, children) => {
    useEffect(() => {
         window.addEventListener('keydown', CreateModal())
        return () => {
            window.removeEventListener('keydown', onClose)
        }
    }, [])
    function onClose(e) {
        if (e.key === 'Escape'){
            closeModal()
        }
    }
    return (
        <Portal>
            <div className={'modal'}>
                <div>
                    <InputUsingRef/>
                </div>
            </div>
        </Portal>
    )
}
export default CreateModal