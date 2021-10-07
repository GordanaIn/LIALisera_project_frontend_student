import React, {FC} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchGrid from "../components/searchComponents/SearchGrid";

interface Props{

}

const Search:FC<Props> = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
                  <SearchGrid />
        </React.Fragment>
    );
}
export default Search;
