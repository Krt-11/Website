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
    <Box className="header-container">
      <Toolbar className="header-toolbar">
        <Typography variant="h6" className="header-title">
          Krutin Shukla
        </Typography>

        <Box>
          <IconButton
            size="large"
            aria-label="navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            className="menu-icon"
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
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() => handleMenuClick(page.toLowerCase())}
              >
                <Typography className="menu-item">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Header;
