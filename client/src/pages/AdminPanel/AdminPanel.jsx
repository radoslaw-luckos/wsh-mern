import React from 'react';
import { AppBar, Container, Grid, Typography, Toolbar, IconButton, Avatar, Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PeopleIcon from '@mui/icons-material/People';
import "./AdminPaniel.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const AdminPanel = () => {
    return (
        <Container maxWidth="false" className="container">
            <AppBar>
                <Toolbar className="topbar">
                    <Typography variant="h6" className="topbar__title">32. WSH Per Aspera Ad Astra</Typography>
                    <div className="topbar__user-area">
                        <Avatar alt="Radosław Łuckoś" src='/client/src/assets/img/indeks.jpg' />
                        <IconButton className="btn">
                            <ExitToAppIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Grid container className="content">
                <Router>
                    <Grid item className="sidebar" xs={2}>
                        <nav>
                            <ul className="menu">
                                <li>
                                    <Link to="/admin" className="menu__item">
                                        <Button className="btn" variant="contained" color="info" size="large" startIcon={<HomeIcon />}>Tablica</Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/relations" className="menu__item">
                                        <Button className="btn" variant="contained" color="info" size="large" startIcon={<HistoryEduIcon />}>Relacje</Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/annoucements" className="menu__item">
                                        <Button className="btn" variant="contained" color="info" size="large" startIcon={<AnnouncementIcon />}>Ogłoszenia</Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin/users" className="menu__item">
                                        <Button className="btn" variant="contained" color="info" size="large" startIcon={<PeopleIcon />}>Użytkownicy</Button>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </Grid>
                    <Grid item xs={10}>
                        <Switch>
                            <Route path="/admin/relations">
                                Relacje
                            </Route>
                            <Route path="/admin/annoucements">
                                Ogłoszenia
                            </Route>
                            <Route path="/admin/users">
                                Użytkownicy
                            </Route>
                            <Route path="/admin">
                                Tablica
                            </Route>
                        </Switch>

                    </Grid>
                </Router>
            </Grid>
        </Container>

    )
};

export default AdminPanel;
