import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartWidget from "../cart/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h2"
            component="div"
            color="white"
            sx={{ flexGrow: 1 }}
          >
            FourActive
          </Typography>
          <Button type="submit" variant="link">
            <Link to='/'>
            Home</Link>
          </Button>
          <Button type="submit" variant="link">
            <Link to='Productos'>
            Productos
            </Link>
          </Button>
          <Button type="submit" variant="link">
            <Link to ='GuiaDeTallas'>
            Guia de tallas</Link>
          </Button>
          <Button color="inherit">
            <Link to='carrito'>
            <CartWidget />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
