import React from "react";
import { InputDateContainer } from "../../Styled/Inputs.styled";

function InputDate() {
  return (
    <InputDateContainer>
      <small>Escolhe datas</small>
      <div>
        <input type="date" />
        <small>a</small>
        <input type="date" />
      </div>
    </InputDateContainer>
  );
}

export default InputDate;
