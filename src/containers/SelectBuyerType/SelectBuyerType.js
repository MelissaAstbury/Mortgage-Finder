import React from "react";

import BuyerType from "../../components/BuyerType/BuyerType";

const SelectBuyerType = () => {
  return (
    <div>
      <BuyerType>Remortgage</BuyerType>
      <BuyerType>Purchase</BuyerType>
      <BuyerType>First Time Buyer</BuyerType>
    </div>
  );
};

export default SelectBuyerType;
