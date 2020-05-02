import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  underbag: {
    height: '100%',
  },
  underbagText: {
    padding: '0px 0px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
    fontWeight: '600',
    marginTop: '10px',
  },
  underbagInner: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    padding: '0px 0px',
    fontSize: '12px',
    fontWeight: '600',
    '& > img': {
      width: '110px',
      height: '100px',
      border: '1px solid #D4D4D4',
      borderRadius: '10px',
    },
    '& > div': {
      marginLeft: '20px',
    },
  },
  button: {
    position: 'fixed',
    width: '90%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
    marginTop: '20px',
    zIndex: '200',

    bottom: '20px',
  },
  next: {
    width: '130px',
    height: '40px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    marginTop: '40px',
    marginBottom: '40px',
    backgroundColor: '#2C9247',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '5px',
  },
  back: {
    width: '130px',
    height: '40px',
    color: 'black',
    fontSize: '14px',
    fontWeight: '600',
    marginTop: '40px',
    marginBottom: '40px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '5px',
  },
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

const UnderBagMobile = ({
  setloadUnderbag,
  setcheckedOdoreadings,
  setloadOdoreadings,
  setcheckedUnderbag,
  setloadInterior,
}) => {
  const classes = useStyles();
  const next = () => {
    setloadUnderbag(false);
    setcheckedOdoreadings(true);
    setloadOdoreadings(true);
  };

  const back = () => {
    setloadUnderbag(false);
    setcheckedUnderbag(false);
    setloadInterior(true);
  };

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className={classes.underbag}>
      <p className={classes.underbagText}>Underbag</p>
      <br />
      <hr />
      <div className={classes.underbagInner}>
        <img src="img/2-30.jpg" alt="underbag" />
        <div>
          <p>Any leakage</p>
          <p>(Check by turning AC off )</p>
          <FormControlLabel
            value="bottom"
            control={
              <GreenRadio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-button-demo"
              />
            }
            label={<span style={{ fontSize: '12px' }}>Yes</span>}
            labelPlacement="right"
            className={classes.formControl}
          />

          <FormControlLabel
            value="bottom"
            control={
              <GreenRadio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-button-demo"
              />
            }
            label={<span style={{ fontSize: '12px' }}>No</span>}
            labelPlacement="right"
            className={classes.formControl}
          />
        </div>
      </div>
      <div className={classes.button}>
        <button className={classes.back} onClick={back}>
          Back
        </button>
        <button className={classes.next} onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UnderBagMobile;
