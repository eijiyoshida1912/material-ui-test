import React from "react";
import Grid from "@mui/material/Grid";
import { gridWrapperStyles } from "./styles";

const GridWrapper = ({ children }) => {
  const gridWrapperStyles = {
    marginLeft: "320px",
    backgroundColor: "#eaeff1",
    padding: "48px 32px",
    minHeight: "calc(100vh-166px)",
    position: "relative",
  };

  return (
    <Grid item xs={12} sx={gridWrapperStyles}>
      {children}
    </Grid>
  );
};

export default GridWrapper;
