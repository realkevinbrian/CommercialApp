import React from "react";
import { TransferListContainer } from "../../Styled/TransferList.styled";
import DataBox from "./DataBox";
import TransferButtons from "./TransferButtons";

function index() {
  return (
    <TransferListContainer>
      <div className="body">
        <DataBox />
        <TransferButtons />
        <DataBox />
      </div>
    </TransferListContainer>
  );
}

export default index;
