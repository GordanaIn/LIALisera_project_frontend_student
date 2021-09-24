import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Formik, Form, Field} from 'formik';
import SearchButton from "./SearchButton";
import {OurField} from "../sharedComponents/OurField";


interface Values {
    searchString: string;
    search2: string;
}

interface Props {
    onSubmit: (values: Values) => void;
}


export const SearchField: React.FC<Props> = ({onSubmit}) => {

    return (
        <div>
            <Formik initialValues={{searchString: "", search2:""}}
                    onSubmit={(values) => {
                        onSubmit(values)
                    }}>
                {({values}) => (
                    <Form>
                        <Field name="searchString"
                        component={OurField}/>
                        <SearchButton/>
                        <Field
                            name="search2"
                            placeholder="search"
                            component={OurField}
                            />
                    </Form>
                )}
            </Formik>
        </div>
    );
}