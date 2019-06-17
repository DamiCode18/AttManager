import React from 'react'
import {Link, Switch, Route, withRouter} from 'react-router-dom'
import Div from '../HOC/Div'
import './User.css'
import Navbar from '../Navbar/Navbar'
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
        <Div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <VerifiedUserOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
            <form onSubmit={e=>e.preventDefault() && false}>
            <div>
                <h3>
                <label for="signin">SignIn    <i className="fa fa-chevron-right fa-xs"></i></label>
                <input className="ml-4" id="signin" name="choice" type="radio"/>
                </h3>
            </div>
            <div>
                <h3>
                <label for="sigout">SignOut  <i className="fa fa-chevron-right fa-xs"></i></label>
                <input className="ml-2" id="signout" name="choice" type="radio"/>
                </h3>
            </div>
            <div>
                <h3>
                <label for="leave">Leave    <i className="fa fa-chevron-right fa-xs"></i></label>
                <input className="ml-4" id="leave" name="choice" type="radio"/>
                </h3>
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={time}
              id={props.id}
            >
              Go!
            </Button>
            </form>
  </Paper>
  </Container>
  </Div>
  );


       
        
  function time(){
            var d = Date();
            var a = d.toString()
               alert("User clicked button at => " + a);
                console.log("User Date and Time => " + a);
                
            }
            
 

}

export default User;