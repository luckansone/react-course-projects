import React from "react";
import styles from './UsersList.module.css';

const UsersList = (props) => {
    if (!props.users.length){
        return '';
    }

    return (
    <div className={styles.users}>
        <ul>
            {props.users.map(user => (
                <li key={user.id}>
                    {user.username} {user.age}
                </li>
            ))}
        </ul>
    </div>)
};

export default UsersList;