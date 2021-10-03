import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            alignItems: "center",
            margin: theme.spacing(1),
        },
    }),
);

export default function SearchButton() {
    const classes = useStyles();
    const [searchQuery, setSearchQuery] = useState<string | undefined>();


    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
                style={{paddingTop: 52}}>
                <SearchIcon style={{alignItems: "center", marginTop: -45}}/>
            </Button>
        </div>
    );
}
