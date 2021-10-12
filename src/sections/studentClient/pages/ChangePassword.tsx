import React, {FC} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import ChangePasswordGrid from "../components/changePasswordComponents/ChangePasswordGrid";
import {IUser} from "../interfaces/IStudent";
import userInfo from "../mock-data/userInfo";

const ChangePassword: FC<{userInfo:IUser}> = ({}) => {
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
