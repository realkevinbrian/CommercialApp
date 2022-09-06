import { ArrowBackIosNewOutlined, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { TransferButtonsWrapper } from "../../Styled/TransferList.styled";

function TransferButtons() {
  return (
    <TransferButtonsWrapper>
      <IconButton>
        <ArrowForwardIos />
      </IconButton>

      <IconButton>
        <ArrowBackIosNewOutlined />
      </IconButton>
    </TransferButtonsWrapper>
  );
}

export default TransferButtons;
