import React, { Component } from 'react';
import LocationModal from './LocationModal';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import DatePicker from 'react-datepicker';
import Backdrop from '@material-ui/core/Backdrop';
import 'react-datepicker/dist/react-datepicker.css';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
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
    '& p:hover': {
      fontSize: '18px',
      color: 'white',
    },
    cursor: 'pointer',
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
                  <h2 id="transition-modal-title" className="model-title">
                    Select your city
                  </h2>

                  <p
                    id="transition-modal-description"
                    className="modal-city"
                    onClick={this.continue}
                  >
                    Bangalore
                  </p>

                  <p
                    id="transition-modal-description"
                    className="modal-city"
                    onClick={this.continue}
                  >
                    Pune
                  </p>
                </div>
              </Fade>
            </Modal>

            {/* Date and time pick up */}

            <div className="date-picker">
              <i className="fas fa-calendar-week"></i>
              <DatePicker
                selected={this.state.date}
                onChange={(date) => this.setState(date)}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="picker"
                placeholderText="From - Date and Time"
              />
            </div>
            {/* Date and time dropoff */}
            <div className="date-picker">
              <i className="fas fa-calendar-week"></i>
              <DatePicker
                selected={this.state.date}
                onChange={(date) => this.setState(date)}
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

export default withTheme(withStyles(useStyles)(Search));
