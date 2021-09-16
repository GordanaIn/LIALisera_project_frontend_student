import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import {Menu} from "@material-ui/core";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {useStyles} from "./NavbarStyle";


export default function NavMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState < null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        };

    return (
        <div className={classes.root}>
            <div>
                <Button aria-controls="simple-menu"
                aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon className={classes.navBarMenuColor}/>
                </Button>
                <Menu open={Boolean(anchorEl)}
                      id ="simple-menu"
                      keepMounted
                      anchorEl={anchorEl}
                      onClose={handleClose}>
                        <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/MinaSidor"> Home</Link>
                            <HomeIcon
                            style={{color: "#C1C4C8", marginRight: 6}}/>Profile</MenuItem>
                        <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/Profile"> Profile</Link><PersonIcon
                            style={{color: "#C1C4C8", marginRight: 6}}/> My account</MenuItem>
                        <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/Favorite"> Favorite</Link><FavoriteIcon
                            style={{color: "#C1C4C8", marginRight: 6}}/> Favorite </MenuItem>
                        <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/Favorite"> Intership</Link><ExitToAppIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Search Lia</MenuItem>
                        <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} to="/Favorite"> Favorite</Link><ExitToAppIcon
                            style={{color: "#C1C4C8", marginRight: 6}}/>Logout</MenuItem>

                    </Menu>
            </div>
        </div>
    );
}
