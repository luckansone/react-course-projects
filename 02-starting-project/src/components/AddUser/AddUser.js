import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const INITIAL_STATE = {
  id: 0,
  username: "",
  age: 0,
};

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
    if (!userInfo.username && !userInfo.age) {
        return "Please, enter username and age."
    }

    if (!userInfo.username) {
        return "Please, enter username."
    }

    if (!userInfo.age) {
        return "Please, enter age."
    }

    if (userInfo.age <= 0) {
        return "Please, enter correct age (age should be more than 0)."
    }

    return null;
  };

  return (
    <Card>
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
            type="text"
            id="age"
            value={userInfo.age}
            onChange={(event) =>
              onInputChangeHandler("age", event.target.value)
            }
          ></input>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
