import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>

        createStyles({
            root: {
                marginTop:20,
                flexGrow: 1,
                alignItems:"center",
                backgroundColor: '#4f4bb0',
            },


            textList:{
                alignItems:"center",
                color:'#2f2f31',
                backgroundColor: '#e5e5ea',
                maxWidth:500,
                borderRadius:30,
                marginBottom:10,
            },
            title: {
                margin: theme.spacing(4, 0, 2),
                alignItems:"center",
                textAlign:'center',
                color:'#fff',
            },
            paper: {
                padding: theme.spacing(4),
                textAlign: 'center',
                color: theme.palette.text.secondary,
                alignItems: "center",
            },
        })
    )
;
