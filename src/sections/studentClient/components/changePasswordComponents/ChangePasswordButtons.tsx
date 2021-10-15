import React from "react";
import Button from "mui-button";
import DeleteIcon from "@mui/icons-material/Delete";
import  SendIcon from "@mui/icons-material/Send";
import {useStyles} from "./ChangePasswordStyling";
import {ThemeProvider} from "@mui/material";
import theme from "../../../../Theme";
export default function ChangePasswordButtons() {

    const classes = useStyles();
    /*const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }*/

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.buttonRow}>
            <div className="form-group">
                <Button className={classes.buttonCancel}
                        startIcon={<DeleteIcon/>}
                        type="submit"
                        size={"small"}
                    //onClick={onSubmit}
                >
                    Cancel
                </Button>
                <Button className={classes.buttonOK}
                        endIcon={<SendIcon />}
                        type={"submit"}
                        size={"small"}
                        // variant={"outlined"}
                        // onClick={"onSubmit"}
                >
                    OK
                </Button>
            </div>
        </div>
        </ThemeProvider>
    );
}
