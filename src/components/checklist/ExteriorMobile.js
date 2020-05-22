import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  exterior: {
    display: 'flex',
    flexDirection: 'column',
  },
  exteriorText: {
    fontSize: '12px',
    fontWeight: '600',
    margin: '20px 0px',
  },
  SideText: {
    fontSize: '12px',
    fontWeight: '600',
    marginTop: '20px',
  },
  imagesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '15px',
    marginTop: '10px',
  },
  imagesInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '75px',
    height: '140px',
    marginBottom: '10px',
    marginTop: '10px',
    position: 'relative',
  },
  imagesInnertText1: {
    fontSize: '11px',
    fontWeight: '600',
    padding: '0px 0px',
    marginTop: '5px',
  },

  imagesInnertText2: {
    position: 'absolute',
    fontSize: '9px',
    backgroundColor: '#F6F6F6',
    fontWeight: '500',
    width: '70px',
    height: '30px',
    padding: '10px 6px',
    bottom: '0',
  },
  images: {
    width: '60px',
    height: '60px',
    border: '1px solid #D4D4D4',
    borderRadius: '10px',
  },

  button: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: '5px',
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
}));

const ExteriorMobile = ({
  setloadExterior,
  setcheckedInterior,
  setloadInterior,
}) => {
  const classes = useStyles();

  const next = () => {
    setloadExterior(false);
    setcheckedInterior(true);
    setloadInterior(true);
  };
  return (
    <div className={classes.exterior}>
      {/* Font Side */}
      <p className={classes.exteriorText}>Exterior</p>
      <hr />
      <p className={classes.SideText}>Font Side</p>
      <div className={classes.imagesContainer}>
        <div className={classes.imagesInner}>
          <img src="img/1-01.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Bumper</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-02.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Headlight RH side</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-03.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Headlight LH side</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-04.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Bonnet</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-05.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Windshield</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-05.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Wiper</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-05.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Engine Splash Gaurd</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
      </div>
      {/* Driver Side */}
      <br />
      <hr />
      <p className={classes.SideText}>Driver Side</p>
      <div className={classes.imagesContainer}>
        <div className={classes.imagesInner}>
          <img src="img/1-06.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Wheel Front Side</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-07.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Fender</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-08.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Mirror</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-09.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Front Door</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-10.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Rear Door</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-11.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Wheel Rear Side</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-12.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Rear Quarter Panel</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-13.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Side Underbody</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
      </div>
      {/* Rear */}
      <br />
      <hr />
      <p className={classes.SideText}>Rear</p>
      <div className={classes.imagesContainer}>
        <div className={classes.imagesInner}>
          <img src="img/1-14.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Rear Bumper</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-15.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Headlight RH side</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-16.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Headlight LH side</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-17.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Bonnet</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-18.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Windshield</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-19.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Wiper (if any)</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-20.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Rear Underbody</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
      </div>

      {/* Passenger Side */}
      <br />
      <hr />
      <p className={classes.SideText}>Passenger Side</p>
      <div className={classes.imagesContainer}>
        <div className={classes.imagesInner}>
          <img src="img/1-21.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Rear Quarter Panel</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-22.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Wheel Rear Side</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-23.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Rear Door</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-24.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Front Door</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-25.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Mirror</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-26.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Wheel Front Side</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-27.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Fender</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
        <div className={classes.imagesInner}>
          <img src="img/1-28.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Side Underbody</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
      </div>
      <br />
      <hr />
      <p className={classes.SideText}>Passenger Side</p>
      <div className={classes.imagesContainer}>
        <div className={classes.imagesInner}>
          <img src="img/1-29.png" alt="font side" className={classes.images} />
          <p className={classes.imagesInnertText1}>Roof</p>
          <p className={classes.imagesInnertText2}>Multiple Dents</p>
        </div>
      </div>
      <div className={classes.button}>
        <button className={classes.next} onClick={next}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default ExteriorMobile;
