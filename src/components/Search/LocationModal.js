import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';

import './Search.css';

const useStyles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  textField: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(1),
    width: 220,
  },
  paper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'auto',
    maxWidth: 400,
    maxHeight: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 10),
    color: 'white',
    outline: 'none',
    cursor: 'pointer',
  },

  header: {
    fontSize: '22px',
    marginTop: '-8px',
    fontWeight: '700',
    background: 'green',
    boxShadow: theme.shadows[3],
    color: 'white',
    height: '50px',
    textAlign: 'center',
  },

  list: {
    margin: '0',
    marginLeft: '0px',
    color: 'black',
    marginTop: '0px',
  },
  listItem: {
    '&:hover': {
      backgroundColor: 'green',
      color: 'white',
    },
  },
});

export class LocationModal extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { classes } = this.props;
    return (
      <div class="section section-search">
        <div className="search-container">
          <p class="lead">Self Drive Car Rental</p>

          <p class="lead-2">Book your Car now!</p>

          <div class="search">
            {/* City selector */}
            <div className="search-responsive">
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
                open={this.props.open}
                onClose={this.back}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={this.props.open}>
                  <div className={classes.paper}>
                    <div>
                      {/* IMP: Once we click on the button re-route to Search Component */}

                      <List
                        component="nav"
                        aria-label="main mailbox folders"
                        className={classes.list}
                      >
                        <ListSubheader
                          className={classes.header}
                        >{`Select Your Location`}</ListSubheader>
                        <ListItem button className={classes.listItem}>
                          <ListItemText primary="Koramangala" />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <ListItemText primary="Indiranagar" />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <ListItemText primary="M.G. Road" />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <ListItemText primary="HSR Layout" />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <ListItemText primary="Richmond Town" />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <ListItemText primary="Jayanagar" />
                        </ListItem>
                        <ListItem button className={classes.listItem}>
                          <ListItemText primary="BTM Layout" />
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </Fade>
              </Modal>
            </div>
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

export default withTheme(withStyles(useStyles)(LocationModal));
