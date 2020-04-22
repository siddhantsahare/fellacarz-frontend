import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

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
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      gridGap: '0px',
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
    gridTemplateColumns: '30% 70%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  paper1: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
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

  paper1inner: {
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
  },
  imageBig: {
    width: '100%',
    height: '95%',
    border: '1px solid black',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      height: '60%',
    },
    boxShadow: '4px 4px 4px 0px rgba(0,0,0,0.75)',
    background: 'linear-gradient(to right, #000, #fff)',
  },

  imageSet: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      position: 'absolute',
      top: '300px',
      width: '90%',
    },
  },

  imageSmall: {
    width: '100%',
    maxWidth: '150px',
    maxHeight: '150px',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '70px',
      maxHeight: '70px',
      margin: '0px 5px',
    },
    boxShadow: '2px 2px 2px 0px rgba(0,0,0,0.75)',
    background: 'linear-gradient(to right, #000, #fff)',
  },

  carDetails: {},

  grid2: {
    display: 'flex',
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
    },
    flexDirection: 'column',
  },

  paper2: {
    backgroundColor: ' #F4FDF5',
    padding: '20px',
    marginTop: '10px',
    '& > div': {
      display: 'flex',
      '& > span': {
        display: 'flex',
        justifyContent: 'space-between',
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
  },
  promo: {
    backgroundColor: ' #f3f3f3',
    padding: '20px',
    color: 'gray',
    '& > i': {
      color: 'gray',
    },
  },
  accept: {
    color: 'gray',
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
  },
  proceedToPayButton: {
    width: '100%',
    height: '50px',
    color: 'white',
    fontSize: '18px',
    fontWeight: '700',
    backgroundColor: '#2C9247',
  },
}));
const Car = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedGreen: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.grid1}>
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
          <div className={classes.carDetails}>
            <h3>Car details</h3>
            <Paper className={classes.paper1}>
              <div className={classes.paper1inner}>
                <div>
                  <i class="fa fa-tint" aria-hidden="true"></i>
                  <h4>Fuel</h4>
                  <p>Diesel</p>
                </div>
                <br />
                <div>
                  <i class="fa fa-steam" aria-hidden="true"></i>
                  <h4>Engine</h4>
                  <p>xyz</p>
                </div>
                <br />
                <div>
                  <i class="fa fa-tint" aria-hidden="true"></i>
                  <h4>Milage</h4>
                  <p>14.03 kmpl</p>
                </div>
              </div>
              <br />
              <div className={classes.paper1inner}>
                <div>
                  <i class="fa fa-car" aria-hidden="true"></i>
                  <h4>Seats</h4>
                  <p>Five</p>
                </div>
                <br />
                <div>
                  <i class="fa fa-cog" aria-hidden="true"></i>
                  <h4>Gear</h4>
                  <p>Automatic</p>
                </div>
                <br />
                <div>
                  <i class="fa fa-tint" aria-hidden="true"></i>
                  <h4>BHP</h4>
                  <p>81 to 95 kW</p>
                </div>
              </div>
            </Paper>
          </div>
        </div>

        <div className={classes.grid2}>
          <h2>Tata Nexon</h2>
          <br />
          <h3>Km Package - 150km | Excess Package - Rs.11/km</h3>
          <Paper className={classes.paper2}>
            <br />
            <div>
              <span>
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <p>12/04/2020, 06:00pm </p>
              </span>
              <span>&nbsp;&nbsp; -- &nbsp;</span>
              <span>
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <p>15/04/2020, 06:00pm </p>
              </span>
            </div>
            <br />
            <div>
              <span>
                <i class="fas fa-thumbtack"></i>
                0.6kms
                <i class="fas fa-greater-than"></i>
              </span>
              <p>from railway station</p>
            </div>
          </Paper>
          <br />
          <br />
          <Paper className={classes.promo}>
            <i class="fa fa-tags" aria-hidden="true"></i>
            Apply Promocode
          </Paper>
          <br />
          <br />
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
          <br />
          <br />
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
          <br />
          <div className={classes.btn}>
            <Button variant="contained" className={classes.proceedToPayButton}>
              Proceed To Pay
            </Button>
          </div>
          <br />
        </div>
      </div>
    </Fragment>
  );
};

export default Car;
