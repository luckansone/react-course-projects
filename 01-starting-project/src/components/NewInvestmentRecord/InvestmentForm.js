import React, { useState } from "react";
import styles from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const [currentSavingsValue, setCurrentSavings] = useState(0);
  const [isValidCurrentSavings, setIsValidForCurrentSavings] = useState(true);

  const [yearlyContributionValue, setYearlyContributionValue] = useState(0);
  const [isValidYearlyContribution, setIsValidForYearlyContribution] =
    useState(true);

  const [expectedReturnValue, setExpectedReturn] = useState(0);
  const [isValidExpectedReturn, setIsValidForExpectedReturn] = useState(true);

  const [durationValue, setDuration] = useState(0);
  const [isValidDuration, setIsValidForDuration] = useState(true);

  const calculateHandler = (event) => {
    event.preventDefault();

    let isValid = isValidInputs();

    if (!isValid) {
      return;
    }

    const yearlyData = [];
    let currentSavings = currentSavingsValue;
    const yearlyContribution = yearlyContributionValue;
    const expectedReturn = expectedReturnValue / 100;
    const duration = durationValue;
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      const totalInvestmentCapital = currentSavings - totalInterest;

      yearlyData.push({
        id: Math.random().toString(),
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        savingsEndOfYear: currentSavings,
        totalInvestmentCapital: totalInvestmentCapital,
      });
    }

    props.changeRecords(yearlyData);
  };

  const isValidInputs = () => {
    validateInput(currentSavingsValue, setIsValidForCurrentSavings);
    validateInput(yearlyContributionValue, setIsValidForYearlyContribution);
    validateInput(expectedReturnValue, setIsValidForExpectedReturn);
    validateInput(durationValue, setIsValidForDuration);

    return (
      isValidCurrentSavings &&
      isValidYearlyContribution &&
      isValidExpectedReturn &&
      isValidDuration
    );
  };

  const validateInput = (value, event) => {
    if (!value || value <= 0) {
      event(false);
    } else {
      event(true);
    }

    return !value || value <= 0;
  };

  const onReset = () => {
    props.changeRecords([]);
    setCurrentSavings(0);
    setIsValidForCurrentSavings(true);
    setYearlyContributionValue(0);
    setIsValidForYearlyContribution(true);
    setExpectedReturn(0);
    setIsValidForExpectedReturn(true);
    setDuration(0);
    setIsValidForDuration(true);
  };

  const inputChangeHandler = (input, event) => {
    switch (input) {
        case "current-savings":
            setCurrentSavings(+event.target.value);
            validateInput(+event.target.value, setIsValidForCurrentSavings);
            break;
        case "yearly-contribution":
            setYearlyContributionValue(+event.target.value);
            validateInput(+event.target.value, setIsValidForYearlyContribution);
            break;
        case "expected-return":
            setExpectedReturn(+event.target.value);
            validateInput(+event.target.value, setIsValidForExpectedReturn);
            break;
        case "duration":
            setDuration(+event.target.value);
            validateInput(+event.target.value, setIsValidForDuration);
            break; 
        default:
            console.log("Something wrong was passed.");
            break;
    }
  };

  return (
    <form className={styles.form} onSubmit={calculateHandler}>
      <div className={styles["input-group"]}>
        <p className={styles["group-item"]}>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) => inputChangeHandler("current-savings", event)}
          />
          {!isValidCurrentSavings && (
            <span className={styles["validation-message"]}>
              Please, enter correct value for Current Savings.
            </span>
          )}
        </p>
        <p className={styles["group-item"]}>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event)
            }
          />
          {!isValidYearlyContribution && (
            <span className={styles["validation-message"]}>
              Please, enter correct value for Yearly Savings.
            </span>
          )}
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p className={styles["group-item"]}>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) => inputChangeHandler("expected-return", event)}
          />
          {!isValidExpectedReturn && (
            <span className={styles["validation-message"]}>
              Please, enter correct value for Expected Interest.
            </span>
          )}
        </p>
        <p className={styles["group-item"]}>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) => inputChangeHandler("duration", event)}
          />
          {!isValidDuration && (
            <span className={styles["validation-message"]}>
              Please, enter correct value for Investment Duration.
            </span>
          )}
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={onReset}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
