import React, { Fragment } from 'react';
import Filter from './Filter';
import Sort from './Sort';
import ViewBookings from './ViewBookings';
import SearchByCity from './SearchByCity';
import { makeStyles } from '@material-ui/core/styles';
import Cars from './Cars';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  gridRow: {
    maxWidth: '100vw',
  },
  flex: {
    display: 'flex',
  },
  column1: {
    width: '23%',
  },
  column2: {
    width: '75%',
    marginLeft: '2%',
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
