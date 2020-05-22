import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EventIcon from '@material-ui/icons/Event';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const useStyles = makeStyles((theme) => ({
  bookingTabMobile: {
    margin: '0px',
    width: '100%',
    overflowY: 'auto',
  },
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '93px',
    backgroundColor: '#65B97B',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    padding: '21px 0px',
    zIndex: '110',
  },
  headerInner1: {
    display: 'flex',
    justifyContent: 'space-around',
    marginLeft: '-24px',
    marginRight: '-24px',
    fontWeight: '600',
    fontSize: '15px',
  },

  headerInner2: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
    marginLeft: '-24px',
    marginRight: '-24px',
    fontWeight: '600',
  },
  headerButton1: {
    fontSize: '10px',
    margin: '2px',
    width: '100px',
    height: '30px',
    fontWeight: '600',
    backgroundColor: 'white',
    borderRadius: '5px',
  },
  headerButton2: {
    fontSize: '10px',
    margin: '2px',
    width: '100px',
    height: '30px',
    fontWeight: '600',
    backgroundColor: 'white',
    borderRadius: '5px',
  },
  headerButton3: {
    fontSize: '10px',
    margin: '2px',
    width: '100px',
    height: '30px',
    fontWeight: '600',
    backgroundColor: '#F1FCF4',
    color: '#24692D',
    borderRadius: '5px',
  },
  content: {
    marginTop: '30px',
    width: '100%',
    height: '100%',
    zIndex: '0',
    overflowY: 'auto',
  },
  paper: {
    margin: '10px 10px',
    backgroundColor: '#F1FCF4',
    display: 'flex',
    flexDirection: 'column',
  },
  paperInner1: {
    display: 'flex',
    padding: '5px 5px',
    justifyContent: 'space-between',
    fontSize: '10px',
    fontWeight: '600',
  },

  paperInner2: {
    display: 'flex',
    padding: '5px 5px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '11px',
    fontWeight: '600',
    '& > div > p': {
      margin: '2px 0px',
      fontWeight: '500',
    },
    '& > div > p > span': {
      color: '#E4EE5E',
      backgroundColor: 'black',
      padding: '2px 5px',
      borderRadius: '5px',
    },
  },

  image: {
    width: '124px',
    height: '108px',
  },

  paperInner3: {
    display: 'flex',
    padding: '5px 5px',
    justifyContent: 'space-between',
    fontSize: '10px',
    fontWeight: '600',
    '& > div': {
      display: 'flex',
      fontSize: '11px',
    },
    '& > div > p': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& > div > p > span': {
      color: '#3E8952',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  location: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
    },
    '& > p': {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '10px',
    },
  },
  twoButtons: {
    display: 'flex',
    padding: '0px 0px',
    borderTop: '1px solid #2C9247',
    height: '40px',
  },
  lastButton1: {
    width: '100%',
    fontSize: '13px',
    backgroundColor: 'white',
    color: 'green',
    borderRight: '1px solid #2C9247',
    borderRadius: '0px',
  },
  lastButton2: {
    width: '100%',
    fontSize: '13px',
    backgroundColor: 'white',
    color: 'green',
    borderRadius: '0px',
  },
  callButton: {
    margin: '5px 0px',
    display: 'flex',
    justifyContent: 'center',
  },
  icons: {
    fontSize: '18px',
    color: '#2E7240',
    margin: '0px 5px',
  },

  // expandion Main
  expansionPanel: {
    backgroundColor: 'inherit',
    marginTop: '-10px',
  },
  expansionPanelSummary: {
    height: '40px',
  },
  expansionIcon: {
    display: 'flex',
    alignItems: 'center',
    margin: '0px auto',
  },

  // expansionPanelDetails
  expansionPanelDetails: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '-5px',
  },
  panelButton: {
    minWidth: '279px',
    maxWidth: '320px',
    backgroundColor: '#2C9247',
    border: '1px solid #2C9247',
    borderRadius: '5px',
    color: 'white',
    fontWeight: '600',
    fontSize: '12px',
  },
  innerPanel: {
    marginTop: '10px',
  },
  expansionPanelInner: {
    backgroundColor: '#F2F2F2',
    minWidth: '279px',
    maxWidth: '320px',
    marginTop: '-5px',
  },
  heading: {
    fontSize: '14px',
    fontWeight: '700',
  },
  expansionPanelDetailsInner: {
    width: '100%',
    display: 'flex',
    fontSize: '13px',
    fontWeight: '600',
    flexDirection: 'column',
    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
    },
    '& > div:last-child': {
      display: 'flex',
      textDecoration: 'underline',
      color: 'green',
    },
  },
  totalPaid: {
    margin: '10px 0px',
  },
  // location: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   fontWeight: '600',
  //   fontSize: '12px',

  //   '& > div': {
  //     display: 'flex',
  //   },
  //   '& > p': {
  //     margin: '-2px auto',
  //   },
  // },
}));

