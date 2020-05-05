import React from "react";

import "./BuyerType.scss";

const BuyerType = (props) => {
  return (
    <div className="buyerType">
      <p>{props.children}</p>
    </div>
  );
};

export default BuyerType;
