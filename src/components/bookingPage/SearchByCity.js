import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  searchByCity: {
    // position: 'absolute',
    // top: 110,
    // right: 10,
    // margin: 0,
    // minWidth: '74vw',
    width: '100%',
    overFlow: 'none',
  },
  book: {
    display: 'flex',
    flexDirection: 'row',
    '& > h2': {
      fontSize: '22px',
    },
    '& > i': {
      fontSize: '30px',
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
    justifyContent: 'space-evenly',
    padding: '30px',
    width: '100%',
    backgroundColor: '#F9F9F9',
    marginTop: '60px',
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  grid: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 190,
  },

  textFieldMain: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 250,
  },
  button: {
    color: '#2C9247',
    border: '2px solid #2C9247',
    minWidth: '140px',
    height: '52px',
    fontSize: '18px',

    fontWeight: '600',
  },
}));

const SearchByCity = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchByCity}>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <Grid container direction="row" spacing={3} className={classes.grid}>
            <Grid item lg={3} md={3}>
              <TextField
                id="standard-helperText"
                defaultValue="Malviya Nagar, Jaipur"
                label="Pick up location"
                className={classes.textFieldMain}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item lg={3} md={3}>
              <form className={classes.container} noValidate>
                <TextField
                  id="datetime-local"
                  label="From: Date & Time "
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>

            <Grid item lg={3} md={3}>
              <form className={classes.container} noValidate>
                <TextField
                  id="datetime-local"
                  label="To: Date & Time"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>

            <Grid item lg={3} md={3}>
              <Button variant="outlined" className={classes.button}>
                Find
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default SearchByCity;
