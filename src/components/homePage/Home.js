import React, { useState } from 'react';
import LocationModal from './LocationModal';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  container: {
    overflowY: 'none',
    scroll: 'none',
    display: 'flex',
    marginTop: '100px',
    justifyContent: 'center',
    marginLeft: '-50px',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px',
      marginLeft: '0px',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 20px',
    backgroundColor: '#EEEEEE',
    '& > h1': {
      color: '#178A35',
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: '#F1FCF4',
      padding: '20px 30px',
      '& > h1': {
        fontSize: '22px',
      },
      '& > h3': {
        fontSize: '16px',
      },
    },
  },
  buttonHolder: {
    display: 'flex',
    alignItems: 'center',
  },
  searchBtn: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '600',
    backgroundColor: 'white',
    padding: '10px 10px',
    margin: '20px 0px',
    width: '100%',
    '& > i': {
      fontSize: '20px',
      color: '#2E7240',
    },
    [theme.breakpoints.down('md')]: {
      margin: '20px 0px',
      fontSize: '14px',
      '& > i': {
        marginRight: '10px',
        fontSize: '20px',
        color: '#2E7240',
      },
    },
  },
  inputs: {
    display: 'flex',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      margin: '5px 0px',
    },

    '& > div > div > i': {
      margin: '0px 10px',
      fontSize: '20px',
      color: '#2E7240',
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  form: {
    backgroundColor: 'white',
    padding: '10px 10px',

    [theme.breakpoints.down('md')]: {
      padding: '2px 10px',
    },
  },
  findBtn: {
    marginTop: '20px',
    width: '200px',
    backgroundColor: '#2C9247',
    color: 'white',
    borderRadius: '10px',
    fontSize: '20px',
    fontWeight: '700',
    height: '54px',
    '&:hover': {
      backgroundColor: '#1A8035',
    },
    [theme.breakpoints.down('md')]: {
      height: '34px',
      fontSize: '14px',
    },
  },
  homeImage: {
    width: '700px',
    height: '600px',
    [theme.breakpoints.down('md')]: {
      width: '320px',
      height: '220px',
    },
  },
  // Styles for modal
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  paperModal: {
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
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Proceed to next step of city modal
  const nextStep = () => {
    setStep(1);
  };

  // Go back to prev step of city modal
  const prevStep = () => {
    setStep(0);
  };

  const continued = (e) => {
    e.preventDefault();
    nextStep();
  };

  switch (step) {
    case 1:
      return (
        <LocationModal
          prevStep={prevStep}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      );
  }

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <Paper elevation={3} className={classes.paper}>
          <h1>Self Drive Car Rental</h1>
          <h3>Book your car now</h3>

          <Button
            variant="contained"
            className={classes.searchBtn}
            onClick={handleOpen}
          >
            <i className="fas fa-thumbtack"></i>
            <p>&nbsp;&nbsp;&nbsp;Enter the pick up address</p>
          </Button>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <div className={classes.paperModal}>
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
                <ListItem button className={classes.listItem}>
                  <ListItemText primary="Bangalore" onClick={continued} />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <ListItemText primary="Pune" onClick={continued} />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <ListItemText primary="Mumbai" onClick={continued} />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <ListItemText primary="Goa" onClick={continued} />
                </ListItem>

                <ListItem button className={classes.listItem}>
                  <ListItemText primary="Chennai" onClick={continued} />
                </ListItem>
              </List>
            </div>
          </Modal>

          <div className={classes.inputs}>
            <div>
              <div>
                <i className="fas fa-calendar-day"></i>
              </div>
              <form className={classes.form} noValidate>
                <TextField
                  id="datetime-local"
                  label="From: Date & Time "
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>
            <div>
              <div>
                <i className="fas fa-calendar-day"></i>
              </div>
              <form className={classes.form} noValidate>
                <TextField
                  id="datetime-local"
                  label="To: Date & Time "
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </div>
          </div>
          <Button variant="contained" className={classes.findBtn}>
            <p>Find</p>
          </Button>
        </Paper>
      </div>
      <div>
        <img
          className={classes.homeImage}
          src="img/fellacarz-home.png"
          alt="Fellacarz"
        />
      </div>
    </div>
  );
};

export default Home;
