import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Navbar from '../homePage/Navbar/Navbar';

// icons
import RoomIcon from '@material-ui/icons/Room';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles((theme) => ({
  homePage: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    marginTop: '-100px',
  },
  container: {
    overflow: 'none',
    scroll: 'none',
    // display: 'flex',
    width: '100%',
    height: '700px',
    marginTop: '100px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
      marginLeft: '0px',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '700px',
    marginLeft: '50px',
    padding: '50px 20px',
    backgroundColor: '#EEEEEE',
    borderRadius: '30px',
    '& > h1': {
      color: '#178A35',
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'transparent',
      padding: '50px 20px',
      width: '100%',
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
      display: 'none',
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
    [theme.breakpoints.down('lg')]: {
      width: '609px',
      height: '503px',
      position: 'fixed',
      top: '263px',
      right: '10px',
    },

    [theme.breakpoints.down('md')]: {
      width: '469px',
      height: '403px',
      position: 'fixed',
      top: '420px',
    },

    [theme.breakpoints.down('sm')]: {
      width: '380px',
      height: '330px',
      position: 'fixed',
      top: '420px',
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

  // Styles of popover button
  searchBtnMob: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
    margin: '20px 0px',
    fontSize: '14px',
    fontWeight: '600',
  },
  icons: {
    margin: '0px 5px',
    color: '#2C9247',
  },
  backgroundGreenBG: {
    position: 'absolute',
    top: '0',
    right: '0',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  bottomStrip: {
    position: 'absolute',
    top: '600px',
    left: '0',
    right: '0',
    width: '100%',
    height: '100px',
    zIndex: '-1',
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
  },

  topStrip: {
    position: 'absolute',
    top: '12px',
    width: '100px',
    right: '103px',
    zIndex: '-2',
    height: '530px',
    [theme.breakpoints.down('sm')]: {
      width: '60px',
      top: '75px',
      height: '250px',
    },
  },
  topStripMobile: {
    position: 'fixed',
    width: '60px',
    top: '323px',
    right: '103px',
    height: '250px',
    zIndex: '-2',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  ellipse: {
    position: 'fixed',
    left: '0',
    top: '455px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sectionAchievement: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sectionAchievementDiv: {
    fontSize: '15px',
    fontWeight: '600',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > p': {
      margin: '20px 0px',
    },
  },
  sectionChoose: {
    position: 'absolute',
    marginTop: '100px',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [drawerOpen, setdrawerOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handledrawerOpen = () => {
    setdrawerOpen(true);
  };

  const handledrawerClose = () => {
    setdrawerOpen(false);
  };

  const openLocationClose = () => {
    setOpenLocation(false);
  };

  const handleOpenLocation = () => {
    setOpenLocation(true);
    setdrawerOpen(false);
  };

  return (
    <div className={classes.homePage}>
      <div className={classes.container}>
        <Navbar />
        <div className={classes.search}>
          <div className={classes.paper}>
            <h1>Self Drive Car Rental</h1>
            <h3>Book your car now</h3>
            {/* City Button for mob */}
            <Button
              variant="contained"
              className={classes.searchBtnMob}
              onClick={handledrawerOpen}
            >
              <RoomIcon />
              <p>&nbsp;&nbsp;&nbsp;Enter the pick up address</p>
            </Button>
            {/* City Button for desktop */}
            <Button
              variant="contained"
              className={classes.searchBtn}
              onClick={handleOpen}
            >
              <RoomIcon />
              <p>&nbsp;&nbsp;&nbsp;Enter the pick up address</p>
            </Button>
            {/* Drawer from bottom for Mobile */}
            <div className="popover">
              {/* Drawer for city */}
              <Drawer
                anchor="bottom"
                open={drawerOpen}
                onClose={handledrawerClose}
              >
                <div>
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
                      onClick={handleOpenLocation}
                    >
                      <ListItemText primary="Bangalore" />
                    </ListItem>

                    <ListItem
                      button
                      className={classes.listItem}
                      onClick={handleOpenLocation}
                    >
                      <ListItemText primary="Pune" />
                    </ListItem>

                    <ListItem
                      button
                      className={classes.listItem}
                      onClick={handleOpenLocation}
                    >
                      <ListItemText primary="Mumbai" />
                    </ListItem>

                    <ListItem
                      button
                      className={classes.listItem}
                      onClick={handleOpenLocation}
                    >
                      <ListItemText primary="Goa" />
                    </ListItem>
                  </List>
                </div>
              </Drawer>
              {/* Locations */}
              <Drawer
                anchor="bottom"
                open={openLocation}
                onClose={openLocationClose}
              >
                <div>
                  <List
                    component="nav"
                    aria-label="main header folders"
                    className={classes.headerList}
                  >
                    <ListSubheader
                      className={classes.header}
                    >{`Select Location`}</ListSubheader>
                  </List>

                  <List
                    component="nav"
                    aria-label="main list folders"
                    className={classes.list}
                  >
                    <ListItem button className={classes.listItem}>
                      <ListItemText primary="MG Road" />
                    </ListItem>

                    <ListItem button className={classes.listItem}>
                      <ListItemText primary="New orleans" />
                    </ListItem>

                    <ListItem button className={classes.listItem}>
                      <ListItemText primary="Byculla" />
                    </ListItem>
                  </List>
                </div>
              </Drawer>
            </div>
            {/* Modal for desktop */}
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
                    <ListItemText primary="Bangalore" />
                  </ListItem>

                  <ListItem button className={classes.listItem}>
                    <ListItemText primary="Pune" />
                  </ListItem>

                  <ListItem button className={classes.listItem}>
                    <ListItemText primary="Mumbai" />
                  </ListItem>

                  <ListItem button className={classes.listItem}>
                    <ListItemText primary="Goa" />
                  </ListItem>

                  <ListItem button className={classes.listItem}>
                    <ListItemText primary="Chennai" />
                  </ListItem>
                </List>
              </div>
            </Modal>

            <div className={classes.inputs}>
              <div>
                <div>
                  <EventIcon className={classes.icons} />
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
                  <EventIcon className={classes.icons} />
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
            <Link to="/find">
              <Button variant="contained" className={classes.findBtn}>
                <p>Find</p>
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img
            className={classes.homeImage}
            src="img/fellacarzNew.png"
            alt="Fellacarz"
          />
          <img
            src="img/landingGreebBg.png"
            className={classes.backgroundGreenBG}
            alt="Fellacarz-bg"
          />

          <img
            src="img/bottomStrip.png"
            className={classes.bottomStrip}
            alt="Fellacarz-bg"
          />

          <img
            src="img/topStrip.png"
            className={classes.topStrip}
            alt="Fellacarz-bg"
          />
          <img
            src="img/topStrip.png"
            className={classes.topStripMobile}
            alt="Fellacarz-bg"
          />

          <img
            src="img/ellipse.png"
            className={classes.ellipse}
            alt="Fellacarz-bg"
          />
        </div>
      </div>
      {/* Fellacarz achievement section */}
      <div className={classes.sectionAchievement}>
        <div className={classes.sectionAchievementDiv}>
          <img src="img/userIcon.png" alt="User Icon" />
          <p>10K+ Happy Customers</p>
        </div>
        <div className={classes.sectionAchievementDiv}>
          <img src="img/pinIcon.png" alt="Pin Icon" />
          <p>5 Lakh+ Travelled</p>
        </div>
        <div className={classes.sectionAchievementDiv}>
          <img src="img/starIcon.png" alt="Star Icon" />
          <p>4.8/5 Rated On Google</p>
        </div>
      </div>
      {/* Why choose section */}
      <div className={classes.sectionChoose}>
        <div>
          <h3>Why Choose Fellacarz? 1</h3>
        </div>
      </div>

      <div className={classes.sectionChoose2}>
        <div>
          <h3>Why Choose Fellacarz? 2</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
