import React from 'react'
import {Link, Switch, Route, withRouter} from 'react-router-dom'
import Div from '../HOC/Div'
import './User.css'
// import Navbar from '../Navbar/Navbar'
import firebase from '../firebase'
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
    
        if(!firebase.getCurrentUsername()){
            alert("Please login first")
            props.history.replace('/login')
            return null
        }
    return (
        <Div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <VerifiedUserOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome, {firebase.getCurrentUsername().toUpperCase()}
          </Typography>
          <p id="signin"></p>
          <p id="signout"></p>
          <p id="leave"></p>
          <p id="date"></p>
            <form onSubmit={e=>e.preventDefault() && false}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={signInTime}
              id="button"
            >
              Sign In
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={signOutTime}
              id="button"
            >
              Sign Out
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="inherit"
              className={classes.submit}
              onClick={leaveTime}
              id="button"
            >
              Leave
            </Button>
            </form>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={logout}
            >
              Logout
            </Button>
  </Paper>
  </Container>
  </Div>
  )

  async function logout(){
                await firebase.logout()
                props.history.push('/')
}

       
        
  function signInTime(){
            var d = Date();
            var a = d.toString()
                console.log("User Signed In => " + a);
                var b = "SignIn Successful!"
                document.getElementById('signin').innerHTML=b
                document.getElementById('date').innerHTML=a
  }
  function signOutTime(){
    var d = Date();
    var a = d.toString()
        console.log("User Signed Out at => " + a);
        var b = "SignOut Successful!"
        document.getElementById('signout').innerHTML=b
        document.getElementById('date').innerHTML=a
}
    
function leaveTime(){
    var d = Date();
    var a = d.toString()
        console.log("User Requested Leave at => " + a)
        var b = "Your leave application is Successful and under review!"
        document.getElementById('leave').innerHTML=b
        document.getElementById('date').innerHTML=a
}           

}

export default User;