import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Formik, Form} from 'formik';
import {Button} from "@material-ui/core";
import SearchButton from "./SearchButton";


interface Values {
    searchString: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}


export const SearchField: React.FC<Props> = ({onSubmit}) => {

    return (
        <div>
            <Formik initialValues={{searchString: ""}} onSubmit={(values) => {
                onSubmit(values)
            }}>
                {({values, handleChange, handleBlur}) => (
                    <Form>
                        <TextField name="searchString"
                                   value={values.searchString}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                        />
                        <pre>
                                       {JSON.stringify(values, null, 2)}
                                   </pre>
                        <br/><br/><br/>
                    </Form>
                )}
            </Formik>
            <Button type="submit">Search</Button>
            <SearchButton/>
        </div>
    );
}
