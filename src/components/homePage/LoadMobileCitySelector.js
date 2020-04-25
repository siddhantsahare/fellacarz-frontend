import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '50%',
  },
  container: {
    display: 'flex',
  },
  paper: {
    display: 'flex',
    width: '100%',
    alignItem: 'center',
    position: 'relative',
    overflowx: 'none',
    overflowy: 'auto',
    flexDirection: 'column',
  },
  header: {
    fontSize: '22px',
    marginTop: '-7px',
    fontWeight: '700',
    background: 'white',
    boxShadow: theme.shadows[3],
    color: 'green',
    height: '50px',
    textAlign: 'center',
  },
  headerList: {
    marginTop: '0px',
    top: '0',
  },
  list: {
    margin: '0',
    marginLeft: '10px',
    color: 'black',
    width: '100vw',
  },
  listItem: {
    '&:hover': {
      transition: 'all 0.4s ease-out',
      backgroundColor: 'green',
      color: 'white',
    },
  },
}));

export const LoadMobileCitySelector = ({ popover }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Fade in={popover}>
          <Paper elevation={4} className={classes.paper}>
            <List
              component="nav"
              aria-label="main header folders"
              className={classes.headerList}
            >
              <ListSubheader
                className={classes.header}
              >{`Select Your City`}</ListSubheader>
            </List>

            <List
              component="nav"
              aria-label="main list folders"
              className={classes.list}
            >
              <ListItem button className={classes.listItem}>
                <ListItemText primary="Bangalore" />
              </ListItem>

              <ListItem button className={classes.listItem}>
                <ListItemText primary="Pune" />
              </ListItem>

              <ListItem button className={classes.listItem}>
                <ListItemText primary="Mumbai" />
              </ListItem>

              <ListItem button className={classes.listItem}>
                <ListItemText primary="Goa" />
              </ListItem>

              <ListItem button className={classes.listItem}>
                <ListItemText primary="Chennai" />
              </ListItem>
            </List>
          </Paper>
        </Fade>
      </div>
    </div>
  );
};

export default LoadMobileCitySelector;
