import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
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
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import './Navbar.css';
import './NavbarPopup.css';
import { withStyles, fade } from '@material-ui/core/styles';
import { withTheme, createMuiTheme } from '@material-ui/core/styles';
import Signup from './Signup';
import Login from './Login';

const useStyles = (theme) => ({
  margin: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    '&:active': {
      outline: 'none', // override inline-style
    },
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

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
    maxHeight: '500px',
    border: '2px solid #000',
    padding: '30px',
    outline: 'none',
    marginLeft: '-10px',
  },
});

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      openLogin: false,
      openSignup: false,
    };
  }

  handleOpenLogin = () => {
    this.setState({ openLogin: true });
  };

  handleOpenSignUp = () => {
    this.setState({ openSignup: true });
  };

  handleCloseLogin = () => {
    this.setState({ openLogin: false });
  };

  handleCloseSignup = () => {
    this.setState({ openSignup: false });
  };
  render() {
    const { classes } = this.props;
    const { openLogin, openSignup } = this.state;
    return (
      <nav className="main-nav">
        <img src="img/white.png" alt="Fellacarz" className="logo" />
        <ul className="main-menu">
          <li>
            <a href="#">
              <Button type="button" className="city-selector">
                <span className="nav-links">Book now</span>
              </Button>
            </a>
          </li>
          <li>
            <a href="#">
              <Button type="button" className="city-selector">
                <span className="nav-links">Why Fellacarz</span>
              </Button>
            </a>
          </li>

          <li>
            <a href="#">
              <Button type="button" className="city-selector">
                <span className="nav-links">Contact</span>
              </Button>
            </a>
          </li>
          <li>
            <a href="#">
              <Button
                type="button"
                className="city-selector"
                onClick={this.handleOpenLogin}
              >
                <span className="nav-links">Login</span>
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openLogin}
                onClose={this.handleCloseLogin}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openLogin}>
                  <Login />
                </Fade>
              </Modal>
            </a>
          </li>

          <li>
            <a href="#">
              <Button
                type="button"
                className="city-selector"
                onClick={this.handleOpenSignUp}
              >
                <span className="signupLink">Sign up</span>
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openSignup}
                onClose={this.handleCloseSignup}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openSignup}>
                  <Signup />
                </Fade>
              </Modal>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withTheme(withStyles(useStyles)(Navbar));
