import React, { useState } from "react";

import "./Form.scss";

import Input from "../Input/Input";

const Form = () => {
  const [applicantName, setApplciantName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [loanAmount, setLoanAmount] = useState(undefined);
  const [deposit, setDeposit] = useState(undefined);
  const [annualSalary, setAnnualSalary] = useState(undefined);
  const [purchaseValue, setPurchaseValue] = useState(undefined);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("done");
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
