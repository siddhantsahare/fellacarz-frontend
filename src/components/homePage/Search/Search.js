import React, { Component } from '../../../../node_modules/react';
import { Link } from 'react-router-dom';
import LocationModal from './LocationModal';
import Modal from '../../../../node_modules/@material-ui/core/Modal';
import Fade from '../../../../node_modules/@material-ui/core/Fade';
import Backdrop from '../../../../node_modules/@material-ui/core/Backdrop';
import List from '../../../../node_modules/@material-ui/core/List';
import ListItem from '../../../../node_modules/@material-ui/core/ListItem';
import ListItemText from '../../../../node_modules/@material-ui/core/ListItemText';
import ListSubheader from '../../../../node_modules/@material-ui/core/ListSubheader';
import { withStyles } from '../../../../node_modules/@material-ui/core/styles';
import { withTheme } from '../../../../node_modules/@material-ui/core/styles';
import TextField from '../../../../node_modules/@material-ui/core/TextField';
import LoadMobileCitySelector from './LoadMobileCitySelector';
import Popover from '../../../../node_modules/@material-ui/core/Popover';

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
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(1),
    width: 220,
  },

  paper: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    maxWidth: 400,
    maxHeight: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    color: 'white',
    cursor: 'pointer',
    outline: 'none',
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
  headerList: {
    marginTop: '0px',
    top: '0',
  },
  list: {
    margin: '0',
    marginLeft: '10px',
    marginRight: '10px',
    color: 'black',
  },
  listItem: {
    '&:hover': {
      transition: 'all 0.4s ease-out',
      backgroundColor: 'green',
      color: 'white',
    },
  },
});

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      step: 0,
      open: false,
      mobCitySelectorClicked: false,
      anchorEl: null,
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, anchorEl: null });
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
  handleClearedDateChange = (e) => {
    this.setState({
      clearedDate: e.target.value,
    });
  };
  handleDateChange = () => {
    this.setState({
      selectedDate: new Date(),
    });
  };
  continue = (e) => {
    e.preventDefault();
    this.nextStep();
  };

  loadMobileCitySelector = (e) => {
    this.setState({
      mobCitySelectorClicked: true,
      anchorEl: e.currentTarget,
    });
  };
  render() {
    const { classes } = this.props;
    const { open, date, step, anchorEl, mobCitySelectorClicked } = this.state;
    const popoverOpen = Boolean(anchorEl);
    const id = popoverOpen ? 'simple-popover' : undefined;
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
        <img src="img/fellacarz-home.png" alt="bg" />
        <div className="search-container">
          <p class="lead">Self Drive Car Rental</p>

          <p class="lead-2">Book your Car now!</p>

          <div class="search">
            {/* City selector for Mobile & Tablet*/}
            <div className="search-mob">
              <button
                type="button"
                className="city-selector"
                onClick={this.loadMobileCitySelector}
              >
                Select City
              </button>
              <div className="popover">
                <Popover
                  id={id}
                  open={popoverOpen}
                  anchorReference="anchorPosition"
                  anchorPosition={{ top: 1000, left: 200 }}
                  anchorEl={this.anchorEl}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                >
                  {mobCitySelectorClicked && (
                    <LoadMobileCitySelector
                      mobCitySelectorClicked={mobCitySelectorClicked}
                    />
                  )}
                </Popover>
              </div>
            </div>
            {/* City selector for Desktop*/}
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
                      aria-label="main header folders"
                      className={classes.headerList}
                    >
                      <ListSubheader
                        className={classes.header}
                      >{`Select Your City`}</ListSubheader>
                    </List>

                    <List
                      component="nav"
                      aria-label="main list folders"
                      className={classes.list}
                    >
                      <ListItem
                        button
                        className={classes.listItem}
                        onClick={this.continue}
                      >
                        <ListItemText primary="Bangalore" />
                      </ListItem>

                      <ListItem
                        button
                        className={classes.listItem}
                        onClick={this.continue}
                      >
                        <ListItemText primary="Pune" />
                      </ListItem>

                      <ListItem
                        button
                        className={classes.listItem}
                        onClick={this.continue}
                      >
                        <ListItemText primary="Mumbai" />
                      </ListItem>

                      <ListItem
                        button
                        className={classes.listItem}
                        onClick={this.continue}
                      >
                        <ListItemText primary="Goa" />
                      </ListItem>

                      <ListItem
                        button
                        className={classes.listItem}
                        onClick={this.continue}
                      >
                        <ListItemText primary="Chennai" />
                      </ListItem>
                    </List>
                  </div>
                </Fade>
              </Modal>
            </div>

            {/* Date and time pick up */}

            <div className="date-picker">
              <i class="fas fa-calendar-alt"></i>
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
              <i class="fas fa-calendar-alt"></i>
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
              <Link to="/find">
                <button class="find">Find</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTheme(withStyles(useStyles)(Search));
