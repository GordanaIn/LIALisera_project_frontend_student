import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Formik, Form} from 'formik';
import SearchButton from "./SearchButton";


//const ArrayList

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
                {({values, handleChange}) => (
                    <Form>
                        <TextField name="searchString"
                                   value={values.searchString}
                                   onChange={handleChange}

                        />
                        <pre>
                            {JSON.stringify(values, null, 2)}
                                   </pre>
                        <br/><br/><br/>
                        <SearchButton/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}