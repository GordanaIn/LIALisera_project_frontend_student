import {createStyles, makeStyles} from "@material-ui/core/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) =>

createStyles({
    root: {
        flexGrow: 1,
    },
    navBarMenuButton: {
        marginLeft: theme.spacing(30),
    },
    navBarTitle: {
        flexGrow: 1,
        color:"#fff"
    },
    navBarMenuColor: {
        color: '#fafafa'
    },

    linkDecoration: {
        textDecoration: 'none'
    },
    dropDownMenuColor: {
        color: '#ffffff',
        backgroundColor:'#d3b03c',
        marginRight: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    logo: {
        width: 290,
        height:210,
        marginLeft:-20,
        marginTop: -10
    },
    div:{
        justify:"center",
        alignItems:"center",
        marginTop:-12,
        marginRight:20
    },


}),
)
;
