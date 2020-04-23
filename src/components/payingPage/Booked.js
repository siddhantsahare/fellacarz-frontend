import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dot: {
    position: 'relative',
    marginTop: '123px',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#F1FCF4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > i': {
      fontSize: '60px',
      color: 'green',
    },
  },
  bookedText: {
    marginTop: '15px',
    fontSize: '24px',
  },
  links: {
    display: 'flex',
    marginTop: '15px',
  },
  linkInner: {
    color: '#2C9247',
    fontSize: '18px',
    cursor: 'pointer',
    padding: '0px 10px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  containerInner: {
    backgroundColor: '#F1FCF4',
    borderRadius: '8px',
    marginTop: '23px',
    padding: '50px',
  },
  paper: {
    padding: '25px',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      '& > div': {
        marginBottom: '10px',
      },

      '& > div:last-child': {
        marginTop: '10px',
      },
    },

    '& > div > p': {
      marginBottom: '20px',
    },
    '& > div:last-child > p': {
      display: 'flex',
      justifyContent: 'center',
      color: 'black',
      fontSize: '15px',
      fontWeight: '700',
    },
  },

  paperInner: {
    padding: '20px',
    display: 'flex',
    backgroundColor: '#F9F9F9',
    alignItems: 'flex-start',
    flexDirection: 'column',
    '& > div:first-child': {
      display: 'flex',
      '& > span': {
        display: 'flex',
        marginBottom: '25px',
      },
    },
    '& > div': {
      '& > p': {
        marginLeft: '20px',
        color: '#6B6A6A',
      },
      '& > span > i': {
        color: '#6B6A6A',
      },
    },
  },
}));
const Booked = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.dot}>
        <i class="fas fa-check"></i>
      </span>
      <div className={classes.bookedText}>
        <h3>Booked!</h3>
      </div>
      <div className={classes.links}>
        <div className={classes.linkInner}>Go Back To Home</div>
        <div className={classes.linkInner}> | </div>
        <div className={classes.linkInner}>View Booking History</div>
      </div>
      <Container className={classes.containerInner}>
        <h4>Recent Bookings</h4>
        <br />
        <Paper className={classes.paper}>
          <div>
            <img src="img/nexon.png" alt="carBooked" />
          </div>
          <div>
            <br />
            <h2>Tata Nexon</h2>
            <br />
            <p>Booking Id: 1245863</p>
            <p>
              Registeration No: <span className={classes.regNo}>RJ14F1258</span>
            </p>
            <p>Km Package: 150 km</p>
          </div>
          <div>
            <p>Jaipur: Booked on 12/04/2020</p>

            <Paper elevation={0} className={classes.paperInner}>
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
              <div>
                <span>
                  <i class="fas fa-thumbtack"></i>
                  0.6kms
                  <i class="fas fa-greater-than"></i>
                </span>
                <p>from railway station</p>
              </div>
            </Paper>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default Booked;
