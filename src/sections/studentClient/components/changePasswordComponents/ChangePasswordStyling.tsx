import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                '& > *': {margin: theme.spacing(8)},
            },
            h1: {
                textAlign: 'center',
                backgroundColor: '#3f51b5',
                color: 'white',
                marginBlockStart: 0,
            },
            label: {
                textAlign: 'left',
                marginLeft: 10,
                padding: 2,
                float: 'left',
                ['@media (min-width:465px)']: {
                    marginBottom: 10
                }
            },
            textBox: {
                marginRight: 10,
                ['@media (min-width:465px)']: {
                    marginBottom: 10
                },
                ['@media (max-width:464px)']: {
                    marginLeft: 10
                }
            },
            button: {
                textAlign: 'center',
                // marginLeft: 100,
                marginBottom: 10
            },

            paper: {
                width: 400,
                height: 'auto',
                background: 'white'
            },
            gridContainer: {
                display: 'grid',
                ['@media (min-width:465px)']: {
                    gridTemplateColumns: '1fr 1fr',
                    gridGap: 20
                },
                ['@media (max-width:464px)']: {
                    gridTemplateRows: 'auto auto auto',
                }
            }
        }
    )
);

