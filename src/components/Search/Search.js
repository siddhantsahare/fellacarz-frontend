import React, { Component } from 'react';
import LocationModal from './LocationModal';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import 'react-datepicker/dist/react-datepicker.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './Search.css';

const useStyles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(1),
    width: 300,
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
  header: {
    fontSize: '22px',
    marginTop: '0',
    fontWeight: '700',
    background: 'white',
    boxShadow: theme.shadows[3],
    color: 'green',
    height: '50px',
    textAlign: 'center',
  },
  list: {
    margin: '0',
    color: 'black',
  },
});

class Search extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      step: 0,
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // Proceed to next step of city modal
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step of city modal
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  continue = (e) => {
    e.preventDefault();
    this.nextStep();
  };

  render() {
    const { classes } = this.props;
    const { open, date, step } = this.state;
    switch (step) {
      case 1:
        return (
          <LocationModal
            prevStep={this.prevStep}
            open={open}
            date={date}
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
          />
        );
    }

    return (
      <div class="section section-search">
        <div className="search-container">
          <p class="lead">Self Drive Car Rental</p>

          <p class="lead-2">Book your Car now!</p>

          <div class="search">
            {/* City selector */}
            <button
              type="button"
              className="city-selector"
              onClick={this.handleOpen}
            >
              Select City
            </button>

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
                  <List
                    component="nav"
                    aria-label="main mailbox folders"
                    className={classes.list}
                  >
                    <ListSubheader
                      className={classes.header}
                    >{`Select Your City`}</ListSubheader>

                    <ListItem button onClick={this.continue}>
                      <ListItemText primary="Bangalore" />
                    </ListItem>

                    <ListItem button onClick={this.continue}>
                      <ListItemText primary="Pune" />
                    </ListItem>

                    <ListItem button onClick={this.continue}>
                      <ListItemText primary="Mumbai" />
                    </ListItem>

                    <ListItem button onClick={this.continue}>
                      <ListItemText primary="Goa" />
                    </ListItem>

                    <ListItem button onClick={this.continue}>
                      <ListItemText primary="Chennai" />
                    </ListItem>
                  </List>
                </div>
              </Fade>
            </Modal>

            {/* Date and time pick up */}

            <div className="date-picker">
              <form className={classes.container} noValidate>
                <TextField
                  id="datetime-local"
                  label="From - Date & Time"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  color="primary"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>
            {/* Date and time dropoff */}
            <div className="date-picker">
              <form className={classes.container} noValidate>
                <TextField
                  id="datetime-local"
                  label="To - Date & Time"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>

            <div className="find-button">
              <button class="find">Find</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTheme(withStyles(useStyles)(Search));
