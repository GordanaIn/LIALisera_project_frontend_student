import React, {useEffect, useState} from 'react';
import useDebounce from "../../hooks/useDebounce";
import {Grid} from "@material-ui/core";
import {createStyles, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import theme from "../../../../Theme";
import {Theme} from "@mui/material/styles";
import TextField from '@mui/material/TextField';
import {useStyles} from "../../styles/SearchStyles";



export interface ISearchProps {
    onChangeSearchQuery: (searchQuery: string) => void;
}


export default function SearchField(props: ISearchProps) {
    const classes = useStyles();

    const [searchQuery, setSearchQuery] = useState<string | undefined>();
    const [searchString, setSearchString] = useState('');
    const {onChangeSearchQuery} = props;
    const debouncedSearchQuery = useDebounce(searchQuery, 250);

    useEffect(() => {
        if (debouncedSearchQuery !== undefined) {
            onChangeSearchQuery(debouncedSearchQuery);
        }
    }, [debouncedSearchQuery, onChangeSearchQuery]);


    return (
        <ThemeProvider theme={theme}>
        <div className={classes.div}>
            <Grid direction="row" className={classes.grid}>
               <TextField
                    label="Search..."
                    variant="outlined"
                    id="search"
                    className={classes.input}
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    onChange={e => setSearchString(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button1}
                    type="submit"
                    style={{paddingTop: 52}}
                    onClick={e => setSearchQuery(searchString)}>
                    <SearchIcon style={{alignItems: "center", marginTop: -45, color:"#fff"}}/>
                </Button>
            </Grid>
        </div>
        </ThemeProvider>
    );
}
