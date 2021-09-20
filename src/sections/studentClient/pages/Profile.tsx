import React, {FC, useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& > *': {
                margin: theme.spacing(8),
            },
        },
    }),
);

type Student = {
    name: string,
    email: string,
}

const Profile: React.FC<Student> = () => {

    const classes = useStyles();
    const [studList, setStudList] = useState<Student>({
        name: "Mjau",
        email: "dd@bb.com",
    })
    return (
        <div className={classes.root}>
            <Avatar src="/broken-image.jpg"/>
            <li>{studList.name}</li>
            <li>{studList.email}</li>

        </div>
    );
}
export default Profile;
