import {createStyles, makeStyles, Theme, withTheme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                '& > *': {margin: theme.spacing(8)},
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
                    justifyContent: 'center',
                    gridTemplateRows: 'auto auto auto',
                }
            },
            h1: {
                textAlign: 'center',
                backgroundColor: '#30AB02',
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
            buttonRow: {
                display: 'grid',
                grid: 'row',
                marginRight: 5,
                marginBottom: 5,
                ['@media (min-width:465px)']: {
                    float: 'right',
                },
                ['@media (max-width:464px)']: {
                    justifyContent: 'center',
                    marginTop: 15,
                    marginLeft: 5
                }
            },
            buttonCancel: {
                backgroundColor: '#ff401a',
                textAlign: 'center',
                marginRight: 5
            },
            buttonOK: {
                variant: 'outlined',
                size: 'small',
                backgroundColor: '#30AB02',
                textAlign: 'center',
            }
        }
    )
);