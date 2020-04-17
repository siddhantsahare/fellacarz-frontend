import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './Navbar.css';
import './NavbarPopup.css';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = (theme) => ({
  margin: {
    marginTop: '10px',
    margin: theme.spacing(0),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },

  paper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'auto',
    maxWidth: 400,
    maxHeight: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],

    color: 'white',
    cursor: 'pointer',
  },
});

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <nav className="main-nav">
        <img
          src="https://i.ibb.co/wwLhz98/logo.png"
          alt="Fellacarz"
          className="logo"
        />
        <ul className="main-menu">
          <li>
            <a href="#">Book Now</a>
          </li>
          <li>
            <a href="#">Why Fellacarz</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a onClick={this.handleOpen}>
              Login
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={this.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <div className={classes.margin}>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <AccountCircle />
                        </Grid>
                        <Grid item>
                          <TextField
                            id="input-with-icon-grid"
                            label="With a grid"
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Fade>
              </Modal>
            </a>
          </li>
          <li>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={this.handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <AccountCircle />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="input-with-icon-grid"
                          label="With a grid"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Fade>
            </Modal>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withTheme(withStyles(useStyles)(Navbar));
