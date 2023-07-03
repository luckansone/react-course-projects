import React from "react";
import styles from './UsersList.module.css';
import Card from "../Card/Card";

const UsersList = (props) => {
    if (!props.users.length){
        return '';
    }

    return (
    <Card>
        <div className={styles.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        {user.username}, {user.age} years old
                    </li>
                ))}
            </ul>
        </div>
    </Card>)
};

export default UsersList;