import React, {useState} from 'react';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import ErrorModal from './components/ErrorModal/ErrorModal';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUser] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const addNewUser = (user) => {
    setUser(prev=> {
      return {
        ...prev,
        user
      }
    });
  };

  const showErrorModal = (error) => {
    setErrorMessage(error);
  };

  const hideErrorModal = () => {
    setErrorMessage(null);
  };

  return (
    <div>
      <AddUser addNewUser={addNewUser} showErrorModal={showErrorModal}></AddUser>
      {errorMessage &&
       <ErrorModal hideErrorModal= {hideErrorModal}>{errorMessage}</ErrorModal>}
       <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
