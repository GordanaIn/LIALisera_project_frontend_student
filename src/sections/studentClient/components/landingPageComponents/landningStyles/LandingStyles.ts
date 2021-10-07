import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>

        createStyles({
            bgImageContainer: {
                flexGrow: 1,
                width: '100vw',
                height: '100vh',
                backgroundImage: `url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: 0,
                padding: 0,
            },
            h1:{
                alignItems: 'center',
                textAlign: 'center',
                color: 'white'
            },
            paper:{
                background: 'transparent',
                color: 'white',
                paddingBottom: '5%',
                paddingLeft: '5%',
                paddingRight: '5%',
                textAlign: 'center'
            }
        })
    )
;
