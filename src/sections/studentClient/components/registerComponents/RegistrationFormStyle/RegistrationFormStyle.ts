import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                '& > *': {
                    margin: theme.spacing(8),
                },
            },
            h1:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',

            },
            label:{
                textAlign:'left',
                marginLeft:10,
            },
            h3:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',
            },
            p:{
                textAlign:'left',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft:80,
                fontsize: 15,
            },
            paper:{
                alignItems: 'center',
                justifyContent: 'center',
                width:400,
                height:850,
            },
            username:{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 100,
                marginTop: 30,
            },
            password:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 100,
            },
            button:{
                textAlign:'center',
                marginLeft:100,
                marginTop: 10,
                color:"#26e0b6"
            },
            textBox:{
                alignItems: 'center',
                marginTop: 10,
            },
            edit:{
                marginLeft:50
            },
            delete:{
               marginLeft:35
            }
        }),
    );