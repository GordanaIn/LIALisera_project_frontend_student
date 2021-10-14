import { Theme} from "@mui/material/styles";

import {makeStyles,createStyles,} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme:Theme) =>
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
            h3:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',
            },
            p:{
                textAlign:'left',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft:110,

            },
            textfield:{
                alignItems: 'center',
                justifyContent: 'center',

            },
            paper:{
                alignItems: 'center',
                justifyContent: 'center',
                width:1200,
                height:900,
            },
            username:{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 121,
                marginTop: 30,
            },
            password:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 121,
            },
            h1:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',
            },
            label:{
                textAlign:'left',
                marginLeft:20,
            },
            button:{

                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft:10,
                color: "secondary",
            },
            textBox:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
            },
            combo:{
                alignItems: 'center',
                marginTop: 20,
            },
            btn:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 140,
            },
            coloumn1:{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 380,
            },
            coloumn2:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -390,
                marginLeft: 650,
            }
        }),
    )
;
