import { makeStyles, createStyles} from '@material-ui/core/styles';
import {Theme} from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                alignItems: 'center',
                margin: theme.spacing(5),
            },
        },
        input: {
            display: 'none',
        },
    }),
);
