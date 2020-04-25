import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  filterPanel: {
    width: '100%',
    overFlow: 'none',
  },
  filter: {
    display: 'flex',
    marginTop: '10px',
    marginBottom: '10px',
    flexDirection: 'row',
    '& > h2': {
      fontSize: '18px',
      color: '#2C9247',
    },
    '& > i': {
      fontSize: '20px',
      paddingTop: '5px',
      marginLeft: '5px',
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
    padding: '20px 20px',
    width: '100%',
    backgroundColor: ' #F4FDF5',
  },
  categories: {
    '& > i': {
      marginLeft: '10px',
      marginBottom: '15px',
    },
    '& > h4': {
      display: 'inline-block',
      color: '#2C9247',
      borderBottom: '1px solid #2C9247',
      fontWeight: '600',
      fontSize: '18px',
    },
  },
  category: {
    margin: '-10px 10px',
  },
  fuels: {
    '& > i': {
      marginTop: '10px',
      marginLeft: '10px',
      marginBottom: '15px',
    },
    '& > h4': {
      display: 'inline-block',
      color: '#2C9247',
      borderBottom: '1px solid #2C9247',
      fontWeight: '600',
      fontSize: '18px',
    },
  },
  fuel: {
    margin: '-10px 10px',
  },
  prices: {
    '& > i': {
      marginTop: '10px',
      marginLeft: '10px',
    },
    '& > h4': {
      display: 'inline-block',
      color: '#2C9247',
      borderBottom: '1px solid #2C9247',
      fontWeight: '600',
      fontSize: '18px',
    },
  },
  price: {
    margin: '5px 10px',
  },
  priceSlider: {
    marginTop: '3px',
    marginBottom: '-10px',
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
    color: '#2C9247',
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
        <i class="fas fa-filter"></i>
        <h2>Filter</h2>
      </div>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <Grid
            container
            direction="column"
            spacing={1}
            className={classes.grid}
          >
            <Grid item lg={12} md={12}>
              <div className={classes.categories}>
                <i class="fas fa-car-side"></i>
                <h4>Category</h4>
              </div>
            </Grid>
            <Grid item lg={12} md={12}>
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
            </Grid>
            <Grid item lg={12} md={12}>
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
            </Grid>
            <Grid item lg={12} md={12}>
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
            </Grid>
            {/* Fuel */}
            <Grid item lg={12} md={12}>
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
            </Grid>
            <Grid item lg={12} md={12}>
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
            </Grid>
            {/* Price */}
            <Grid item lg={12} md={12}>
              <div className={classes.prices}>
                <i class="fas fa-dollar-sign"></i>
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
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Filter;
