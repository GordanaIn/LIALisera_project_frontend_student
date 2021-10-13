import React, {FC} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import ChangePasswordGrid from "../components/changePasswordComponents/ChangePasswordGrid";
//import {IUser} from "./interfaces/IStudent";

const ChangePassword: FC<{}> =() => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <ChangePasswordGrid />
            <div/>
        </React.Fragment>
    );
}
export default ChangePassword;
// export{};
