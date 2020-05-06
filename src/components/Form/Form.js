import React, { useState } from "react";

import "./Form.scss";
// import ProductData, { productData } from "../../ProductData";

import Input from "../Input/Input";

const Form = ({ setOnFormSubmit }) => {
  const [applicantName, setApplciantName] = useState("");
  const [age, setAge] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [annualSalary, setAnnualSalary] = useState(0);
  const [purchaseValue, setPurchaseValue] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setOnFormSubmit(true);
  };

  return (
    <form onSubmit={handleSubmit} className="application-form">
      <Input
        label="Full Name:"
        type="text"
        value={applicantName}
        setValue={setApplciantName}
      />
      <Input label="Age:" type="number" value={age} setValue={setAge} />
      <Input
        label="Loan Amount:"
        type="number"
        value={loanAmount}
        setValue={setLoanAmount}
      />
      <Input
        label="Deposit:"
        type="number"
        value={deposit}
        setValue={setDeposit}
      />
      <Input
        label="Annual Salary:"
        type="number"
        value={annualSalary}
        setValue={setAnnualSalary}
      />
      <Input
        label="Purchase Value:"
        type="number"
        value={purchaseValue}
        setValue={setPurchaseValue}
      />
      <input
        type="submit"
        value="Submit"
        // onClick={() => {
        // if (age >= 18 && age < 65) return <p>{productData.id.$(1)}</p>;
        // }}
      />
    </form>
  );
};

export default Form;
