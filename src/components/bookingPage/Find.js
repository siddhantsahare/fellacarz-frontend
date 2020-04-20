import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import ViewBookings from './ViewBookings';
import SearchByCity from './SearchByCity';
import { makeStyles } from '@material-ui/core/styles';
import Cars from './Cars';

const useStyles = makeStyles((theme) => ({
  gridRow: {
    maxWidth: '100vw',
  },
  flex: {
    display: 'flex',
  },
  column1: {
    width: '23%',
    marginLeft: '-3%',
    marginTop: '2%',
    position: 'fixed',
    zIndex: '11',
  },
  column2: {
    width: '77%',
    marginLeft: '24%',
    marginRight: '-10%',
    zIndex: '1',
  },
}));

const Find = () => {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <div className={classes.column1}>
        <Filter />
        <Sort />
        <ViewBookings />
      </div>
      <div className={classes.column2}>
        <SearchByCity />
        <Cars />
        <Cars />
        <Cars />
        <Cars />
        <Cars />
      </div>
    </div>
  );
};

export default Find;
