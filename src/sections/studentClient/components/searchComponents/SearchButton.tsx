import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            alignItems:"center",
            margin: theme.spacing(1),
        },
    }),
);

export default function SearchButton() {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={()=>SearchButton}
                style={{marginTop:-105, marginLeft:191, paddingTop:52 }}>
                <SearchIcon style={{ alignItems:"center",marginTop:-45}}/>
            </Button>
        </div>
    );
}
