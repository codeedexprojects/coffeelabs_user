import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <List>
            <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/menu" onClick={handleDrawerToggle}>
                <ListItemText primary="Menu" />
            </ListItem>
            <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
                <ListItemText primary="Contact" />
            </ListItem>
        </List>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Coffee Lab
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            variant="temporary"
                            anchor="right"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button color="inherit" component={Link} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/about">
                            About
                        </Button>
                        <Button color="inherit" component={Link} to="/menu">
                            Menu
                        </Button>
                        <Button color="inherit" component={Link} to="/contact">
                            Contact
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar; 