import React from "react";
import styles from "./InvestmentList.module.css";

const InvestmentList = (props) => {
  if (!props.items.length) {
    return <p className={styles.message}>No Investment calculated yet.</p>;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => (
          <tr key={item.id}>
            <td>{item.year}</td>
            <td>{formatter.format(item.savingsEndOfYear)}</td>
            <td>{formatter.format(item.yearlyInterest)}</td>
            <td>{formatter.format(item.totalInterest)}</td>
            <td>{formatter.format(item.totalInvestmentCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentList;
