import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Define a custom styled Button
const OrangeButton = styled(Button)({
  backgroundColor: "orange",
  color: "#fff",
  "&:hover": {
    backgroundColor: "darkorange",
  },
});

export default function (props) {
  return <OrangeButton {...props} />;
}
