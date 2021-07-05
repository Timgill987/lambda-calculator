import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorsvalues] = useState(operators)
  return (
    <div>
       {operatorsvalues.map(items => (
      <OperatorButton symboloperators ={items.char} />
       ))};
    </div>
  );
};
export default Operators;