import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const validateName = (name) => {
    return name.trim() !== "";
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const {
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    hasError: hasNameValueError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    valueClasses: nameInputClasses,
    reset: resetName
  } = useInput(validateName);

  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: hasEmailValueError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    valueClasses: emailInputClasses,
    reset: resetEmail
  } = useInput(validateEmail);

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    console.log(enteredEmail);
    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {hasNameValueError && (
          <p className="error-text">Entered name is empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {hasEmailValueError && (
          <p className="error-text">Entered email is invalid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
