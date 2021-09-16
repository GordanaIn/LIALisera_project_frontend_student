import React, {FC, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {useStyles} from "./favoriteStyles/FavoriteStyles";
import { Paper } from "@material-ui/core";

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}
const FavoriteList: FC<{}> = () => {
    const classes = useStyles(),
        [favorite, setFavorite] = useState(false),
        [secondary, setSecondary] = useState(false),
        [loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    },[]);



    return !loading ? (
        <div className={classes.root}>
            <h1 className={classes.title}>Favorite List of LIA</h1>

            <Grid container spacing={10}>
                <Grid item xs={12} md={12}>
                    <Paper className={classes.paper}>
                        <List style={{alignItems: "center"}} >
                            {generate(

                                <ListItem className={classes.textList}>
                                    <ListItemText
                                        primary="Javautvecklare"
                                        secondary={secondary ? 'Secondary text' : null}

                                    />

                                    <ListItemSecondaryAction  >
                                        <FormControlLabel
                                            control={
                                                <Checkbox style={{alignItems: "center"}}
                                                    checked={favorite}
                                                    icon={<FavoriteBorderIcon />}
                                                    checkedIcon={<FavoriteIcon />}
                                                    onChange={(e) => setFavorite(e.target.checked)}
                                                    inputProps={{
                                                        'aria-label': 'secondary checkbox'
                                                    }}
                                                />
                                            }

                                            label=""
                                        />
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    ):(
        <div>Helo</div>
    );
}
export default FavoriteList;
