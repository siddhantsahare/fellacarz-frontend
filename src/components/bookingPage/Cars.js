import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  cars: {
    // position: 'absolute',
    // top: 250,
    // right: 0,
    // margin: 0,
    // maxWidth: '800px',
    width: '100%',
    overFlow: 'none',
    margin: '10px 0px',
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
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#fff',
    padding: '10px',
  },

  grid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  box: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid green',
    marginTop: '20px',
    marginRight: '5px',
    padding: '5px 20px',
  },

  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    color: '#fff',
    backgroundColor: ' #2C9247',
    border: '2px solid green',
    borderRadius: '10px',
    width: '168px',
    height: '52px',
    fontSize: '18px',
    fontWeight: '600',
    marginTop: '20px',
  },
}));

const Cars = () => {
  const classes = useStyles();

  return (
    <div className={classes.cars}>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <Grid container direction="row" spacing={2} className={classes.grid}>
            <Grid item lg={3} md={3}>
              <img
                src="img/nexon.png"
                className={classes.carImage}
                alt="carImage"
              />
            </Grid>
            <Grid item lg={6} md={6}>
              <h2>Tata Nexon</h2>
              <p>SUV | 5Seater | Diesel | Without Fuel</p>
              <div className={classes.boxContainer}>
                <Box className={classes.box} component="span">
                  <h4>21917</h4>
                  <p>1302 kms</p>
                </Box>
                <Box className={classes.box} component="span">
                  <h4>21917</h4>
                  <p>1302 kms</p>
                </Box>
                <Box className={classes.box} component="span">
                  <h4>21917</h4>
                  <p>1302 kms</p>
                </Box>
              </div>
            </Grid>
            <Grid item lg={3} md={3}>
              <h2>
                <i class="fas fa-thumbtack"></i>
                0.6kms
                <i class="fas fa-greater-than"></i>
              </h2>
              <p>from railway station</p>
              <Button variant="contained" className={classes.button}>
                Book
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Cars;
