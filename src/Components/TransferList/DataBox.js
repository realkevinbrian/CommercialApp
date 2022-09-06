import React from "react";
import { DataBoxWrapper } from "../../Styled/TransferList.styled";

function DataBox() {
  const List = [
    { id: 1, name: "Kevin Brian" },
    { id: 2, name: "Kim" },
    { id: 3, name: "John" },
    { id: 4, name: "Kito" },
  ];
  return (
    <DataBoxWrapper>
      {Array.from(List).length > 0 &&
        Array.from(List).map((item) => (
          <small key={item.name}>{item.name}</small>
        ))}
    </DataBoxWrapper>
  );
}

export default DataBox;
