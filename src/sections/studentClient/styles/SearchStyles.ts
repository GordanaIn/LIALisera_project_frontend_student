
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Theme} from "@mui/material/styles";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            flexDirection: 'column',
            alignItems: "center",
        },
        root2: {
            flexGrow: 2,
            maxWidth: 752,
            alignItems: "center"
        },
        demo: {
            backgroundColor:"#5e0d0d",
            alignItems: "center",
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
        paper: {
            padding: theme.spacing(6),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            alignItems: "center",
        },
        div: {
            alignItems: "center",
            display: 'flex',
            justifyContent: 'center',
        },
        div2: {
            alignItems: "center",
            justifyContent: 'center',

        },
        input: {
            alignItems: "center",
        },
        button1: {
            alignItems: "center",
            margin: theme.spacing(1),
            marginLeft: 260,
            marginTop: -72
        },
        grid: {
            alignItems: "center",
            marginLeft: -50,
            marginTop:20
        },
    }),
);

