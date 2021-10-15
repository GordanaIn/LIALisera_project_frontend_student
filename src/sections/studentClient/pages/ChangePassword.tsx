import React, {FC} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import ChangePasswordGrid from "../components/changePasswordComponents/ChangePasswordGrid";
import theme from "../../../Theme";
import { ThemeProvider } from '@material-ui/core';
//import {IUser} from "./interfaces/IStudent";

const ChangePassword: FC<{}> =() => {
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline/>
            <ChangePasswordGrid />
            <div/>
        </React.Fragment>
        </ThemeProvider>
    );
}
export default ChangePassword;
// export{};
