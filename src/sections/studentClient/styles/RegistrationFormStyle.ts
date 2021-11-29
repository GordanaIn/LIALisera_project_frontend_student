import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Theme} from "@mui/material/styles";
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

                h1: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',

                },
                label: {
                    textAlign: 'left',
                    marginLeft: 10,
                },
                h3: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                },
                p: {
                    textAlign: 'left',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 80,
                    fontsize: 15,
                },
                paper: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 400,
                    height: 850,
                },
                username: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 50,
                    marginTop: 17,
                },
                password: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                    marginLeft: 50,
                },
                button: {
                    textAlign: 'center',
                    marginLeft: 100,
                    marginTop: 10,
                    backgroundColor:"#1bc008"
                },
                button6: {
                    color:"#fff",
                    textAlign: 'center',
                    marginLeft: 100,
                    marginTop: 10,
                    backgroundColor:"#c40606"
                },
                textBox: {
                    alignItems: 'center',
                    marginTop: 10,
                },
                edit: {
                    marginLeft: 50
                },
                delete: {
                    marginLeft: 35
                },
            content:{
                alignItems: 'center',
                justifyContent: 'center',
                width: 500,
                height: 500
            }

            }),
  );
