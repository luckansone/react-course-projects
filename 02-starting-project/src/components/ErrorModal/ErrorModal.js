import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Button from "../Button/Button";
import Card from "../Card/Card";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.hideErrorModal}></div>;
};

const OverlayModal = (props) => {
  return (
    <div className={styles.modal}>
      <Card>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={styles["content-wrapper"]}>
          <div className={styles.content}>{props.children}</div>
          <div className={styles.action}>
            <Button type="button" onClickButton={props.hideErrorModal}>
              Ok
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop hideErrorModal={props.hideErrorModal} />,
        document.getElementById("backdrop-wrapper")
      )}
      {ReactDOM.createPortal(
        <OverlayModal
          children={props.children}
          hideErrorModal={props.hideErrorModal}
        />,
        document.getElementById("overlay-wrapper")
      )}
    </Fragment>
  );
};

export default ErrorModal;
