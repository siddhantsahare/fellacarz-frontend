import React, { Fragment } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import Drawer from '@material-ui/core/Drawer';
import Slider from '@material-ui/core/Slider';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import RoomIcon from '@material-ui/icons/Room';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { useState } from 'react';

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
  filterMobile: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    height: '55px',
    padding: '0px 10px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid green',
    backgroundColor: '#fff',
    borderRadius: '10px',
    transition: 'width 600ms ease',
    overflow: 'scroll',
  },
  filterMobileOpen: {
    position: 'relative',
    width: '200px',
    display: 'flex',
    fontSize: '10px',
    transition: '200ms',
  },

  filterMobileClosed: {
    position: 'relative',
    width: '50px',
    fontSize: '10px',
  },

  filterInnerOpen: {
    display: 'flex',
    transition: '200ms',
  },

  filterInnerClosed: {
    display: 'none',
  },
  filterMain: {
    backgroundColor: '#EFEFEF',
    position: 'fixed',
    width: '60px',
    height: '45px',
    right: '15px',
    bottom: '15px',
    borderRadius: '10px',

    '& > div': {
      fontWeight: '600',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'green',
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
  icons: {
    color: 'green',
  },
  innerContent: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px 5px',
    alignItems: 'center',
  },

  //   Sort

  sortMobile: {
    position: 'fixed',
    bottom: '10px',
    left: '10px',
    height: '55px',
    padding: '0px 10px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid green',
    backgroundColor: '#fff',
    borderRadius: '10px',
    transition: 'width 600ms ease',
  },
  sortMobileOpen: {
    position: 'relative',
    width: '235px',
    display: 'flex',
    fontSize: '10px',
    transition: '200ms',
  },

  sortMobileClosed: {
    position: 'relative',
    width: '50px',
    fontSize: '10px',
  },

  sortInnerOpen: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    transition: '200ms',
  },

  sortInnerClosed: {
    display: 'none',
  },
  sortMain: {
    backgroundColor: '#EFEFEF',
    position: 'fixed',
    width: '60px',
    height: '45px',
    left: '15px',
    bottom: '15px',
    borderRadius: '10px',
    '& > div': {
      fontWeight: '600',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'green',
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
  priceSlider: {
    color: 'green',
  },
  priceDrawerMain: {
    padding: '20px',
    '& > div': {
      backgroundColor: '#F1FCF4',
      padding: '20px 50px',
    },
  },
  priceSliderRange: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '-20px',
    marginBottom: '20px',
    fontWeight: '600',
  },
  priceRangeWrapper: {
    display: 'flex',
    marginTop: '10px',
    justifyContent: 'space-between',
    '& > div:first-child': {
      border: '1px solid green',
      borderRadius: '5px',
      backgroundColor: 'white',
      padding: '5px',
    },
  },

  fuelDrawerMain: {
    padding: '20px',
    '& > div': {
      backgroundColor: '#F1FCF4',
      padding: '20px 50px',
      '& > div': {
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  categoryDrawerMain: {
    padding: '20px',
    '& > div': {
      backgroundColor: '#F1FCF4',
      padding: '20px 50px',
      '& > div': {
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  lastcheckboxWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > div': {
      display: 'flex',
      alignItems: 'center',
    },
  },
}));

const FilterMobile = () => {
  const classes = useStyles();
  const [filterOpen, setfilterOpen] = useState(true);
  const [drawerOpenPrice, setdrawerOpenPrice] = useState(false);
  const [drawerOpenFuel, setdrawerOpenFuel] = useState(false);
  const [drawerOpenCategory, setdrawerOpenCategory] = useState(false);

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [checkboxState, setcheckboxState] = React.useState({
    checkedGreen: true,
  });

  const handleCheckboxChange = (event) => {
    setcheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };

  const onClickFilter = () => {
    filterOpen ? setfilterOpen(false) : setfilterOpen(true);
    filterOpen ? setsortOpen(true) : setsortOpen(false);
  };

  const [sortOpen, setsortOpen] = useState(false);

  const onClickSort = () => {
    sortOpen ? setsortOpen(false) : setsortOpen(true);
    sortOpen ? setfilterOpen(true) : setfilterOpen(false);
  };

  const handleDrawerOpenPrice = () => {
    setdrawerOpenPrice(true);
  };

  const handleDrawerClosePrice = () => {
    setdrawerOpenPrice(false);
  };

  const handleDrawerOpenFuel = () => {
    setdrawerOpenFuel(true);
  };

  const handleDrawerCloseFuel = () => {
    setdrawerOpenFuel(false);
  };

  const handleDrawerOpenCategory = () => {
    setdrawerOpenCategory(true);
  };

  const handleDrawerCloseCategory = () => {
    setdrawerOpenCategory(false);
  };

  return (
    <Fragment>
      <div className={classes.filterMobile}>
        <div
          className={
            filterOpen ? classes.filterMobileOpen : classes.filterMobileClosed
          }
        >
          <div
            className={
              filterOpen ? classes.filterInnerOpen : classes.filterInnerClosed
            }
          >
            <div
              className={classes.innerContent}
              onClick={handleDrawerOpenPrice}
            >
              <AttachMoneyIcon className={classes.icons} />
              <p>Price</p>
            </div>
            <Drawer
              anchor="bottom"
              open={drawerOpenPrice}
              onClose={handleDrawerClosePrice}
              className={classes.drawer}
            >
              <div className={classes.priceDrawerMain}>
                <div>
                  <div>
                    <Slider
                      value={value}
                      onChange={handleChange}
                      aria-labelledby="continuous-slider"
                      className={classes.priceSlider}
                    />
                    <div className={classes.priceSliderRange}>
                      <p>Rs. 1000</p>
                      <p>Rs. 10,000</p>
                    </div>
                  </div>
                  <div>
                    <div className={classes.priceRange}>
                      <p>Price Range: </p>
                      <div className={classes.priceRangeWrapper}>
                        <div>Rs. 1000 - Rs. 10,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
            <div
              className={classes.innerContent}
              onClick={handleDrawerOpenFuel}
            >
              <LocalGasStationIcon className={classes.icons} />
              <p>Fuel</p>
            </div>
            <Drawer
              anchor="bottom"
              open={drawerOpenFuel}
              onClose={handleDrawerCloseFuel}
              className={classes.drawer}
            >
              <div className={classes.fuelDrawerMain}>
                <div>
                  <div>
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          checked={checkboxState.checkedG}
                          onChange={handleCheckboxChange}
                          name="checkedG"
                        />
                      }
                    />
                    <p>Petrol</p>
                  </div>
                  <div className={classes.lastcheckboxWrapper}>
                    <div>
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            checked={checkboxState.checkedG}
                            onChange={handleCheckboxChange}
                            name="checkedG"
                          />
                        }
                      />
                      <p>Diesel</p>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
            <div
              className={classes.innerContent}
              onClick={handleDrawerOpenCategory}
            >
              <DirectionsCarIcon className={classes.icons} />
              <p>Category</p>
            </div>
            <Drawer
              anchor="bottom"
              open={drawerOpenCategory}
              onClose={handleDrawerCloseCategory}
              className={classes.drawer}
            >
              <div className={classes.categoryDrawerMain}>
                <div>
                  <div>
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          checked={checkboxState.checkedG}
                          onChange={handleCheckboxChange}
                          name="checkedG"
                        />
                      }
                    />
                    <p>SUV</p>
                  </div>
                  <div>
                    <FormControlLabel
                      control={
                        <GreenCheckbox
                          checked={checkboxState.checkedG}
                          onChange={handleCheckboxChange}
                          name="checkedG"
                        />
                      }
                    />
                    <p>Sedan</p>
                  </div>
                  <div className={classes.lastcheckboxWrapper}>
                    <div>
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            checked={checkboxState.checkedG}
                            onChange={handleCheckboxChange}
                            name="checkedG"
                          />
                        }
                      />
                      <p>Hatchback</p>
                    </div>
                  </div>
                </div>
              </div>
            </Drawer>
          </div>

          <div className={classes.filterMain} onClick={onClickFilter}>
            <div>
              <div>
                {filterOpen ? (
                  <ArrowRightIcon className={classes.icons} />
                ) : (
                  <ArrowLeftIcon className={classes.icons} />
                )}
              </div>

              <div>
                <FilterListIcon className={classes.icons} />
                <div>Filter</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sort */}

      <div className={classes.sortMobile}>
        <div
          className={
            sortOpen ? classes.sortMobileOpen : classes.sortMobileClosed
          }
        >
          <div
            className={
              sortOpen ? classes.sortInnerOpen : classes.sortInnerClosed
            }
          >
            <div className={classes.innerContent}>
              <WhatshotIcon className={classes.icons} />
              <p>Price</p>
            </div>
            <div className={classes.innerContent}>
              <RoomIcon className={classes.icons} />
              <p>Fuel</p>
            </div>
            <div className={classes.innerContent}>
              <ArrowUpwardIcon className={classes.icons} />
              <p>High price</p>
            </div>
            <div className={classes.innerContent}>
              <ArrowDownwardIcon className={classes.icons} />
              <p>Low price</p>
            </div>
          </div>

          <div className={classes.sortMain} onClick={onClickSort}>
            <div>
              <div>
                <SortByAlphaIcon className={classes.icons} />
                <div>Sort</div>
              </div>
              <div>
                {sortOpen ? (
                  <ArrowLeftIcon className={classes.icons} />
                ) : (
                  <ArrowRightIcon className={classes.icons} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterMobile;
