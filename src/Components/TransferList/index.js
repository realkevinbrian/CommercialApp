import React, { useContext, useState } from "react";
import { TransferListContainer } from "../../Styled/TransferList.styled";
import DataBox from "./DataBox";
import TransferButtons from "./TransferButtons";
import { TransferListContext } from "../../Context/TransferListContext";
function TransferList() {
  const List = useContext(TransferListContext);

  const [ParentList, setParentList] = useState(List);
  const [ChildList, setChildList] = useState([]);
  const [selected, setSelected] = useState([]);

  return (
    <TransferListContainer>
      <div className="body">
        <DataBox data={ParentList} />
        <TransferButtons />
        <DataBox data={ChildList} />
      </div>
    </TransferListContainer>
  );
}

export default TransferList;
