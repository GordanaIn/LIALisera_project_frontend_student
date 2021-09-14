import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchGrid from "../components/searchComponents/SearchGrid";


export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline/>
                  <SearchGrid/>
        </React.Fragment>
    );
}
