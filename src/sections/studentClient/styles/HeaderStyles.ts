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
            },
            navBarMenuColor: {
                color: '#fafafa'
            },
            linkDecoration: {
                textDecoration: 'none',
                color: 'inherit'
            },
            dropDownMenuColor: {
                color: '#188dee'
            },
            paper: {
                padding: theme.spacing(2),
                margin: 'auto',
                maxWidth: 500,
            },
            grid: {
                justify:"center",
                alignItems:"center",
                fontSize:20,
                marginLeft:50,
                marginTop: 30
            },
            image: {
                width: 138,
                height: 138,
                alignItems: 'center',
                justifyItems:"center",
            },
            img: {
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
                alignItems: 'center',
                justifyItems:"center",

            },
            footer:{
                alignItems:"center",
                marginBottom:0
            },
            div2:{
                justifyItems:"center",
                alignItems:"center",

            },
            div3:{
                justifyItems:"center",
                alignItems:"center",
                marginTop:-140,
                marginLeft:1250

            },
            appBar:{
                height:110,
                marginTop: -191,
                alignItems:"center",

            },
            navBarMenu:{
                color: '#fafafa',
                marginTop:20,
                marginLeft:40

            },
            logo1: {
                width: 220,
                height: 140,
                marginLeft: 20
            },

        }),
  );
