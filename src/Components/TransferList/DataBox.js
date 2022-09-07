import React from "react";
import { DataBoxWrapper } from "../../Styled/TransferList.styled";

function DataBox(props) {
  console.log({data : props.data})
  return (
    <DataBoxWrapper>
      {Array.from(props.data).length > 0 &&
        Array.from(props.data).map((item) => (
          <small key={item.name}>{item.name}</small>
        ))}
    </DataBoxWrapper>
  );
}

export default DataBox;
