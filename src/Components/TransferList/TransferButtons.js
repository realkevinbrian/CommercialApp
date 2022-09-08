import { ArrowBackIosNewOutlined, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { TransferButtonsWrapper } from "../../Styled/TransferList.styled";

function TransferButtons(props) {
  return (
    <TransferButtonsWrapper >
      
      <IconButton onClick={() => props.handleForward()}>
        <ArrowForwardIos />
      </IconButton>

      <IconButton onClick={() => props.handleBackward()}>
        <ArrowBackIosNewOutlined />
      </IconButton>
    </TransferButtonsWrapper>
  );
}

export default TransferButtons;
