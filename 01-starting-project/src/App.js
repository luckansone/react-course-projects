import InvestmentForm from './components/NewInvestmentRecord/InvestmentForm';
import InvestmentList from './components/InvestmentList/InvestmentList';
import Header from './components/Header/Header';
import React, {useState} from "react";

function App() {
  const [listRecords, addRecords] = useState([]);

  const changeRecords = (records) => {
    addRecords(() => {
      return records;
    });
  };

  return (
    <div>
      <Header/>
      <InvestmentForm changeRecords={changeRecords}></InvestmentForm>
      <InvestmentList items={listRecords}></InvestmentList>
    </div>
  );
}

export default App;
