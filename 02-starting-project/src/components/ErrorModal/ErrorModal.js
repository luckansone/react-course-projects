import React from "react";
import styles from './ErrorModal.module.css';
import Button from "../Button/Button";
import Card from "../Card/Card";

const ErrorModal = (props) => {
    return (
    <div>
        <div className={styles.backdrop} onClick={props.hideErrorModal}></div>
        <div className={styles.modal}>
            <Card>
                <div className={styles.header}>
                    <h2>Invalid input</h2>
                </div>
                <div className={styles['content-wrapper']}>
                    <div className={styles.content}>
                        {props.children}
                    </div>
                    <div className={styles.action}>
                        <Button type="button" onClickButton={props.hideErrorModal}>Ok</Button>
                    </div>
                </div>
            </Card>
        </div>
    </div>);
};

export default ErrorModal;