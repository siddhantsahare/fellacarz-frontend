import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
// Sort
import SortIcon from '@material-ui/icons/Sort';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import RoomIcon from '@material-ui/icons/Room';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  sortPanel: {
    width: '100%',
    overFlow: 'none',
  },
  sort: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    marginBottom: '10px',
    '& > h2': {
      fontSize: '18px',
      color: '#2C9247',
    },
    '& > i': {
      fontSize: '25px',
    },
  },
  itemElm: {
    position: 'absolute',
    right: '10px',
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
    position: 'relative',
    flexDirection: 'column',
    padding: '30px 20px',
    width: '100%',
    backgroundColor: ' #F4FDF5',
  },
  sortItem: {
    '& > h4': {
      display: 'inline-block',
      color: '#2C9247',
      borderBottom: '1px solid #2C9247',
      fontWeight: '600',
      fontSize: '22px',
      marginBottom: '20px',
    },
  },
  item: {
    marginLeft: '10px',
    display: 'flex',
  },
  grid: {
    marginLeft: '-35px',
  },
  icons: {
    margin: '0px 5px',
    color: '#2C9247',
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

const Sort = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedGreen: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.sortPanel}>
      <div className={classes.sort}>
        <SortIcon className={classes.icons} />
        <h2>Sort</h2>
      </div>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <Grid
            container
            direction="column"
            spacing={2}
            className={classes.grid}
          >
            <Grid item lg={12} md={12}>
              <div className={classes.item}>
                <WhatshotIcon className={classes.icons} />
                <span>Popularity</span>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      checked={state.checkedG}
                      onChange={handleChange}
                      name="checkedG"
                      className={classes.itemElm}
                    />
                  }
                />
              </div>
            </Grid>
            <Grid item lg={12} md={12}>
              <div className={classes.item}>
                <RoomIcon className={classes.icons} />
                <span>Distance</span>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      checked={state.checkedG}
                      onChange={handleChange}
                      name="checkedG"
                      className={classes.itemElm}
                    />
                  }
                />
              </div>
            </Grid>
            <Grid item lg={12} md={12}>
              <div className={classes.item}>
                <ArrowUpwardIcon className={classes.icons} />
                <span>Price High to Low</span>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      checked={state.checkedG}
                      onChange={handleChange}
                      name="checkedG"
                      className={classes.itemElm}
                    />
                  }
                />
              </div>
            </Grid>
            <Grid item lg={12} md={12}>
              <div className={classes.item}>
                <ArrowDownwardIcon className={classes.icons} />
                <span>Price Low to High</span>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      checked={state.checkedG}
                      onChange={handleChange}
                      name="checkedG"
                      className={classes.itemElm}
                    />
                  }
                />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Sort;
