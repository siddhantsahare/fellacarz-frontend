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
    minHeight: '520px',
    border: '2px solid #000',
    padding: '30px',
    outline: 'none',
    marginLeft: '-10px',
  },

  root: {
    background: 'linear-gradient(to right, #00f260, #2C9247)',
    border: 0,
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },

  signinlink: {
    textAlign: 'center',
    margin: '10px auto',
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  avatar: {
    margin: theme.spacing(1),
    background: 'linear-gradient(to right, #00f260, #2C9247)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            classes={{ root: classes.root }}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item className={classes.signinlink}>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
