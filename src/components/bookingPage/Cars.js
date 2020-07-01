import React, { useState, Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
// icons
import RoomIcon from '@material-ui/icons/Room';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  cars: {
    width: '100%',
    height: '240px',
    overFlow: 'none',
    margin: '10px 0px',
  },
  skeleton: {
    width: '100%',
    height: '240px',
    overFlow: 'none',
    margin: '10px 0px',
  },
  book: {
    display: 'flex',
    flexDirection: 'row',
    '& > h2': {
      fontSize: '22px',
    },
    '& > i': {
      fontSize: '30px',
    },
  },

  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#fff',
    padding: '10px',
  },

  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  box: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid green',
    marginTop: '20px',
    marginRight: '5px',
    padding: '5px 20px',
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    color: '#fff',
    backgroundColor: ' #2C9247',
    border: '2px solid green',
    borderRadius: '10px',
    width: '168px',
    height: '52px',
    fontSize: '18px',
    fontWeight: '600',
    marginTop: '20px',
  },
  icons: {
    margin: '0px 5px',
    color: '#2C9247',
  },
  drawer: {},
  drawerCars: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',

    '& > h3': {
      marginBottom: '10px',
      color: '#2C9247',
    },
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '20px 0px',
      backgroundColor: '#F2F2F2',
      width: '300px',
      height: '80px',
      padding: '5px 10px',
      borderRadius: '5px',
      '& > h3': {
        display: 'flex',
        justifyContent: 'space-between',
        '& > div': {
          display: 'flex',
          alignItems: 'center',
        },
      },
      '& > p': {
        marginLeft: '30px',
      },
    },
  },
  btnWrapper: {
    display: 'flex',
  },
  doneBtn: {
    width: '100px',
    backgroundColor: '#2C9247',
    borderRadius: '5px',
    color: 'white',
    fontSize: '15px',
    fontWeight: '700',
    marginLeft: '50px',
  },

  cancelBtn: {
    backgroundColor: 'white',
    color: '#2C9247',
    border: '1px solid #2C9247',
    borderRadius: '5px',
    width: '100px',
    fontSize: '15px',
    fontWeight: '700',
    marginRight: '50px',
  },
}));

const Cars = () => {
  const classes = useStyles();
  const [drawerOpen, setdrawerOpen] = useState(false);
  const [loading, setloading] = useState(true);

  const handleDrawerOpen = () => {
    setdrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setdrawerOpen(false);
  };

  return (
    <Fragment>
      {loading ? (
        <div className={classes.skeleton}>
          <div className={classes.cars}>
            <div className={classes.root}>
              <Paper className={classes.paper} elevation={3}>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  className={classes.grid}
                >
                  <Grid item lg={3} md={3}>
                    <Skeleton
                      animation="wave"
                      variant="square"
                      height="200px"
                    />
                  </Grid>
                  <Grid item lg={6} md={6}>
                    <Skeleton
                      animation="wave"
                      height="30px"
                      style={{ marginBottom: '5px', marginTop: '-30px' }}
                    />
                    <Skeleton animation="wave" height="30px" />

                    <div
                      className={classes.boxContainer}
                      style={{ margin: '20px' }}
                    >
                      <Skeleton animation="wave">
                        <h4>21917</h4>
                        <p>1302 kms</p>
                      </Skeleton>

                      <Skeleton animation="wave">
                        <h4>21917</h4>
                        <p>1302 kms</p>
                      </Skeleton>
                      <Skeleton animation="wave">
                        <h4>21917</h4>
                        <p>1302 kms</p>
                      </Skeleton>
                    </div>
                  </Grid>
                  <Grid item lg={3} md={3}>
                    <Skeleton
                      animation="wave"
                      height="60px"
                      width="120px"
                      style={{ marginTop: '-20px', marginLeft: '20px' }}
                    >
                      <RoomIcon className={classes.icons} />

                      <ArrowForwardIosIcon className={classes.icons} />
                    </Skeleton>
                    <Drawer
                      anchor="bottom"
                      open={drawerOpen}
                      onClose={handleDrawerClose}
                      className={classes.drawer}
                    >
                      <div className={classes.drawerCars}>
                        <h3>Location</h3>
                        <div>
                          <h3>
                            <div>
                              <RoomIcon className={classes.icons} />
                              0.6kms
                            </div>
                            <ArrowForwardIosIcon className={classes.icons} />
                          </h3>
                          <p>from railway station</p>
                        </div>
                        <div>
                          <h3>
                            <div>
                              <RoomIcon className={classes.icons} />
                              0.6kms
                            </div>
                            <ArrowForwardIosIcon className={classes.icons} />
                          </h3>
                          <p>from railway station</p>
                        </div>
                        <span className={classes.btnWrapper}>
                          <Button
                            variant="contained"
                            className={classes.cancelBtn}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="contained"
                            className={classes.doneBtn}
                          >
                            Done
                          </Button>
                        </span>
                      </div>
                    </Drawer>

                    <Link to="/book-car">
                      <Skeleton
                        animation="wave"
                        style={{ marginTop: '20px', marginLeft: '20px' }}
                      >
                        <Button variant="contained" className={classes.button}>
                          Book
                        </Button>
                      </Skeleton>
                    </Link>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.cars}>
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
              <Grid
                container
                direction="row"
                spacing={2}
                className={classes.grid}
              >
                <Grid item lg={3} md={3}>
                  <img
                    src="img/nexon.png"
                    className={classes.carImage}
                    alt="carImage"
                  />
                </Grid>
                <Grid item lg={6} md={6}>
                  <h2>Tata Nexon</h2>
                  <p>SUV | 5Seater | Diesel | Without Fuel</p>
                  <div className={classes.boxContainer}>
                    <Box className={classes.box} component="span">
                      <h4>21917</h4>
                      <p>1302 kms</p>
                    </Box>
                    <Box className={classes.box} component="span">
                      <h4>21917</h4>
                      <p>1302 kms</p>
                    </Box>
                    <Box className={classes.box} component="span">
                      <h4>21917</h4>
                      <p>1302 kms</p>
                    </Box>
                  </div>
                </Grid>
                <Grid item lg={3} md={3}>
                  <h2 onClick={handleDrawerOpen}>
                    <RoomIcon className={classes.icons} />
                    0.6kms
                    <ArrowForwardIosIcon className={classes.icons} />
                  </h2>
                  <Drawer
                    anchor="bottom"
                    open={drawerOpen}
                    onClose={handleDrawerClose}
                    className={classes.drawer}
                  >
                    <div className={classes.drawerCars}>
                      <h3>Location</h3>
                      <div>
                        <h3>
                          <div>
                            <RoomIcon className={classes.icons} />
                            0.6kms
                          </div>
                          <ArrowForwardIosIcon className={classes.icons} />
                        </h3>
                        <p>from railway station</p>
                      </div>
                      <div>
                        <h3>
                          <div>
                            <RoomIcon className={classes.icons} />
                            0.6kms
                          </div>
                          <ArrowForwardIosIcon className={classes.icons} />
                        </h3>
                        <p>from railway station</p>
                      </div>
                      <span className={classes.btnWrapper}>
                        <Button
                          variant="contained"
                          className={classes.cancelBtn}
                        >
                          Cancel
                        </Button>
                        <Button variant="contained" className={classes.doneBtn}>
                          Done
                        </Button>
                      </span>
                    </div>
                  </Drawer>
                  <p>from railway station</p>
                  <Link to="/book-car">
                    <Button variant="contained" className={classes.button}>
                      Book
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Cars;
