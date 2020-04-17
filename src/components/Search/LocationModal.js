import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';

import './Search.css';

const useStyles = (theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 400,
    height: 400,
    background: 'linear-gradient(45deg, #43a047 30%, #cddc39 90%)',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 10),
    color: 'white',
    '& h2': {
      fontSize: '20px',
      marginBottom: '10px',
    },
    '& p': {
      fontSize: '18px',
      color: 'yellow',
      marginTop: '10px',
    },
    '& p:last-child': {
      fontSize: '20px',
      color: 'white',
      marginTop: '20px',
    },
    '& p:hover': {
      fontSize: '18px',
      color: 'white',
    },
    cursor: 'pointer',
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
                  <h2 id="transition-modal-title">Pick Up Area</h2>
                  <p id="transition-modal-description">
                    <div>
                      {/* IMP: Once we click on the button re-route to Search Component */}
                      <p>Area 1</p>
                      <p>Area 2</p>
                      <p>Area 3</p>
                      <p>Area 4</p>
                      <p>Area 5</p>
                      <p className="modal-back" onClick={this.back}>
                        Back
                      </p>
                    </div>
                  </p>
                </div>
              </Fade>
            </Modal>

            {/* Date and time pick up */}

            <div className="date-picker">
              <i className="fas fa-calendar-week"></i>
              <DatePicker
                selected={this.props.date}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="picker"
                placeholderText="From - Date and Time"
              />
            </div>
            {/* Date and time dropoff */}
            <div className="date-picker">
              <i className="fas fa-calendar-week"></i>
              <DatePicker
                selected={this.props.date}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="picker"
                placeholderText="To - Date and Time"
              />
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
