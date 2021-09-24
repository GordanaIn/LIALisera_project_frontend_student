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
            button:{
                textAlign:'center',
                marginLeft:100,
                marginTop: 10,
            },
            textBox:{
                alignItems: 'center',
                marginTop: 10,
            }
        }),
    )
;