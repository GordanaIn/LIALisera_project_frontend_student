import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>

        createStyles({
            root: {
                marginTop:70,
                flexGrow: 1,
                alignItems:"center",
                backgroundColor: '#4C525C',
            },


            textList:{
                alignItems:"center",
                color:'#2f2f31',

                maxWidth:500,
                borderRadius:30,
                marginBottom:10,
                marginTop: -110
            },
            title: {
                margin: theme.spacing(4, 0, 2),
                alignItems:"center",
                textAlign:'center',
                color:'#fff',
            },
            paper: {
                padding: theme.spacing(33),
                textAlign: 'center',
                color: theme.palette.text.secondary,
                alignItems: "center",
            },
        })
  );
