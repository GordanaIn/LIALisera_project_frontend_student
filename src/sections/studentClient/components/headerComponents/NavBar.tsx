import React, {FC, useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from "./NavMenu";
import {Grid} from "@material-ui/core";
import {Link} from 'react-router-dom'
import useWindowSize from "./windowSize/UseWindowSize";
import {useStyles} from "./headerStyles/HeaderStyles";
import {ThemeProvider} from "@mui/material";
import theme from "../../../../Theme";
import Logo from "./logan/Logo";

const NavBar: FC<{}> = () => {
    const classes = useStyles();
    const [checkWindowSize, setCheckWindowSize] = useState<boolean>();
    const {width, height} = useWindowSize();
    useEffect(() => {
        width < 600 ? setCheckWindowSize(false) : setCheckWindowSize(true)
    }, [width])

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.div2}>
                <Logo/>
            </div>
            <AppBar position="static" color={"primary"} variant={"outlined"} className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.navBarMenuButton} color="inherit" aria-label="menu">
                        {
                            checkWindowSize !== true ? <Menu/> : null
                        }
                    </IconButton>
                    <Grid container direction="row" justify="space-around" alignItems="center">
                        <Grid item className={classes.grid}>
                            {checkWindowSize !== false ?
                                <Link style={{textDecoration: 'none', color: 'inherit'}}
                                      className={[classes.navBarMenuColor, classes.linkDecoration].join('')}
                                      to="/home"> Home</Link> : null}
                        </Grid>
                        <Grid item className={classes.grid}>

                            {checkWindowSize !== false ?
                                <Link style={{textDecoration: 'none', color: 'inherit'}}
                                      className={[classes.navBarMenuColor, classes.linkDecoration].join('')}
                                      to="/profile"> Profile</Link> : null}

                        </Grid>
                        <Grid item className={classes.grid}>

                            {checkWindowSize !== false ?
                                <Link style={{textDecoration: 'none', color: 'inherit'}}
                                      className={[classes.navBarMenuColor, classes.linkDecoration].join('')}
                                      to="/search"> Search LIA</Link> : null}
                        </Grid>
                        <Grid item className={classes.grid}>

                            {checkWindowSize !== false ?
                                <Link style={{textDecoration: 'none', color: 'inherit'}}
                                      className={[classes.navBarMenuColor, classes.linkDecoration].join('')}
                                      to="/favorite"> Favorite</Link> : null}
                        </Grid>
                        <Grid item className={classes.grid}>

                            {checkWindowSize !== false ?
                                <Link style={{textDecoration: 'none', color: 'inherit'}}
                                      className={[classes.navBarMenuColor, classes.linkDecoration].join('')}
                                      to="/support"> Support</Link> : null}
                        </Grid>
                        <Grid item className={classes.grid}>
                            {checkWindowSize !== false ?
                                <Link style={{textDecoration: 'none', color: 'inherit'}}
                                      className={[classes.navBarMenuColor, classes.linkDecoration].join('')}
                                      to="/logout"> Logout</Link> : null}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default NavBar;
