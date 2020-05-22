import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '../../homePage/Footer/Footer';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '60px',
    background:
      'linear-gradient(180deg, #65B97B 0%, #41A35B 33%, #338047 100%, #21532E 100%)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '21px 0px',
    zIndex: '110',
    fontSize: '16px',
    fontWeight: '600',
  },
  headerIcon: {
    position: 'fixed',
    left: '20px',
    fontSize: '20px',
  },
  expansion: {
    backgroundColor: '#E8F9ED',
  },
  expansionHeading: {
    color: '#074317',
    fontSize: '14px',
    fontWeight: '600',
  },
  expansionSummary: {
    backgroundColor: '#F2FDF5',
    '& > div': {
      padding: '10px 20px',
      width: '100%',
    },
  },
  image: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'black',
  },
  avatar: {
    display: 'flex',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '20px',
      '& > div': {
        fontSize: '15px',
        fontWeight: '900',
        marginLeft: '5px',
        marginBottom: '5px',
      },
      '& > p': {
        fontSize: '12px',
        fontWeight: '600',
        borderRadius: '4px',
        border: '1px solid black',
        padding: '5px 10px',
      },
    },
  },
  content: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',

    marginTop: '20px',
    '& > div': {
      display: 'flex',
      justifyContent: 'flex-start',
      '& > div': {
        fontSize: '12px',
        fontWeight: '900',
      },
      '& > p': {
        fontSize: '12px',
        fontWeight: '600',
        marginLeft: '25px',
        marginBottom: '20px',
        right: '0',
        width: '100%',
        borderBottom: '1px solid black',
      },
    },
    exp: {
      margin: '20px 0px',
    },
  },
}));

const Account = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.account}>
      <div className={classes.header}>
        <ArrowBackIcon className={classes.headerIcon} />
        <p>Account</p>
      </div>
      <br />
      <div>
        <ExpansionPanel
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          className={classes.exp}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            className={classes.expansion}
          >
            <div className={classes.expansionHeading}>My Profile</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionSummary}>
            <div>
              <div className={classes.avatar}>
                <img
                  src="img/profilepic.png"
                  alt="Face"
                  className={classes.image}
                />
                <div>
                  <div>John Doe</div>
                  <p>Edit Profile</p>
                </div>
              </div>
              <div className={classes.content}>
                <div>
                  <div>Gender</div>
                  <p>Male</p>
                </div>
                <div>
                  <div>D.O.B </div>
                  <p>14/5/1998</p>
                </div>
                <div>
                  <div>Email</div>
                  <p>xyz@gmail.com</p>
                </div>
                <div>
                  <div>Phone</div>
                  <p>9412524159</p>
                </div>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <br />
      <div className={classes.exp}>
        <ExpansionPanel
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            className={classes.expansion}
          >
            <div className={classes.expansionHeading}>Account Verification</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionSummary}>
            <div>
              <div className={classes.avatar}>
                <img src="img/pic.png" alt="Face" className={classes.image} />
                <div>
                  <div>John Doe</div>
                  <p>Edit Profile</p>
                </div>
              </div>
              <div className={classes.content}>
                <div>
                  <div>Gender</div>
                  <p>Male</p>
                </div>
                <div>
                  <div>D.O.B </div>
                  <p>14/5/1998</p>
                </div>
                <div>
                  <div>Email</div>
                  <p>xyz@gmail.com</p>
                </div>
                <div>
                  <div>Phone</div>
                  <p>9412524159</p>
                </div>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <br />
      <div className={classes.exp}>
        <ExpansionPanel
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            className={classes.expansion}
          >
            <div className={classes.expansionHeading}>Policies</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionSummary}>
            <div>
              <div className={classes.avatar}>
                <img src="img/nexon.png" alt="Face" className={classes.image} />
                <div>
                  <div>John Doe</div>
                  <p>Edit Profile</p>
                </div>
              </div>
              <div className={classes.content}>
                <div>
                  <div>Gender</div>
                  <p>Male</p>
                </div>
                <div>
                  <div>D.O.B </div>
                  <p>14/5/1998</p>
                </div>
                <div>
                  <div>Email</div>
                  <p>xyz@gmail.com</p>
                </div>
                <div>
                  <div>Phone</div>
                  <p>9412524159</p>
                </div>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <br />
      <div className={classes.exp}>
        <ExpansionPanel
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            className={classes.expansion}
          >
            <div className={classes.expansionHeading}>Contact</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionSummary}>
            <div>
              <div className={classes.avatar}>
                <img src="img/nexon.png" alt="Face" className={classes.image} />
                <div>
                  <div>John Doe</div>
                  <p>Edit Profile</p>
                </div>
              </div>
              <div className={classes.content}>
                <div>
                  <div>Gender</div>
                  <p>Male</p>
                </div>
                <div>
                  <div>D.O.B </div>
                  <p>14/5/1998</p>
                </div>
                <div>
                  <div>Email</div>
                  <p>xyz@gmail.com</p>
                </div>
                <div>
                  <div>Phone</div>
                  <p>9412524159</p>
                </div>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Footer />
      </div>
    </div>
  );
};

export default Account;
