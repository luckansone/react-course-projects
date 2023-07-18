import { useState, useReducer } from "react";

const initialValues = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {
    if (action.type ==='INPUT') {
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    }

    if (action.type === 'BLUR') {
        return {
            value: state.value,
            isTouched: true
        }
    }

    if (action.type === 'RESET') {
        return initialValues;
    }

    return initialValues;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialValues);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueClasses = hasError
    ? "form-control invalid"
    : "form-control";

  const valueChangeHandler = (event) => {
    dispatch({type: 'INPUT', value: event.target.value});
  };

  const valueBlurHandler = () => {
    dispatch({type: 'BLUR'});
  };

  const reset = () => {
    dispatch({type: 'RESET'});
  };

  return { 
    enteredValue: inputState.value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    valueClasses,
    reset
  };
};

export default useInput;
