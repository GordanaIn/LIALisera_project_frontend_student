import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchButton from "./SearchButton";
import {Formik, Form} from 'formik';


interface Values {
    searchString: String;
}

interface Props {
    onSubmit: (values: Values) => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            alignItems: "center",
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export const SearchField: React.FC<Props> = ({onSubmit}) => {
    const classes = useStyles();

    return (
        <form className={classes.root}
              noValidate autoComplete="off"
              style={{alignItems: "center", marginTop: 10, marginInlineStart: -50}}>
            <Formik initialValues={{searchString: ''}} onSubmit={(values) => {
                onSubmit(values)
            }}>
                {({values, handleChange, handleBlur}) => (
                    <Form>
                        <TextField id="outlined-basic"
                                   label="Search"
                                   variant="outlined"
                                   margin="normal"
                                   value={values.searchString}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                        />
                                   <pre>
                                       {JSON.stringify(values, null, 2)}
                                   </pre>
                    </Form>
                )}
            </Formik>
            <SearchButton/>
        </form>
    );
}
