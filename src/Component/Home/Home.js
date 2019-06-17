import React from 'react'
import {Link, Switch, Route, withRouter} from 'react-router-dom'
import './Home.css'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import CssBaseline from '@material-ui/core/CssBaseline';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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

      function Home(props) {
    const classes = useStyles();
    
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <VerifiedUserOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome To TechSavvy!
          </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              component={Link}
              to="/Login"
              className={classes.submit}>
              Login   
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              component={Link}
              to="/Signup"
              className={classes.submit}>
              Register   
            </Button>
  </Paper>
  </Container>
  );
 

}

export default Home;