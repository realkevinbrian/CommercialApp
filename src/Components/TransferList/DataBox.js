import _ from "lodash";
import React from "react";
import { DataBoxWrapper } from "../../Styled/TransferList.styled";

function DataBox(props) {

  //method to handleSelect
  function handleSelect({ item, self }) {
    const current = document.getElementsByClassName("selected");
    // If you click on the element add < select > className
    if (current.length > 0) {
      current[0].className = current[0].className.replace("selected", "");
    }
    self.target.className += " selected";
    props.action([item]);
  }
  return (
    <DataBoxWrapper>
      {Array.from(props.data).length > 0 &&
        Array.from(props.data).map((item) => (
          <small
            key={item.name}
            onClick={(self) => handleSelect({ item, self })}
          >
            {item.name}
          </small>
        ))}
    </DataBoxWrapper>
  );
}

export default DataBox;
