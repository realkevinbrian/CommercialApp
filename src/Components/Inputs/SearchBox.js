import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { InputText, SearchBoxContainer } from "../../Styled/Inputs.styled";

function SearchBox() {
  return (
    <SearchBoxContainer>
      <InputText type="search" placeholder="Pesquise por nome" />
      <IconButton type={"submit"}>
        <Search />
      </IconButton>
    </SearchBoxContainer>
  );
}

export default SearchBox;
