import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
  root: {
    marginLeft: '50px',

    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#318347',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  icons: {
    fontSize: '40px',
    color: 'green',
  },
  odoText: {
    padding: '0px 0px',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
    fontWeight: '600',
    marginTop: '10px',
  },
  odo: {
    '& > div': {
      display: 'flex',
      margin: '20px 0px',
      alignItems: 'center',
    },
  },

  upload: {
    backgroundColor: 'inherit',
    borderRadius: '5px',
    border: '1px dashed #9D9D9D',
    display: 'flex',
    flexDirection: 'column',
    width: '100px',
    height: '100px',
    justifyContent: 'center',
    margin: '0px 10px',
    '& > p': {
      fontSize: '11px',
      fontWeight: '600',
      margin: '10px 10px',
    },
  },
  addImages: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& > div > p': {
      fontSize: '11px',
    },

    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  imgPreview: {
    '& > img': {
      width: '100%',
      height: '100%',
    },
  },
  input: {
    display: 'none',
  },
  customfileupload: {
    color: '#2C9247',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 6px',
    cursor: 'pointer',
    '& > p': {
      fontSize: '12px',
      fontWeight: '600',
    },
  },
  images: {
    borderRadius: '5px',
    width: '100px',
    height: '110px',
    display: 'flex',
    alignItems: 'center',
    margin: '0px 10px',
  },
  imageHandler: {
    display: 'flex',
  },
  button: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#EEEEEE',
    borderRadius: '10px',
    position: 'fixed',
    bottom: '0px',
    padding: '0px 20px',
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

const OdoreadingsMobile = ({
  setloadOdoreadings,
  setcheckedodoreadings,
  setloadUnderbag,
}) => {
  const classes = useStyles();

  const back = () => {
    setloadOdoreadings(false);
    setcheckedodoreadings(false);
    setloadUnderbag(true);
  };

  // image upload states
  const [file, setfile] = useState('');
  const [imagePreviewUrl, setimagePreviewUrl] = useState('');
  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = <img src={imagePreviewUrl} alt={imagePreviewUrl} />;
  } else {
    $imagePreview = <div className="previewText"></div>;
  }

  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle uploading-', file);
  };

  const _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setfile(file);
      setimagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.odo}>
      <p className={classes.odoText}>Odo readings</p>
      <br />
      <hr />
      <div>
        <AvTimerIcon className={classes.icons} />
        <form className={classes.root} noValidate>
          <CssTextField
            className={classes.margin}
            label="Enter Km"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </form>
      </div>
      <div>
        <LocalGasStationIcon className={classes.icons} />
        <form className={classes.root} noValidate>
          <CssTextField
            className={classes.margin}
            label="Enter Fuel Bar"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </form>
      </div>
      <div className={classes.imageHandler}>
        <div className={classes.upload}>
          <p>Upload Picture</p>
          <div className={classes.addImages}>
            <CameraAltIcon />
            <div>
              <form onSubmit={(e) => _handleSubmit(e)}>
                <label for="file-upload" className={classes.customfileupload}>
                  <p>Add images</p>
                </label>
                <input
                  id="file-upload"
                  className={classes.input}
                  type="file"
                  onChange={(e) => _handleImageChange(e)}
                />
              </form>
            </div>
          </div>
        </div>
        <div className={classes.images}>
          <div className={classes.imgPreview}>{$imagePreview}</div>
        </div>
      </div>
      <div className={classes.button}>
        <button className={classes.back} onClick={back}>
          Back
        </button>
        <button className={classes.next}>Next</button>
      </div>
    </div>
  );
};

export default OdoreadingsMobile;
