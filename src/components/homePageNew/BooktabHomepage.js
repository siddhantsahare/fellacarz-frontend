import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RoomIcon from '@material-ui/icons/Room';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  booktabHomepage: {
    zIndex: '12',
    display: 'flex',
    flexDirection: 'column',
    padding: '43px 28px',
    position: 'absolute',
    width: '383px',
    height: '438px',
    background: '#F1F1F1',
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    [theme.breakpoints.down('md')]: {
      width: '383px',
      height: '438px',
      background: 'transparent',
      boxShadow: 'none',
    },
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  booktabHomepageHeader: {
    color: ' #329146',
  },
  booktabHomepageSubHeader: {
    color: 'black',
    lineHeight: ' 19px',
  },
  pickupAddress: {
    marginTop: '20px',
    '& > p': {
      fontWeight: '600',
      fontSize: '13px',
    },
  },
  booktabHomepageInput: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 7px',
    background: '#FFFFFF',
    borderRadius: '8px',
    border: '1px solid #9C9C9C',
    marginTop: '5px',
    '& > p': {
      color: '#979797',
      marginLeft: '10px',
      fontSize: '13px',
    },
  },
  icons: {
    color: ' #238537',
  },
  booktabHomepageDate: {
    display: 'flex',
    marginTop: '10px',
    justifyContent: 'space-between',
    '& > div > p': {
      fontSize: '13px',
      fontWeight: '600',
    },
  },
  searchBtn: {
    backgroundColor: ' #238537',
    width: '100%',
    color: 'white',
    fontWeight: '600',
    fontSize: '15px',
    marginTop: '40px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
  },
}));

const BooktabHomepage = () => {
  const classes = useStyles();
  return (
    <div className={classes.booktabHomepage}>
      <div className={classes.headerContainer}>
        <h2 className={classes.booktabHomepageHeader}>Self Drive Car Rental</h2>
        <h4 className={classes.booktabHomepageSubHeader}>Book Your Car Now!</h4>
      </div>
      <div className={classes.pickupAddress}>
        <p>Pick up Address</p>
        <div className={classes.booktabHomepageInput}>
          <RoomIcon className={classes.icons} />
          <p>Enter Pick up Address</p>
        </div>

        <div className={classes.booktabHomepageDate}>
          <div>
            <p>From</p>
            <div className={classes.booktabHomepageInput}>
              <RoomIcon className={classes.icons} />
              <p>Select Date & Time</p>
            </div>
          </div>

          <div>
            <p>To</p>
            <div className={classes.booktabHomepageInput}>
              <RoomIcon className={classes.icons} />
              <p>Select Date & Time</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button variant="contained" className={classes.searchBtn}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default BooktabHomepage;
