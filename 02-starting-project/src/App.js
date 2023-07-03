import React, {useState, Fragment} from 'react';
import AddUser from './components/AddUser/AddUser';
import ErrorModal from './components/ErrorModal/ErrorModal';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUser] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const addNewUser = (user) => {
    setUser(prevUsers => {
      return [user, ...prevUsers]
    });
  };

  const showErrorModal = (error) => {
    setErrorMessage(error);
  };

  const hideErrorModal = () => {
    setErrorMessage(null);
  };

  return (
    <Fragment>
      <AddUser addNewUser={addNewUser} showErrorModal={showErrorModal}></AddUser>
      {errorMessage &&
       <ErrorModal hideErrorModal= {hideErrorModal}>{errorMessage}</ErrorModal>}
       <UsersList users={users}></UsersList>
    </Fragment>
  );
}

export default App;
