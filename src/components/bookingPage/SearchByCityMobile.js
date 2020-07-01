import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { makeStyles } from '@material-ui/core/styles';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const useStyles = makeStyles((theme) => ({
  backIcon: {
    margin: '0px 10px',
    color: 'white',
  },
  icons: {
    color: '#3E9154',
    margin: '0px 10px',
  },
  searchByCityMobile: {
    width: '100%',
    height: '55px',
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    backgroundColor: '#3E9154',
    padding: '10px',
    zIndex: '100',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '40px',
    borderRadius: '10px',
    width: '300px',
    marginLeft: '10px',

    '& > div': {
      display: 'flex',
      '& > p': {
        opacity: '0.5',
      },
    },
  },
  datePickerContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
    position: 'fixed',
    top: '55px',
    left: '0',
    right: '0',
    padding: '5px',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& > h4': {
          fontWeight: '500',
          color: '#3D8951',
        },
        '& > p': {
          fontWeight: '300',
          fontSize: '12px',
        },
      },
      '& > div > p': {
        marginTop: '-2px',
      },
    },
    '& > div:first-child': {
      '& > div': {
        marginLeft: '20px',
      },
    },
  },
  textField: {
    width: '200px',
  },
  divider: {
    border: '1px solid #ACACAC',
    width: '1px',
  },
}));

const SearchByCityMobile = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchByCityMobile}>
      <div className={classes.searchBar}>
        <div>
          <ArrowBackIcon className={classes.backIcon} />
        </div>
        <div className={classes.searchInput}>
          <div>
            <SearchIcon className={classes.icons} />
            <p>Select City</p>
          </div>

          <MicIcon className={classes.icons} />
        </div>
      </div>
      <div className={classes.datePickerContainer}>
        <div>
          <CalendarTodayIcon className={classes.icons} />
          <div>
            <h4>12/04/2020</h4>
            <p>06:00 am</p>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div>
          <div>
            <h4>12/04/2020</h4>
            <p>06:00 am</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByCityMobile;
