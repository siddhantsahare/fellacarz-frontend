import React, { useState, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  viewBookings: {
    width: '100%',
    overFlow: 'none',
  },
  book: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '12px',
    marginBottom: '5px',
    '& > h2': {
      fontSize: '18px',
      color: '#2C9247',
    },
    '& > i': {
      fontSize: '25px',
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
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },
  text: {
    marginTop: '10px',
  },
  radio: {},
}));

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const Sort = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [loading, setloading] = useState(true);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Fragment>
      {loading ? (
        <div className={classes.viewBookings}>
          <div className={classes.book}>
            <Skeleton animation="wave" variant="square">
              <h2>View Bookings</h2>
            </Skeleton>
          </div>
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
              <Grid
                container
                direction="row"
                spacing={1}
                className={classes.grid}
              >
                <Grid item lg={4} md={4}>
                  <div className={classes.item}>
                    <Skeleton animation="wave" variant="square">
                      <GreenRadio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        className={classes.radio}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                      />
                      <span className={classes.text}>Complete</span>
                    </Skeleton>
                  </div>
                </Grid>
                <Grid item lg={4} md={4}>
                  <div className={classes.item}>
                    <Skeleton animation="wave" variant="square">
                      <GreenRadio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        className={classes.radio}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                      />
                      <span className={classes.text}>Upcoming</span>
                    </Skeleton>
                  </div>
                </Grid>
                <Grid item lg={4} md={4}>
                  <div className={classes.item}>
                    <Skeleton animation="wave" variant="square">
                      <GreenRadio
                        checked={selectedValue === 'c'}
                        onChange={handleChange}
                        value="c"
                        className={classes.radio}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'C' }}
                      />
                      <span className={classes.text}>Cancelled</span>
                    </Skeleton>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
      ) : (
        <div className={classes.viewBookings}>
          <div className={classes.book}>
            <h2>View Bookings</h2>
          </div>
          <div className={classes.root}>
            <Paper className={classes.paper} elevation={0}>
              <Grid
                container
                direction="row"
                spacing={1}
                className={classes.grid}
              >
                <Grid item lg={4} md={4}>
                  <div className={classes.item}>
                    <GreenRadio
                      checked={selectedValue === 'a'}
                      onChange={handleChange}
                      value="a"
                      className={classes.radio}
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'A' }}
                    />
                    <span className={classes.text}>Complete</span>
                  </div>
                </Grid>
                <Grid item lg={4} md={4}>
                  <div className={classes.item}>
                    <GreenRadio
                      checked={selectedValue === 'b'}
                      onChange={handleChange}
                      value="b"
                      className={classes.radio}
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'B' }}
                    />
                    <span className={classes.text}>Upcoming</span>
                  </div>
                </Grid>
                <Grid item lg={4} md={4}>
                  <div className={classes.item}>
                    <GreenRadio
                      checked={selectedValue === 'c'}
                      onChange={handleChange}
                      value="c"
                      className={classes.radio}
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'C' }}
                    />
                    <span className={classes.text}>Cancelled</span>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Sort;
