import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
  interior: {
    overflowY: 'auto',
    '& > div': {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      fontWeight: '600',
      fontSize: '12px',
      '& > p': {
        marginTop: '10px',
      },
      '& > div': {
        marginLeft: '25px',
      },
    },
    '& > div:first-child': {
      marginBottom: '10px',
    },
  },
  interiorText: {
    fontSize: '13px',
    fontWeight: '600',
  },
  button: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
  },
  next: {
    width: '130px',
    height: '40px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    marginTop: '40px',
    marginBottom: '40px',
    marginLeft: '25px',
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
    marginLeft: '30px',
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

const InteriorMobile = ({
  setloadInterior,
  setcheckedUnderbag,
  setloadUnderbag,
  setloadExterior,
  setcheckedInterior,
}) => {
  const classes = useStyles();
  const next = () => {
    setloadInterior(false);
    setcheckedUnderbag(true);
    setloadUnderbag(true);
  };
  const back = () => {
    setloadInterior(false);
    setcheckedInterior(false);
    setloadExterior(true);
  };
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className={classes.interior}>
      <div>
        <span className={classes.interiorText}>Interior</span>
        <div className={classes.interiorText}>Yes</div>
        <div className={classes.interiorText}>No</div>
      </div>
      <hr />
      <div>
        <p>AC</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>
      <hr />
      <div>
        <p>RC</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>
      <hr />
      <div>
        <p>PUC</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>
      <hr />
      <div>
        <p>Insurance</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>
      <hr />
      <div>
        <p>Permit</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>
      <hr />
      <div>
        <p>Gear</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>
      <hr />
      <div>
        <p>Brakes</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>
      <hr />
      <div>
        <p>Wipers</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>
      <hr />
      <div>
        <p>Headlights</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>
      <hr />
      <div>
        <p>Side indicators</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
      </div>
      <hr />
      <div>
        <p>Malfunction Light</p>
        <GreenRadio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
        />
        <GreenRadio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
        />
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

export default InteriorMobile;
