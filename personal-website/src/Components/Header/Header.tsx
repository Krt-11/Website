import { useState, MouseEvent } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";
import { smoothScrollTo } from "../../SharedFunctions/ScrollAnimation";

const pages = ["Intro", "About", "Resume", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = (sectionId: string) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        const yOffset = -64;
        const targetY =
          section.getBoundingClientRect().top + window.scrollY + yOffset;

        smoothScrollTo(targetY);
      }
    }, 100);

    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#374f2f",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
        position: "fixed",
        top: 0,
        left: 0,
        transition: "transform 0.3s ease-in-out",
        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: "0.1rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          Krutin Shukla
        </Typography>

        <Box
          onMouseEnter={handleOpenNavMenu}
          onMouseLeave={handleCloseNavMenu}
          sx={{ display: "flex", position: "relative" }}
        >
          <IconButton
            size="large"
            aria-label="navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            sx={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            disableScrollLock
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() => handleMenuClick(page.toLowerCase())}
              >
                <Typography sx={{ textAlign: "center" }}>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Header;
