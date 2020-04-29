import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

// icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TimerIcon from '@material-ui/icons/Timer';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import TimelapseIcon from '@material-ui/icons/Timelapse';

const useStyles = makeStyles((theme) => ({
  ProfileMobile: {
    boxSizing: 'border-box',
    margin: '0',
    padding: '10px',
  },
  header: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    display: 'flex',
    height: '50px',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'linear-gradient(180deg, #65B97B 0%, #41A35B 33%, #338047 100%, #21532E 100%) 0% 0% no-repeat padding-box',
  },
  backBtn: {
    position: 'fixed',
    top: '10px',
    left: '10px',
    right: '10px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentInner: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0px',
    '& > div > div': {
      display: 'flex',
      justifyContent: 'space-between',

      '& > p': {
        position: 'absolute',
        right: '25px',
      },
    },
  },
  contentReadings: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
  },
  paper1: {
    backgroundColor: '#F2F2F2',
    padding: '20px 30px',
    borderRadius: '5px',
    margin: '0px 5px',
    fontSize: '12px',
    '& > h4': {
      fontSize: '14px',
      marginBottom: '10px',
    },
    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
      },
      '& > p': {
        marginLeft: '10px',
      },
    },
  },
  icons: {
    color: 'green',
  },
  paper2: {
    marginTop: '20px',
    backgroundColor: '#F1FCF4',
    padding: '20px',
    '& > h4': {
      marginBottom: '15px',
    },
    '& > div': {
      color: 'black',
      fontWeight: '600',
      fontSize: '12px',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}));
const ProfileMobile = () => {
  const classes = useStyles();
  return (
    <div className={classes.ProfileMobile}>
      <div className={classes.header}>
        <div className={classes.backBtn}>
          <ArrowBackIcon />
        </div>
        <div>
          <h3>Profile</h3>
        </div>
      </div>
      <div className={classes.contentDetails}>
        <div className={classes.content}>
          <div className={classes.contentInner}>
            <div>
              <h4>Tarriff</h4>
              <p>150kms, Without Fuel</p>
            </div>
            <p>₹​ 999</p>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.contentInner}>
            <div>
              <h4>Discount</h4>
              <p>Coupon Code : NX125</p>
            </div>
            <p>₹​ 100</p>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.contentInner}>
            <div>
              <p>Other Charges</p>
              <div>
                <h4>Late fee(6 hour late)</h4>
                <p>₹​ 500</p>
              </div>
              <p>Damage</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.contentReadings}>
        <Paper elevation={0} className={classes.paper1}>
          <h4>Initial Readings</h4>
          <div>
            <TimerIcon className={classes.icons} />
            <p>150 km</p>
          </div>
          <div>
            <LocalGasStationIcon className={classes.icons} />
            <p>0.1</p>
          </div>
          <div>
            <TimelapseIcon className={classes.icons} />
            <div>
              <p>12/04/2020</p>
              <p>06:30 am</p>
            </div>
          </div>
        </Paper>
        <Paper elevation={0} className={classes.paper1}>
          <h4>Final Readings</h4>
          <div>
            <TimerIcon className={classes.icons} />
            <p>850 km</p>
          </div>
          <div>
            <LocalGasStationIcon className={classes.icons} />
            <p>1</p>
          </div>
          <div>
            <TimelapseIcon className={classes.icons} />
            <div>
              <p>15/04/2020</p>
              <p>06:30 am</p>
            </div>
          </div>
        </Paper>
      </div>
      <div className={classes.payment}>
        <Paper elevation={0} className={classes.paper2}>
          <h4>Payment Recieved</h4>
          <div>
            <p>Online</p>
            <p>₹​ 500</p>
          </div>
          <div>
            <p>Cash</p>
            <p>₹​ 600</p>
          </div>
          <div>
            <p>Refund</p>
            <p>₹​ 100</p>
          </div>
          <br />
          <div>
            <p>Total Amount Paid</p>
            <p>₹​ 1000</p>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default ProfileMobile;
