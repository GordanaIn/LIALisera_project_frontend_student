import React, {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import SearchButton from "./SearchButton";
import {OurField} from "../sharedComponents/OurField";
import useDebounce from "../../hooks/useDebounce";


interface Values {
    searchString: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}

export interface ISearchProps {
    onChangeSearchQuery: (searchQuery: string) => void;
}



export default function SearchField(props: ISearchProps) {

    const [searchQuery, setSearchQuery] = useState<string | undefined>();
    const { onChangeSearchQuery } = props;
    const debouncedSearchQuery = useDebounce(searchQuery, 250);

    useEffect(() => {
        if (debouncedSearchQuery !== undefined) {
            onChangeSearchQuery(debouncedSearchQuery);
        }
    }, [debouncedSearchQuery, onChangeSearchQuery]);


    return (
        <div>
            <input
                id="search"
                className="form-control full-width"
                type="search"
                placeholder="Search..."
                aria-label="Search"
                onChange={(event) => setSearchQuery(event.target.value)}
            />
            <SearchButton/>
        </div>
    );
}