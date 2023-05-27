import React from "react";
import "./Transactions.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Sales from "../../components/Sales/Sales";
import Profit from "../../components/Profit/Profit";
import SingleTransaction from "./SingleTransaction/SingleTransaction";

function Transactions() {
  return (
    <>
      <Navbar />
      <div className="transactions">
        {/* Sidebar */}
        <Sidebar />
        {/* Sales */}
        <div className="transaction__container">
          <div className="transaction__header">
            <h1>Transactions</h1>
          </div>
          {/* single Transaction */}

          {/* single Transaction */}
          <SingleTransaction />
          <SingleTransaction />
        </div>
      </div>
    </>
  );
}

export default Transactions;