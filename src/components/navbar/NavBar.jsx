import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const pages = ['Que hacer', 'Dota random'];
const links = ['', 'dotaRandom']

function NavBar() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '3%' }}>
                        {pages.map((page, i) => (
                            <Button
                                key={page}
                                sx={{ color: 'white', display: 'block', fontSize: '17px' }}
                            >
                                <Link to={`/${links[i]}`}>{page}</Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;

