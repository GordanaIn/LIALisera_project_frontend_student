import React, {FC} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchGrid from "../components/searchComponents/SearchGrid";
import theme from "../../../Theme";
import { ThemeProvider } from '@material-ui/core';
import {useStyles} from "../components/searchComponents/styles/SearchStyles";

interface Props{

}

const Search:FC<Props> = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                  <SearchGrid />
            </div>
        </ThemeProvider>
    );
}
export default Search;
