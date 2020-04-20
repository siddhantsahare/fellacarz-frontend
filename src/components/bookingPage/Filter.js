import React, { Fragment } from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  filterPanel: {
    margin: 0,
    overFlow: 'none',
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    '& > h2': {
      marginLeft: '10px',
      fontSize: '18px',
    },
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',

    padding: '30px 20px',
    width: '90vw',

    marginTop: '20px',
  },
  categories: {
    '& > h4': {
      display: 'inline-block',
      color: '#2C9247',
      borderBottom: '1px solid #2C9247',
      fontWeight: '600',
      fontSize: '22px',
      marginBottom: '20px',
    },
  },
  category: {
    marginLeft: '10px',
  },
  fuels: {
    '& > i': {
      marginTop: '20px',
    },
    '& > h4': {
      display: 'inline-block',
      color: '#2C9247',
      borderBottom: '1px solid #2C9247',
      fontWeight: '600',
      fontSize: '22px',
      marginBottom: '20px',
    },
  },
  fuel: {
    marginLeft: '10px',
  },
  prices: {
    '& > i': {
      marginTop: '20px',
    },
    '& > h4': {
      display: 'inline-block',
      color: '#2C9247',
      borderBottom: '1px solid #2C9247',
      fontWeight: '600',
      fontSize: '22px',
      marginBottom: '20px',
    },
  },
  price: {
    marginLeft: '10px',
  },
  priceSlider: {
    marginTop: '10px',
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

// Styles for slider
const PriceSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

// function for PriceSlider
function PriceSliderComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

const Filter = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedGreen: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.filterPanel}>
      <div className={classes.filter}>
        <FilterListIcon />
        <h2>Filter</h2>
      </div>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <div className={classes.categories}>
            <i class="fas fa-car-side"></i>
            <h4>Category</h4>
          </div>
          <div className={classes.category}>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                />
              }
            />
            SUV
          </div>
          <div className={classes.category}>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                />
              }
            />
            Sedan
          </div>
          <div className={classes.category}>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                />
              }
            />
            Hatchba
          </div>
          {/* Fuel */}
          <div className={classes.fuels}>
            <i class="fas fa-gas-pump"></i>
            <h4>Fuel</h4>
          </div>
          <div className={classes.fuel}>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                />
              }
            />
            Petrol
          </div>
          <div className={classes.fuel}>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                />
              }
            />
            Diesel
          </div>
          {/* Price */}
          <div className={classes.prices}>
            <i class="fas fa-gas-pump"></i>
            <h4>Price</h4>
          </div>
          <div className={classes.price}>
            <TextField
              id="standard-helperText"
              defaultValue="1000 - 10,000"
              helperText="Select a price range"
            />
            <div className={classes.priceSlider}>
              <PriceSlider
                ThumbComponent={PriceSliderComponent}
                getAriaLabel={(index) =>
                  index === 0 ? 'Minimum price' : 'Maximum price'
                }
                defaultValue={[20, 80]}
              />
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Filter;
