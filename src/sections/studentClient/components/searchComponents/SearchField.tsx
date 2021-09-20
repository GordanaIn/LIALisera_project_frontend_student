import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Formik, Form, Field} from 'formik';
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
            <Formik initialValues={{searchString: ""}}
                    onSubmit={(values) => {
                        onSubmit(values)
                    }}>
                {({values, handleChange, handleBlur}) => (
                    <Form>
                        <Field name="searchString"/>
                        <SearchButton/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}