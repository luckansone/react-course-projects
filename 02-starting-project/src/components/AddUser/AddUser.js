import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import hasNumber from "../../helper/Helper";
import INITIAL_STATE from "../../constants/Constants";

const AddUser = (props) => {
  const [userInfo, setUserInfo] = useState(INITIAL_STATE);

  const onInputChangeHandler = (input, value) => {
    setUserInfo((prev) => {
      return {
        ...prev,
        [input]: value,
        id: Math.random().toString()
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const error = validateUserInfo();
    if (error != null){
        props.showErrorModal(error);
        return;
    }
    props.addNewUser(userInfo);
    setUserInfo((_) => {
      return INITIAL_STATE;
    });
  };

  const validateUserInfo = () => {
    if ((!userInfo.username || userInfo.username.trim().length === 0) && !userInfo.age) {
        return "Please, enter username and age."
    }

    if (!userInfo.username || userInfo.username.trim().length === 0) {
        return "Please, enter username."
    }

    if (!userInfo.age) {
        return "Please, enter age."
    }

    if (hasNumber(userInfo.username)){
      return "Please, enter correct username. Username can't have numbers."
    }

    if (userInfo.age <= 0) {
        return "Please, enter correct age (age should be more than 0)."
    }

    return null;
  };

  return (
    <Card>
      <div className={styles.form}>
        <form onSubmit={onSubmitHandler}>
          <div className={styles.input}>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              id="username"
              value={userInfo.username}
              onChange={(event) =>
                onInputChangeHandler("username", event.target.value)
              }
            ></input>
          </div>
          <div className={styles.input}>
            <label htmlFor="age">Age(Years)</label>
            <input
              type="number"
              id="age"
              value={userInfo.age}
              onChange={(event) =>
                onInputChangeHandler("age", event.target.value)
              }
            ></input>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </Card>
  );
};

export default AddUser;
