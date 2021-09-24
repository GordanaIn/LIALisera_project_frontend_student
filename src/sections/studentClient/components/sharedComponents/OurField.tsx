import * as React from "react";
import {FieldProps} from "formik";
import {TextField, TextFieldProps} from "@material-ui/core";


export const OurField: React.FC<FieldProps & TextFieldProps> =
    ({
         label,
         placeholder,
         field
     }) => {

        return (
            <TextField label={label} placeholder={placeholder} {...field}/>
        );
    };