import React from 'react'
import {Link, Switch, Route, withRouter} from 'react-router-dom'
import './User.css'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Radio from '@material-ui/core/Radio';


const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(20),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

      function User(props) {
    const classes = useStyles();
    
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <VerifiedUserOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
            <form>
            <div>
                <h3>
                <label for="signin">Signin:</label>
                <input id="signin" name="choice" type="radio"/>
                </h3>
            </div>
            <div>
                <h3>
                <label for="sigout">SignOut:</label>
                <input id="signout" name="choice" type="radio"/>
                </h3>
            </div>
            <div>
                <h3>
                <label for="leave">Take-Leave:</label>
                <input id="leave" name="choice" type="radio"/>
                </h3>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={time}
            >
              Go!
            </Button>
            </form>
  </Paper>
  </Container>
  );
  function time(){
            var d = Date();
            var a = d.toString()
            alert("User signIn Date and Time => " + a)
  }
 

}

export default User;