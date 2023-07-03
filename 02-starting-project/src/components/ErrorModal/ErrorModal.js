import React from "react";
import styles from './ErrorModal.module.css';
import Button from "../Button/Button";

const ErrorModal = (props) => {

    const onCloseModal = () => {
        props.hideErrorModal();
    };

    return (
    <div>
        <div className={styles.backdrop}></div>
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>Invalid input</h2>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
            <div className={styles.action}>
                <Button type="button" onClickButton={onCloseModal}>Ok</Button>
            </div>
        </div>
    </div>);
};

export default ErrorModal;