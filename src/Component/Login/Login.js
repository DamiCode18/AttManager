import React, {useState} from 'react'
import Div from '../HOC/Div'
import {Switch, Route, withRouter} from 'react-router-dom'
import './Login.css'
import UserProfile from '../User/User'
// import firebase from 'firebase'
import { Redirect } from 'react-router-dom';
import firebase from '../firebase'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
      marginTop: theme.spacing(8),
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

  export default function SignIn(props) {
        const [email, setEmail] = useState('')
       const [password, setPassword] = useState('')
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          <form className={classes.form} noValidate
          onSubmit={e=>e.preventDefault() && false}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email} onChange={e=>setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password} onChange={e=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={login}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>onSubmit={e=>e.preventDefault() && false}
              </Grid>
              <Grid item>
                <Link href="/Signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
  </div>
  </Container>
  );
  async function login(){
    try{
        await firebase.login(email, password)
        props.history.replace('/User')

    } catch(error){
        alert(error.message)
        props.history.replace('/Login')
    }

}
  }


//         return(
//             <Div>
            
                    // <div className="card logincard mb-3">
                    //     <div className="card-header"><i className="fas fa-lock mr-2"/>Login</div>
                    //     <div className="card-body">
// <form onSubmit={e=>e.preventDefault() && false}>
//     <div className="form-group">
//     <label htmlFor="email">Email*</label>
//     <input value={email} onChange={e=>setEmail(e.target.value)}
//     type="email"
//     autoFocus
//     required 
//     id="email"
//     className="form-control form-control" 
//     name="email" 
//     placeholder="Enter Your Email"/>
//     </div>
//     <div className="form-group">
//     <label htmlFor="password">Password*</label>
//     <input value={password} onChange={e=>setPassword(e.target.value)} 
//     type="password"
//     required
//     id="password" 
//     className="form-control form-control" 
//     name="password" 
//     placeholder="Enter Your Password"/>
//     </div>

//     <button type="submit" className="btn btn-primary" 
//     onClick={login}>Sign In</button>
//     <div className="m-auto"><p>You Don't Have An Account yet?</p>
//     <Link to="/Signup" className="btn btn-danger"> Create Account </Link>
//     </div>
// </form>
//       </div>
//           </div>
//              </Div> 
//         );

    