import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Theme} from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) =>

        createStyles({
            bgImageContainer: {
                flexGrow: 1,
                width: '100vw',
                height: '100vh',
                backgroundImage: `url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: 0,
                padding: 0,
            },
            h1: {
                alignItems: 'center',
                textAlign: 'center',
                color: 'white'
            },
            h2: {
                alignItems: 'center',
                textAlign: 'center',
                color: 'black'
            },
            titel:{
                alignItems: 'center',
                textAlign: 'center',
                color: 'black'
            },
            text:{
                alignItems: 'center',
                textAlign: 'center',
                color: 'black',

            },
            paper: {
                background: 'transparent',
                color: 'white',
                paddingBottom: '5%',
                paddingLeft: '5%',
                paddingRight: '5%',
                textAlign: 'center'
            },
            paper2:{
                background: 'transparent',
                color: 'white',
                border:59,
                borderRadius:20,
                borderColor:"#4C525C",
                marginTop:'10%',
                marginLeft:'5%',
                marginRight:'50%',
            },
            img:{
                alignItems: "center",
                width:500,
                height:500,
            },
            con:{
                alignItems: 'center',
                marginTop:'-18%',
                marginLeft:'50%',
            },
            btn:{

                underline:"none",
                alignItems: 'center',
                borderRadius: 20,
                marginBottom:'10%'
            }
        })
    )
;
