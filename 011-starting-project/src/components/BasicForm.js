import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const isNotEmpty = value => value.trim() !=='';

  const isEmailValid = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const { 
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    valueClasses: nameClasses,
    reset: resetName
  } = useInput(isNotEmpty);

  const { 
    enteredValue: enteredLastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    valueClasses: lastNameClasses,
    reset: resetLastName
  } = useInput(isNotEmpty);

  const { 
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    valueClasses: emailClasses,
    reset: resetEmail
  } = useInput(isEmailValid);

  let formIsValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    resetName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={nameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text'
            id='name'
            value={enteredName}
            onChange={nameChangeHandler} 
            onBlur={nameBlurHandler}/>
            {nameHasError && <p className="error-text">Name is invalid.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input 
            type='text'
            id='last-name'
            value={enteredLastName}
            onChange={lastNameChangeHandler} 
            onBlur={lastNameBlurHandler} />
            {lastNameHasError && <p className="error-text">Last Name is invalid.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          type='text' 
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler} 
          onBlur={emailBlurHandler} />
           {emailHasError && <p className="error-text">Email is invalid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
