import React from 'react';
import {Formik, Form, Field} from 'formik';
import SearchButton from "./SearchButton";
import {OurField} from "../sharedComponents/OurField";

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
                {({values}) => (
                    <Form>
                        <Field name="searchString"
                        component={OurField}/>
                        <SearchButton/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}