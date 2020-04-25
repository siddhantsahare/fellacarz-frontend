import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

// icons
import EventIcon from '@material-ui/icons/Event';
import RoomIcon from '@material-ui/icons/Room';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Slideshow library source: https://www.npmjs.com/package/react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    margin: '0',
    gridGap: '30px',
    gridTemplateColumns: '50% 50%',
    paddingTop: '20px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  backBtn: {
    zIndex: '3', //Z-index of Navbar is 10 and footer is 20
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grid1: {
    display: 'grid',
    gridTemplateRows: '75% 25%',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      gridTemplateRows: '50% 50%',
      gridGap: '10px',
      marginTop: '5px',
    },
  },

  gallery: {
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  // gallery for mob styles
  galleryMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  paper1: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '20px 20px',
    },
    justifyContent: 'space-between',
    backgroundColor: ' #F4FDF5',
    marginTop: '10px',
    padding: '20px 50px',
    '& > div': {
      display: 'flex',
    },
  },

  paper1inner1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > div': {
      display: 'flex',
      justifyContent: 'flex-start',
      '& > h4': {
        marginRight: '20px',
      },
      '& > p': {
        color: '#2C9247',
      },
    },
    [theme.breakpoints.down('md')]: {
      marginRight: '10px',
      '& > h4': {
        marginRight: '10px',
      },
    },
  },

  paper1inner2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > div': {
      display: 'flex',
      justifyContent: 'flex-start',
      '& > h4': {
        marginRight: '20px',
      },
      '& > p': {
        color: '#2C9247',
      },
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '10px',
      '& > h4': {
        marginRight: '10px',
      },
    },
  },

  iconspaper1: {
    margin: '0px 20px',
    color: '#2C9247',
    [theme.breakpoints.down('md')]: {
      margin: '0px 5px',
    },
  },

  // For Desktop
  imageBig: {
    maxWidth: '616px',
    maxHeight: '487px',
    width: '100%',
    height: '100%',
    border: '1px solid black',
    borderRadius: '10px',
    // [theme.breakpoints.down('md')]: {
    //   width: '100%',
    //   height: '60%',
    // },
    boxShadow: '4px 4px 4px 0px rgba(0,0,0,0.75)',
    background: 'linear-gradient(to right, #000, #fff)',
  },

  imageSmall: {
    width: '100%',
    maxWidth: '102px',
    maxHeight: '80px',
    borderRadius: '10px',
    marginBottom: '52px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.75)',
    background: 'linear-gradient(to right, #000, #fff)',
  },

  // Styles for Slideshow for mob

  grid2: {
    display: 'flex',
    marginTop: '20px',
    '& > h3': {
      fontSize: '15px',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
    },
    flexDirection: 'column',
  },

  carDetails: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  carDetailsMobile: {
    margin: '10px 0px',
    '& > h3': {
      fontSize: '15px',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  paper2: {
    backgroundColor: ' #F4FDF5',
    padding: '20px',
    margin: '10px 0px',
    '& > div': {
      display: 'flex',
      '& > span': {
        display: 'flex',
        justifyContent: 'flex-start',
      },
    },
    '& > div:last-child': {
      display: 'flex',
      flexDirection: 'column',
      '& > p': {
        marginLeft: '20px',
      },
      '& > span': {
        display: 'flex',
        justifyContent: 'flex-start',
      },
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: ' #F2F2F2',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > div': {
        display: 'flex',
        '& > span': {
          display: 'flex',
          justifyContent: 'flex-start',
        },
        '& > span > p': {
          fontSize: '14px',
        },
      },
      '& > div:last-child': {
        display: 'flex',

        flexDirection: 'column',
        '& > p': {
          marginLeft: '20px',
          fontSize: '14px',
        },
        '& > span': {
          display: 'flex',
          justifyContent: 'flex-start',
        },
      },
    },
  },
  icons: {
    margin: '0px 5px',
    color: '#2C9247',
  },
  promo: {
    display: 'flex',
    margin: '10px 0px',
    alignItems: 'center',
    backgroundColor: ' #f3f3f3',
    padding: '20px',
    color: 'gray',
    [theme.breakpoints.down('sm')]: {
      padding: '10px',
    },
  },
  accept: {
    color: 'gray',
    margin: '5px 0px',
  },
  tariff: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > div > span': {
      color: 'gray',
    },
  },

  deposit: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  total: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  proceedToPayButton: {
    width: '100%',
    height: '50px',
    color: 'white',
    fontSize: '18px',
    fontWeight: '700',
    backgroundColor: '#2C9247',
  },
  proceedToPayButtonMobileView: {
    height: '75px',
    width: '100%',
    position: 'fixed',
    padding: '10px 15px',
    justifyContent: 'space-between',
    left: '0',
    bottom: '0',
    backgroundColor: '#EEEEEE',
    display: 'flex',
    zIndex: '21', //Footer has z-index of 10
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    '& > div > p': {
      fontSize: '16px',
      fontWeight: '600',
    },
    '& > div > h3': {
      fontSize: '14px',
      fontWeight: '600',
    },
  },

  proceedToPayButtonMobile: {
    height: '50px',
    color: 'white',
    fontSize: '13px',
    fontWeight: '700',
    backgroundColor: '#2C9247',
  },
}));
const Car = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [state, setState] = React.useState({
    checkedGreen: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.backBtn}>
          <Link to="/find">
            <ArrowBackIcon />
          </Link>
        </div>
        <div className={classes.grid1}>
          {/* Gallery for desktop */}
          <div className={classes.gallery}>
            <div className={classes.imageSet}>
              <img
                src="img/nexon.png"
                alt="car"
                className={classes.imageSmall}
              />
              <img
                src="img/nexon.png"
                alt="car"
                className={classes.imageSmall}
              />
              <img
                src="img/nexon.png"
                alt="car"
                className={classes.imageSmall}
              />
              <img
                src="img/nexon.png"
                alt="car"
                className={classes.imageSmall}
              />
            </div>
            <div className={classes.imageMain}>
              <img src="img/nexon.png" alt="car" className={classes.imageBig} />
            </div>
          </div>
          {/* Gallery for Mobile */}
          <div className={classes.galleryMobile}>
            <Carousel
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
            >
              <div>
                <img src="https://picsum.photos/id/1018/250/150/" />
              </div>
              <div>
                <img src="https://picsum.photos/id/1015/250/150/" />
              </div>
              <div>
                <img src="https://picsum.photos/id/1019/250/150/" />
              </div>
            </Carousel>
          </div>
          {/* Car details for Desktop */}
          <div className={classes.carDetails}>
            <h3>Car details</h3>
            <Paper className={classes.paper1}>
              <div className={classes.paper1inner1}>
                <div>
                  <LocalGasStationIcon className={classes.iconspaper1} />
                  <h4>Fuel</h4>
                  <p>Diesel</p>
                </div>
                <br />
                <div>
                  <AirlineSeatReclineExtraIcon
                    className={classes.iconspaper1}
                  />
                  <h4>Engine</h4>
                  <p>xyz</p>
                </div>
                <br />
                <div>
                  <AirlineSeatReclineExtraIcon
                    className={classes.iconspaper1}
                  />
                  <h4>Milage</h4>
                  <p>14.03 kmpl</p>
                </div>
              </div>

              <div className={classes.paper1inner2}>
                <div>
                  <AirlineSeatReclineExtraIcon
                    className={classes.iconspaper1}
                  />
                  <h4>Seats</h4>
                  <p>Five</p>
                </div>
                <br />
                <div>
                  <AirlineSeatReclineExtraIcon
                    className={classes.iconspaper1}
                  />
                  <h4>Gear</h4>
                  <p>Automatic</p>
                </div>
                <br />
                <div>
                  <AirlineSeatReclineExtraIcon
                    className={classes.iconspaper1}
                  />
                  <h4>BHP</h4>
                  <p>81 to 95 kW</p>
                </div>
              </div>
            </Paper>
          </div>
        </div>

        <div className={classes.grid2}>
          <h2>Tata Nexon</h2>
          <h3>Km Package - 150km | Excess Package - Rs.11/km</h3>
          {/* Car details for mobile */}
          <div className={classes.carDetailsMobile}>
            <h3>Car details</h3>
            <Paper className={classes.paper1}>
              <div className={classes.paper1inner1}>
                <div>
                  <LocalGasStationIcon className={classes.iconspaper1} />
                  <h4>Fuel</h4>
                  <p>Diesel</p>
                </div>
                <br />
                <div>
                  <AirlineSeatReclineExtraIcon
                    className={classes.iconspaper1}
                  />
                  <h4>Engine</h4>
                  <p>xyz</p>
                </div>
                <br />
                <div>
                  <AirlineSeatReclineExtraIcon
                    className={classes.iconspaper1}
                  />
                  <h4>Milage</h4>
                  <p>14.03 kmpl</p>
                </div>
              </div>

              <div className={classes.paper1inner2}>
                <div>
                  <AirlineSeatReclineExtraIcon
                    className={classes.iconspaper1}
                  />
                  <h4>Seats</h4>
                  <p>Five</p>
                </div>
                <br />
                <div>
                  <AirlineSeatReclineExtraIcon
                    className={classes.iconspaper1}
                  />
                  <h4>Gear</h4>
                  <p>Automatic</p>
                </div>
                <br />
                <div>
                  <AirlineSeatReclineExtraIcon
                    className={classes.iconspaper1}
                  />
                  <h4>BHP</h4>
                  <p>81 to 95 kW</p>
                </div>
              </div>
            </Paper>
          </div>
          <Paper className={classes.paper2}>
            <div>
              <span>
                <EventIcon className={classes.icons} />
                <p>12/04/2020, 06:00pm </p>
              </span>
              <span>&nbsp;&nbsp; - &nbsp;</span>
              <span>
                <p>15/04/2020, 06:00pm </p>
              </span>
            </div>
            <br />
            <div>
              <span>
                <RoomIcon className={classes.icons} />
                0.6kms
                <ArrowForwardIosIcon className={classes.icons} />
              </span>
              <p>from railway station</p>
            </div>
          </Paper>

          <Paper className={classes.promo}>
            <LocalOfferIcon />
            &nbsp;&nbsp;Apply Promocode
          </Paper>
          {/* Terms & Condition for mob */}
          <div className={classes.acceptMobile}>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                  className={classes.itemElm}
                />
              }
            />
            <span>I accept the T&C and insurance terms</span>
            <br />
          </div>

          <div className={classes.paymentBreakdown}>
            <h3>Payment Breakdown</h3>
            <br />
            <div className={classes.tariff}>
              <div>
                <p>Tariff Price - 150km </p>
                <span>(without fuel)</span>
              </div>
              <div>
                <p>Rs.1000</p>
              </div>
            </div>
            <br />
            <div className={classes.deposit}>
              <div>
                <p>Refundable Security Deposit </p>
              </div>
              <div>
                <p>Rs.5000</p>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className={classes.total}>
              <div>
                <p>Total</p>
              </div>
              <div>
                <p>Rs.6000</p>
              </div>
            </div>
          </div>

          {/* Terms and condition for desktop */}
          <div className={classes.accept}>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                  className={classes.itemElm}
                />
              }
            />
            <span>I accept the T&C and insurance terms</span>
          </div>
          {/* Button for desktop */}
          <Link to="/booked">
            <div className={classes.btn}>
              <Button
                variant="contained"
                className={classes.proceedToPayButton}
              >
                Proceed To Pay
              </Button>
            </div>
          </Link>
          <div className={classes.proceedToPayButtonMobileView}>
            <div>
              <h3>Total Amount</h3>
              <p>6000</p>
            </div>
            <div>
              <Button
                variant="contained"
                className={classes.proceedToPayButtonMobile}
              >
                Proceed To Pay
              </Button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default Car;
