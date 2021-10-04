import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';

import {Menu} from "@material-ui/core";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {useStyles} from "./headerStyles/HeaderStyles";


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
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/"><HomeIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Home</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/search"><SearchIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Internships</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/profile"><PersonIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Profile</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/favorite"> <FavoriteIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/> Favorite</Link> </MenuItem>
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/logout"><ExitToAppIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Logout</Link></MenuItem>

                </Menu>
            </div>
        </div>
    );
}
