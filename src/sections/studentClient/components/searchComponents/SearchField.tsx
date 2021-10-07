import React, {useEffect, useState} from 'react';
import useDebounce from "../../hooks/useDebounce";
import {Grid} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            alignItems: "center",
            margin: theme.spacing(1),
        },
    }),
);

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
        <div style={{}}>
            <Grid direction="row">
                <input
                    id="search"
                    className="form-control full-width"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                    onChange={e => setSearchString(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                    style={{paddingTop: 52}}
                    onClick={e => setSearchQuery(searchString)}>
                    <SearchIcon style={{alignItems: "center", marginTop: -45}}/>
                </Button>
            </Grid>
        </div>
    );
}