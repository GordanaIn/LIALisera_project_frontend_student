import React, {useEffect, useState} from 'react';
import {useStyles} from "./ChangePasswordStyling";
import ChangePasswordButtons from "./ChangePasswordButtons";
import userInfo from "../../mock-data/userInfo";



const  ChangePasswordInputFields: React.FC<{}>=({}) =>{
    const classes = useStyles();
    const [currentPassword, setCurrentPassword] = useState(userInfo.filter(user => user.username === "eyuel").map(value => value.password));
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    useEffect(() => {

        //setCurrentPassword(userInfo.filter(user => user.username === "eyuel").map(value => value.password));
    },[]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(currentPassword, newPassword,confirmNewPassword);
        let username = userInfo.filter(user=>user.username==="eyuel").map(value => value.username);
        let password = newPassword;
        let oldPassword=userInfo.filter(user=>user.username==="eyuel").map(value => value.password)

        const user={
            username:username,
            oldPassword:currentPassword,
            newPassword:password
        }
        console.log(user)
    }


    return (
        <form onSubmit={e => onSubmit(e)}>
            <h2 className={classes.h1}>Change Password</h2>
            <div className={classes.gridContainer}>
                <label className={classes.label} htmlFor="currentPassword">Current Password: </label>
                <div className={classes.textBox}>
                    <input
                        type="text"
                        placeholder="Enter current password..."
                        name="currentPassword"
                        value={currentPassword}

                    />
                </div>
            </div>
            <div className={classes.gridContainer}>
                <label className={classes.label} htmlFor="newPassword">New Password: </label>
                <div className={classes.textBox}>
                    <input
                        type="password"
                        placeholder="Enter new password..."
                        name="newPassword"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className={classes.gridContainer}>
                <label className={classes.label} htmlFor="confirmNewPassword"> Confirm New Password: </label>
                <div className={classes.textBox}>
                    <input
                        type="password"
                        placeholder="Repeat new password..."
                        name="confirmNewPassword"
                        value={confirmNewPassword}
                        onChange={e => setConfirmNewPassword(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <ChangePasswordButtons/>
            </div>
        </form>
    );
}
export default ChangePasswordInputFields;
