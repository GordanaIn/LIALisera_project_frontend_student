import React, {useEffect, useState} from 'react';
import {useStyles} from "./ChangePasswordStyling";
import {makeStyles, styled} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function ChangePasswordInputFields() {

    const classes = useStyles();
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    return (
        <form onSubmit={e => onSubmit(e)}>
            <h2 className={classes.h1}>Change Password</h2>
            <div className={classes.gridContainer}>
                <label className={classes.label} htmlFor="currentPassword">Current Password: </label>
                <div className={classes.textBox}>
                    <input
                        type="text"
                        // className={classes.textBox}
                        placeholder="Enter current password..."
                        name="currentPassword"
                        value={currentPassword}
                        onChange={e => setCurrentPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className={classes.gridContainer}>
                <label className={classes.label} htmlFor="newPassword">New Password: </label>
                <div className={classes.textBox}>
                    <input
                        type="text"
                        // className={classes.textBox}
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
                        type="text"
                        placeholder="Repeat new password..."
                        name="confirmNewPassword"
                        value={confirmNewPassword}
                        onChange={e => setConfirmNewPassword(e.target.value)}
                    />
                </div>
            </div>
            {/*<div>
                <div className="form-group">
                    <button className={classes.button}
                            type="submit"
                        //onClick={onSubmit}
                    >
                        Cancel
                    </button>
                </div>
                <div className="form-group">
                    <button className={classes.button}
                            type="submit"
                        //onClick={onSubmit}
                    >
                        OK
                    </button>
                </div>
            </div>*/}
        </form>
    );
}
