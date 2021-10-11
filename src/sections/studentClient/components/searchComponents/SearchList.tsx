import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import List from '@material-ui/core/List';
import IAdds from "../../interfaces/IAdds";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 2,
            maxWidth: 752,
            alignItems: "center"
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
            alignItems: "center",
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    }),
);



export function SearchList(props: IAdds) {

    const classes = useStyles();
    const [favorite, setFavorite] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const {
        title,
        description,
        id,
        updated,
        created,
        favourite,
    } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                    <div className={classes.demo}>
                        <List style={{alignItems: "center"}}>

                                <ListItem style={{alignItems: "center", right: 30}}>
                                    <ListItemText
                                        primary={title}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <ListItemSecondaryAction style={{alignItems: "center", marginRight: -50}}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={favorite}
                                                    icon={<FavoriteBorderIcon/>}
                                                    checkedIcon={<FavoriteIcon/>}
                                                    onChange={(e) => setFavorite(e.target.checked)}
                                                    inputProps={{
                                                        'aria-label': 'secondary checkbox'
                                                    }}/>}
                                            label=""
                                        />
                                    </ListItemSecondaryAction>
                                </ListItem>
                            <div>
                                <text>{description}</text>
                            </div>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default SearchList;
