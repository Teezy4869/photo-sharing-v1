import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./styles.css";

function TopBar() {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" className="topbar-title">
          Hoàng Thanh Tùng
        </Typography>

        <Typography variant="h6" className="topbar-context">
          Photo Sharing App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;