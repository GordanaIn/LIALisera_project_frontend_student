import React, {FC} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchGrid from "../components/searchComponents/SearchGrid";


const Search:FC<{}> = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
                  <SearchGrid />
        </React.Fragment>
    );
}
export default Search;
