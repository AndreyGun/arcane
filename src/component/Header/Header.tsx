import React from 'react';
import {
    Link,
} from 'react-router-dom';
import { AppBar, Box, MenuItem, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    navLink: {
        color: '#fff',
        textDecoration: 'none',
    },
});

const Header = () => {

    const pages = [
        { title: 'Users', path: "/users" },
        { title: 'About', path: "/about" }
    ];
    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Box sx={{ flexGrow: 1, display: 'flex' }} p={1}>
                {pages.map((page) => (
                    <MenuItem key={page.title}>
                        <Button variant="text">
                            <Link className={classes.navLink} to={page.path}>{page.title}</Link>
                        </Button>
                    </MenuItem>
                ))}
            </Box>
        </AppBar>
    );
};

export default Header;
