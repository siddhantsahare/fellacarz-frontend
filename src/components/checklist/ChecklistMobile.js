import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { green } from '@material-ui/core/colors';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import AddIcon from '@material-ui/icons/Add';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  content: {
    width: '355px',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 40px',
  },
  header: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  checklistMobile: {
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
  },
  togglers: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  imagesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '5px',
    '& > div': {
      width: '90px',
      height: '90px',
      backgroundColor: '#EFEFEF',
    },
    '& > div:last-child': {
      width: '90px',
      height: '90px',
      border: '1px dashed gray',
      backgroundColor: '#fff',
      color: 'gray',
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
  icon: {
    marginRight: '10px',
    marginLeft: '3px',
    borderRadius: '50%',
    backgroundColor: '#2C9247',
    color: 'white',
    fontSize: '14px',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  done: {
    width: '100px',
    height: '40px',
    color: 'white',
    backgroundColor: '#2C9247',
    borderRadius: '5px',
    boxShadow: '0px 3px 6px #00000029',
    fontSize: '14px',
    fontWeight: '600',
    marginTop: '20px',
  },
}));

const GreenSwitch = withStyles({
  switchBase: {
    color: green[300],
    '&$checked': {
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const ChecklistMobile = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [popover, setPopover] = useState(false);
  const [state, setState] = React.useState({
    scratches: true,
    dent: false,
    damage: true,
  });
  // For multiple image uploader
  // const [file, setfile] = useState([null]);
  // let fileObj = [];
  // let fileArray = [];
  // const uploadMultipleFiles = (e) => {
  //   fileObj.push(e.target.files);
  //   for (let i = 0; i < fileObj[0].length; i++) {
  //     fileArray.push(URL.createObjectURL(fileObj[0][i]));
  //   }
  //   setfile({ file: fileArray });
  // };

  // const uploadFiles = (e) => {
  //   e.preventDefault();
  //   console.log(file);
  // };

  // image upload states
  const [file, setfile] = useState('');
  const [imagePreviewUrl, setimagePreviewUrl] = useState('');

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

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? 'simple-popover' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const checklistPopover = (e) => {
    setPopover({
      popover: true,
    });
    setAnchorEl({
      anchorEl: e.currentTarget,
    });
  };

  let $imagePreview = null;
  if (imagePreviewUrl) {
    $imagePreview = <img src={imagePreviewUrl} alt={imagePreviewUrl} />;
  } else {
    $imagePreview = <div className="previewText"></div>;
  }
  return (
    <div className={classes.checklistMobile}>
      <Button
        variant="contained"
        className={classes.searchBtnMob}
        onClick={checklistPopover}
      >
        Click me to trigger the popover
      </Button>
      <div className="popover">
        <Popover
          id={id}
          open={popoverOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 1800, left: 150 }}
          anchorEl={anchorEl}
          onClose={handleClose}
          className={classes.popover}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <div className={classes.content}>
            {/* Image uploader for multiple images */}
            {/* <form>
              <div className="form-group multi-preview">
                {(fileArray || []).map((url) => (
                  <img src={url} alt="..." />
                ))}
              </div>

              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => uploadMultipleFiles(e)}
                  multiple
                />
              </div>
              <button
                type="button"
                className="btn btn-danger btn-block"
                onClick={(e) => uploadFiles(e)}
              >
                Upload
              </button>
            </form> */}
            <p className={classes.header}>Check List</p>

            <div className={classes.togglers}>
              <div>
                <p>Multiple Scratches</p>
                <GreenSwitch
                  checked={state.scratches}
                  onChange={handleChange}
                  name="scratches"
                />
              </div>
              <div>
                <p>Dent</p>
                <GreenSwitch
                  checked={state.dent}
                  onChange={handleChange}
                  name="dent"
                />
              </div>
              <div>
                <p>Damage</p>
                <GreenSwitch
                  checked={state.damage}
                  onChange={handleChange}
                  name="damage"
                />
              </div>
            </div>
            <div className={classes.imagesContainer}>
              <div className={classes.imgPreview}>{$imagePreview}</div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className={classes.addImages}>
                <CameraAltIcon />
                <div>
                  <form onSubmit={(e) => _handleSubmit(e)}>
                    <label
                      for="file-upload"
                      className={classes.customfileupload}
                    >
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
            <div className={classes.btnContainer}>
              <button className={classes.done}>Done</button>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};
export default ChecklistMobile;
