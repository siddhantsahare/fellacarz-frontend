import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import ViewBookings from './ViewBookings';
import SearchByCity from './SearchByCity';
import { makeStyles } from '@material-ui/core/styles';
import FilterMobile from './FilterMobile';
import Cars from './Cars';
import CarsMobile from './CarsMobile';
import SearchByCityMobile from './SearchByCityMobile';

const useStyles = makeStyles((theme) => ({
  gridRow: {
    maxWidth: '100vw',
  },
  flex: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      marginTop: '-80px',
    },
  },
  column1: {
    width: '23%',
    marginLeft: '-3%',
    marginTop: '0.75%',
    position: 'fixed',
    zIndex: '11',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  column2: {
    width: '77%',
    marginLeft: '24%',
    marginRight: '-10%',
    zIndex: '1',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  column3: {
    zIndex: '20',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  carMobileContainer: {
    marginTop: '130px',
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

      <div className={classes.column3}>
        <SearchByCityMobile />

        <div className={classes.carMobileContainer}>
          <CarsMobile />
          <CarsMobile />
          <CarsMobile />
          <CarsMobile />
        </div>
        <FilterMobile />
      </div>
    </div>
  );
};

export default Find;
