import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Paper from '@material-ui/core/Paper';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import ExteriorMobile from './ExteriorMobile';
import InteriorMobile from './InteriorMobile';
import UnderBagMobile from './UnderbagMobile';
import OdoreadingsMobile from './OdoreadingsMobile';

const GreenRadio = withStyles({
  root: {
    zIndex: '100',
    color: green[400],
    backgroundColor: '#F2F2F2',
    padding: '0px',
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  preDeliveryInspectionMobile: {
    margin: '0px',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    position: 'relative',
  },
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '50px',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 10px',
    zIndex: '120',
  },
  headerInner: {
    display: 'flex',
    fontWeight: '600',
    fontSize: '15px',
    justifyContent: 'center',
    '& > p': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  backIcon: {
    position: 'absolute',
    left: '10px',
    top: '10px',
  },
  paper: {
    position: 'fixed',
    top: '50px',
    right: '10px',
    left: '10px',
    backgroundColor: '#F2F2F2',
    opacity: '1',
    height: '100px',
    borderRadius: '8px',
    padding: '0px 10px',
    display: 'flex',
    justifyContent: 'space-evenly',
    zIndex: '91',
  },
  dashed: {
    position: 'absolute',
    height: '50%',
    width: '70%',
    borderBottom: '1px dashed gray',
    zIndex: '90',
  },

  formControl: {
    marginTop: '35px',
    color: 'green',
  },
  componentContainer: {
    marginTop: '100px',
    marginBottom: '30px',
  },
}));

const PreDeliveryInspectionMobile = () => {
  const classes = useStyles();
  //   To avoid re-rendering I have used multiple states.
  const [checkedExterior] = React.useState(true);
  const [loadExterior, setloadExterior] = React.useState(true);

  const [checkedInterior, setcheckedInterior] = React.useState(false);
  const [loadInterior, setloadInterior] = React.useState(false);

  const [checkedUnderbag, setcheckedUnderbag] = React.useState(false);
  const [loadUnderbag, setloadUnderbag] = React.useState(false);

  const [checkedOdoreadings, setcheckedOdoreadings] = React.useState(false);
  const [loadOdoreadings, setloadOdoreadings] = React.useState(false);
  return (
    <div className={classes.preDeliveryInspectionMobile}>
      <div className={classes.header}>
        <div className={classes.headerInner}>
          <ArrowBackIcon className={classes.backIcon} />
          <p>Pre-delivery Inspection</p>
        </div>
      </div>

      <Paper elevation={0} className={classes.paper}>
        <div className={classes.dashed}></div>
        <FormControlLabel
          value="bottom"
          control={
            <GreenRadio
              checked={checkedExterior}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
          }
          label={<span style={{ fontSize: '11px' }}>Exterior</span>}
          labelPlacement="bottom"
          className={classes.formControl}
        />
        <FormControlLabel
          value="bottom"
          control={
            <GreenRadio
              checked={checkedInterior}
              value="b"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'B' }}
            />
          }
          label={<span style={{ fontSize: '11px' }}>Interior</span>}
          labelPlacement="bottom"
          className={classes.formControl}
        />

        <FormControlLabel
          value="bottom"
          control={
            <GreenRadio
              checked={checkedUnderbag}
              value="c"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'C' }}
            />
          }
          label={<span style={{ fontSize: '11px' }}>Underbag</span>}
          labelPlacement="bottom"
          className={classes.formControl}
        />

        <FormControlLabel
          value="bottom"
          control={
            <GreenRadio
              checked={checkedOdoreadings}
              value="d"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'D' }}
            />
          }
          label={<span style={{ fontSize: '10px' }}>Odo Readings</span>}
          labelPlacement="bottom"
          className={classes.formControl}
        />
      </Paper>
      <div className={classes.componentContainer}>
        {loadExterior && (
          <ExteriorMobile
            setloadExterior={setloadExterior}
            setcheckedInterior={setcheckedInterior}
            setloadInterior={setloadInterior}
          />
        )}

        {loadInterior && (
          <InteriorMobile
            setloadInterior={setloadInterior}
            setcheckedUnderbag={setcheckedUnderbag}
            setloadUnderbag={setloadUnderbag}
            setloadExterior={setloadExterior}
            setcheckedInterior={setcheckedInterior}
          />
        )}

        {loadUnderbag && (
          <UnderBagMobile
            setloadUnderbag={setloadUnderbag}
            setcheckedOdoreadings={setcheckedOdoreadings}
            setloadOdoreadings={setloadOdoreadings}
            setcheckedUnderbag={setcheckedUnderbag}
            setloadInterior={setloadInterior}
          />
        )}

        {loadOdoreadings && (
          <OdoreadingsMobile
            setloadOdoreadings={setloadOdoreadings}
            setcheckedodoreadings={setcheckedOdoreadings}
            setloadUnderbag={setloadUnderbag}
          />
        )}
      </div>
    </div>
  );
};

export default PreDeliveryInspectionMobile;