const CancelledBookings = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedInnerPanel, setExpandedInnerPanel] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeInnerPanel = (panel) => (event, isExpandedInnerPanel) => {
    setExpandedInnerPanel(isExpandedInnerPanel ? panel : false);
  };
  return (
    <div className={classes.bookingTabMobile}>
      <div className={classes.header}>
        <div className={classes.headerInner1}>
          <ArrowBackIcon />
          <p>Booking</p>
          <MoreVertIcon />
        </div>
        <div className={classes.headerInner2}>
          <Button variant="contained" className={classes.headerButton1}>
            Upcoming
          </Button>
          <Button variant="contained" className={classes.headerButton2}>
            Complete
          </Button>
          <Button variant="contained" className={classes.headerButton3}>
            Cancelled
          </Button>
        </div>
      </div>
      {/* Main Content */}
      <div className={classes.content}>
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.paperInner1}>
            <p>Jaipur</p>
            <p>Booked on: 12/04/2020</p>
          </div>
          <div className={classes.paperInner2}>
            <img src="img/nexon.png" alt="car" className={classes.image} />
            <div>
              <h2>Tata Nexon</h2>
              <p>Booking Id: 1245863</p>
              <p>
                Registration No.: <span>RJ14F1258</span>
              </p>
              <p>KM Package : 150 km</p>
            </div>
          </div>
          <div className={classes.paperInner3}>
            <div>
              <EventIcon className={classes.icons} />
              <p>
                <span>From:</span>
                <span>
                  &nbsp;&nbsp;12/04/2020
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;06:00 PM</span>
                </span>
              </p>
            </div>
            <div>
              <p>
                <span>To:</span>
                <span>
                  &nbsp;&nbsp;15/04/2020
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;06:00 PM</span>
                </span>
              </p>
            </div>
            <div className={classes.location}>
              <div>
                <RoomIcon className={classes.icons} />
                <p>Pick up Location</p>
              </div>
              <p>XYZ Location</p>
            </div>
          </div>

          <div className={classes.expansionMain}>
            <ExpansionPanel
              elevation={0}
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={classes.expansionPanelSummary}
              >
                <ExpandMoreIcon className={classes.expansionIcon} />
                {/* <p className={classes.secondaryHeading}>
                  I am an expansion panel
                </p>  */}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className={classes.expansionPanelDetails}>
                  <div>
                    <Button variant="contained" className={classes.panelButton}>
                      <AirportShuttleIcon />
                      &nbsp;&nbsp;&nbsp; Pick up Car
                    </Button>
                  </div>
                  <div className={classes.innerPanel}>
                    <ExpansionPanel
                      elevation={0}
                      expanded={expandedInnerPanel === 'panel2'}
                      onChange={handleChangeInnerPanel('panel2')}
                      className={classes.expansionPanelInner}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        className={classes.expansionPanelInnerSummary}
                      >
                        <p className={classes.heading}>Payment Breakdown</p>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <div className={classes.expansionPanelDetailsInner}>
                          <div>
                            <p>Tariff Price - 150km</p>
                            <p>₹​ 1000</p>
                          </div>
                          <div>
                            <p>Refundable Security Deposit</p>
                            <p>₹​ 5000</p>
                          </div>
                          <hr />
                          <div className={classes.totalPaid}>
                            <p>Total Paid</p>
                            <p>₹​ 6000</p>
                          </div>
                          <div>
                            <p>Balance Amount</p>
                            <p>₹​ 200</p>
                          </div>
                          <div>
                            <p> </p>
                            <p>View Summary</p>
                          </div>
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          {/* <div className={classes.twoButtons}>
            <Button variant="contained" className={classes.lastButton1}>
              Modify Booking
            </Button>
            <Button variant="contained" className={classes.lastButton2}>
              Cancel Booking
            </Button>
          </div> */}
        </Paper>
        {/* Iterate over one paper */}
        {/* Just for display purpose */}
        <Paper elevation={3} className={classes.paper}>
          <div className={classes.paperInner1}>
            <p>Jaipur</p>
            <p>Booked on: 12/04/2020</p>
          </div>
          <div className={classes.paperInner2}>
            <img src="img/nexon.png" alt="car" className={classes.image} />
            <div>
              <h2>Tata Nexon</h2>
              <p>Booking Id: 1245863</p>
              <p>
                Registration No.: <span>RJ14F1258</span>
              </p>
              <p>KM Package : 150 km</p>
            </div>
          </div>
          <div className={classes.paperInner3}>
            <div>
              <EventIcon className={classes.icons} />
              <p>
                <span>From:</span>
                <span>
                  &nbsp;&nbsp;12/04/2020
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;06:00 PM</span>
                </span>
              </p>
            </div>
            <div>
              <p>
                <span>To:</span>
                <span>
                  &nbsp;&nbsp;15/04/2020
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;06:00 PM</span>
                </span>
              </p>
            </div>
            <div className={classes.location}>
              <div>
                <RoomIcon className={classes.icons} />
                <p>Pick up Location</p>
              </div>
              <p>XYZ Location</p>
            </div>
          </div>

          <div className={classes.expansionMain}>
            <ExpansionPanel
              elevation={0}
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={classes.expansionPanelSummary}
              >
                <ExpandMoreIcon className={classes.expansionIcon} />
                {/* <p className={classes.secondaryHeading}>
                  I am an expansion panel
                </p>  */}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className={classes.expansionPanelDetails}>
                  <div>
                    <Button variant="contained" className={classes.panelButton}>
                      <AirportShuttleIcon />
                      &nbsp;&nbsp;&nbsp; Pick up Car
                    </Button>
                  </div>
                  <div className={classes.innerPanel}>
                    <ExpansionPanel
                      elevation={0}
                      expanded={expandedInnerPanel === 'panel2'}
                      onChange={handleChangeInnerPanel('panel2')}
                      className={classes.expansionPanelInner}
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        className={classes.expansionPanelInnerSummary}
                      >
                        <p className={classes.heading}>Payment Breakdown</p>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <div className={classes.expansionPanelDetailsInner}>
                          <div>
                            <p>Tariff Price - 150km</p>
                            <p>₹​ 1000</p>
                          </div>
                          <div>
                            <p>Refundable Security Deposit</p>
                            <p>₹​ 5000</p>
                          </div>
                          <hr />
                          <div className={classes.totalPaid}>
                            <p>Total Paid</p>
                            <p>₹​ 6000</p>
                          </div>
                          <div>
                            <p>Balance Amount</p>
                            <p>₹​ 200</p>
                          </div>
                          <div>
                            <p> </p>
                            <p>View Summary</p>
                          </div>
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          {/* <div className={classes.twoButtons}>
            <Button variant="contained" className={classes.lastButton1}>
              Modify Booking
            </Button>
            <Button variant="contained" className={classes.lastButton2}>
              Cancel Booking
            </Button>
          </div> */}
        </Paper>
      </div>
    </div>
  );
};

export default CancelledBookings;
