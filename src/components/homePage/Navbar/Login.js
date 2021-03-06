import React from '../../../../node_modules/react';
import Avatar from '../../../../node_modules/@material-ui/core/Avatar';
import Button from '../../../../node_modules/@material-ui/core/Button';
import CssBaseline from '../../../../node_modules/@material-ui/core/CssBaseline';
import TextField from '../../../../node_modules/@material-ui/core/TextField';
import FormControlLabel from '../../../../node_modules/@material-ui/core/FormControlLabel';
import Checkbox from '../../../../node_modules/@material-ui/core/Checkbox';
import Link from '../../../../node_modules/@material-ui/core/Link';
import Grid from '../../../../node_modules/@material-ui/core/Grid';
import LockOutlinedIcon from '../../../../node_modules/@material-ui/icons/LockOutlined';
import Typography from '../../../../node_modules/@material-ui/core/Typography';
import { makeStyles } from '../../../../node_modules/@material-ui/core/styles';
import Container from '../../../../node_modules/@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0),
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    maxWidth: '500px',
    maxHeight: '520px',
    border: '2px solid #000',
    padding: '30px',
    outline: 'none',
    marginLeft: '-10px',
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  root: {
    background: 'linear-gradient(to right, #00f260, #2C9247)',
    border: 0,
    color: 'white',
    height: 48,
    fontSize: '16px',
    fontWeight: '700',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #f3f3f3',
  },

  avatar: {
    margin: theme.spacing(1),
    background: 'linear-gradient(to right, #00f260, #2C9247)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  signuplink: {
    textAlign: 'center',
    margin: '10px auto',
  },
  forgetPass: {
    textAlign: 'center',
    margin: '10px auto',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
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
            classes={{ root: classes.root }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs className={classes.forgetPass}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item className={classes.signuplink}>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
