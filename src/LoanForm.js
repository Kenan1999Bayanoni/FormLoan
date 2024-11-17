import "./style.css";
import Message from "./Message";
import { useState } from "react";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    numberPhone: "",
    age: "",
    check: false,
    salaryRange: "",
  });
  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.numberPhone === "" ||
    loanInputs.age === "";
  const { age, numberPhone } = loanInputs;

  function handleIsDisabled(event) {
    setErrorMessage(null);
    event.preventDefault();
    setShowMessage(true);
    if (age < 18 || age > 100) setErrorMessage("The Age Is Not Enough");
    else if (numberPhone.length < 10 || numberPhone.length > 12)
      setErrorMessage("The Number Is Wrong");
  }

  function hiddenMessage() {
    if (showMessage) return setShowMessage(false);
  }

  return (
    <div
      onClick={hiddenMessage}
      className="flex"
      style={{ marginTop: "150px" }}
    >
      <form className="flex" style={{ flexDirection: "column" }} id="form">
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>Name:</label>
        <input
          value={loanInputs.value}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, name: event.target.value });
          }}
        ></input>
        <label>Phone Number:</label>
        <input
          type="number"
          value={loanInputs.value}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, numberPhone: event.target.value });
          }}
        ></input>
        <label>Age:</label>
        <input
          type="number"
          value={loanInputs.value}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, age: event.target.value });
          }}
        ></input>
        <label>Are you an employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.check}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, check: event.target.checked });
          }}
          style={{ marginTop: "10px" }}
        ></input>
        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value });
          }}
          style={{ width: "100%" }}
        >
          <option>500$</option>
          <option>1000$</option>
          <option>1500$</option>
        </select>
        <button
          className={btnIsDisabled ? "disable" : ""}
          onClick={handleIsDisabled}
          disabled={btnIsDisabled}
        >
          Submit
        </button>
      </form>
      <Message error={errorMessage} isVisible={showMessage} />
    </div>
  );
}
