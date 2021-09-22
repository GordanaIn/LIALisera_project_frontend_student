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


const NavBar: FC<{}>= () => {
    const classes = useStyles();
    const [checkWindowSize,setCheckWindowSize] = useState<boolean>();
    const {width,height} = useWindowSize();
    useEffect(()=>{
        width < 600 ? setCheckWindowSize(false): setCheckWindowSize(true)
    })

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.navBarTitle}>
                        LiaLisera
                    </Typography>
                    <IconButton edge="start" className={classes.navBarMenuButton} color="inherit" aria-label="menu">
                        {
                            checkWindowSize!==true?<Menu/>:null
                        }
                    </IconButton>

                    <Grid container direction ="row" justify="space-around" alignItems="center">
                        <Grid item>
                            {checkWindowSize !== false ? <Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/home"> Home</Link>  :null}
                        </Grid>
                        <Grid item>

                            {checkWindowSize !== false ? <Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/profile"> Profile</Link>  :null}

                        </Grid>
                        <Grid item>

                            {checkWindowSize !== false ? <Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/Search"> Search LIA</Link>  :null}
                        </Grid>
                        <Grid item>

                            {checkWindowSize !== false ? <Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/favorite"> Favorite</Link>  :null}
                        </Grid>
                        <Grid item>

                            {checkWindowSize !== false ? <Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/logout"> Logout</Link>  :null}
                        </Grid>
                        <Grid item>

                            {checkWindowSize !== false ? <Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/register"> Register</Link>  :null}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
