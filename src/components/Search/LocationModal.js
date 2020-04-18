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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(1),
    width: 200,
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
    padding: theme.spacing(0, 0, 10),
    color: 'white',
    cursor: 'pointer',
  },
  header: {
    fontSize: '22px',
    marginBottom: '10px',
    marginTop: '0',
    fontWeight: '700',
    background: 'white',
    boxShadow: theme.shadows[3],
    height: '50px',
    color: 'green',
    textAlign: 'center',
  },
  list: {
    margin: '0',
    color: 'black',
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
                      <ListItem button>
                        <ListItemText primary="Koramangala" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Indiranagar" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="M.G. Road" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="HSR Layout" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Richmond Town" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="Jayanagar" />
                      </ListItem>
                      <ListItem button>
                        <ListItemText primary="BTM Layout" />
                      </ListItem>
                    </List>
                  </div>
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

export default withTheme(withStyles(useStyles)(LocationModal));
