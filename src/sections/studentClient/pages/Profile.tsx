import React, {FC, useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {LinkedIn} from "@material-ui/icons";
import Links from "../components/profileComponents/LinkedIn";
import DocFile from '../components/profileComponents/upLoad/DocFile';
import PersBrev from '../components/profileComponents/upLoad/PersBrev';
import Video from '../components/profileComponents/upLoad/Video';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'Grey',
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
        <Grid container spacing={4} className={classes.root}>
            <Avatar src="/broken-image.jpg"/>
            <Box
                sx={{
                    width: 400,
                    height: 400,
                    bgcolor: 'primary.dark',
                }}>
                <p>Name: {studList.name}</p>
                <p>Email: {studList.email}</p>
            </Box>
            <Box
                sx={{
                width: 300,
                height: 200,
                bgcolor: 'white',
                alignItems: 'center',
            }}>
            <Links/>
            <DocFile/>
            <PersBrev/>
            <Video/>
            </Box>
        </Grid>
    );

}
export default Profile;
