import React from 'react';
import { AppBar, Container, Grid, Typography, Toolbar, IconButton, Avatar } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const AdminPanel = () => {
    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">32. WSH Per Aspera Ad Astra</Typography>
                    <Avatar alt="Radosław Łuckoś" src='/client/src/assets/img/indeks.jpg' />
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item >
                    <Typography>Side Bar</Typography>
                </Grid>
                <Grid item>
                    <Typography>Page</Typography>
                </Grid>
            </Grid>
        </Container>

    )
};

export default AdminPanel;
