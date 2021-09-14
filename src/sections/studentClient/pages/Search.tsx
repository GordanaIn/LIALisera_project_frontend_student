import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchGridComponent from "../components/searchComponents/SearchGridComponent";


export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline/>
                  <SearchGridComponent/>
        </React.Fragment>
    );
}
