import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import NavLink from "./NavLink";
import Logo from "./Logo";

const BasicHeader: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Logo />
        {/* <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink> */}
      </Toolbar>
    </AppBar>
  );
};

export default BasicHeader;
