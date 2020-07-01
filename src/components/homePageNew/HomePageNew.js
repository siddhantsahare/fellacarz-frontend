import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Slide } from 'react-slideshow-image';
import { makeStyles } from '@material-ui/core/styles';
import BooktabHomepage from './BooktabHomepage';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';

const slideImages = ['img/Frame1.png', 'img/Frame2.png', 'img/Frame3.png'];

const properties = {
  duration: 100000,
  transitionDuration: 20000,
  infinite: false,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const useStyles = makeStyles((theme) => ({
  homepageNew: {
    position: 'relative',
    width: '100%',
    height: '100%',
    marginTop: '-65px',
    overflowX: 'hidden',
  },
  //   Nav bar styles
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    width: '100%',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  logo: {
    width: '156px',
    height: '42px',
    marginLeft: '130px',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '600',
    '& > li': {
      margin: '0px 30px',
      fontSize: '16px',
    },
    '& > li:last-child': {
      marginRight: '100px',
      backgroundColor: ' #329146',
      width: '117px',
      height: '38px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '15px',
      borderRadius: '8px',
      '& > a': {
        color: 'white',
      },
    },
  },
  //   Section Main styles
  sectionMain: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: '720px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  },
  sectionMainBookTab: {
    marginLeft: '128px',
    marginTop: '174px',
    [theme.breakpoints.down('md')]: {
      marginTop: '0px',
      marginRight: '510px',
    },
  },
  topStrip: {
    position: 'absolute',
    right: '100px',
    top: '-100px',
    zIndex: '-1',
    [theme.breakpoints.down('md')]: {
      right: '20px',
      top: '0px',
      width: '50px',
    },
  },
  topStrip2: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: '50px',
      position: 'absolute',
      right: '20px',
      top: '290px',
      zIndex: '-1',
    },
  },
  bottomStrip: {
    marginTop: '20px',
    position: 'absolute',
    left: '0px',
    right: '0px',
    top: '520px',
    width: '100%',
    zIndex: '-1',
    [theme.breakpoints.down('md')]: {
      top: '550px',
      width: '100%',
    },
  },
  fellacarzNew: {
    marginTop: '250px',
    zIndex: '3',
    [theme.breakpoints.down('md')]: {
      marginLeft: '100px',
      marginTop: '200px',
      width: '300px',
    },
  },
  landingbg: {
    zIndex: '-4',
    position: 'absolute',
    right: '0',
    top: '-80px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },

  //   Section why choose fellacarz

  sectionWhyChooseFellacarz: {
    position: 'absolute',
    width: '100%',
    top: '750px',
    height: '1200px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-120px',
    },
  },

  sectionAchievement: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sectionAchievementDiv: {
    fontSize: '15px',
    fontWeight: '600',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > p': {
      margin: '20px 0px',
    },
  },
  sectionWhyChooseFellacarzInner: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    '& > h1': {
      fontSize: '28px',
      color: '#329146',
    },
  },
  sectionWhyChooseFellacarzInner1: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  ul1: {
    position: 'absolute',
    top: '200px',
    fontSize: '18px',
    fontWeight: '600',
    marginLeft: '20px',
    '& > ul > li': {
      listStyleType: 'disc',
      lineHeight: '50px',
    },

    [theme.breakpoints.down('md')]: {
      top: '100px',
      fontSize: '10px',
      marginLeft: '30px',
      '& > ul > li': {
        listStyleType: 'disc',
        lineHeight: '20px',
        marginTop: '5px',
      },
    },
  },

  imageLeftBG: {
    position: 'absolute',
    left: '0',
    top: '-30px',

    [theme.breakpoints.down('md')]: {
      width: '240px',
      height: '200px',
      top: '60px',
    },
  },

  imageLeftMan: {
    position: 'absolute',
    left: '100px',
    top: '100px',

    [theme.breakpoints.down('md')]: {
      width: '240px',
      height: '200px',
      left: '10px',
      top: '60px',
    },
  },

  sectionWhyChooseFellacarzInner2: {
    display: 'flex',
    top: '250px',
  },

  imageRightBG: {
    position: 'absolute',
    right: '0px',
    top: '500px',

    [theme.breakpoints.down('md')]: {
      width: '240px',
      height: '200px',
      right: '0px',
      top: '300px',
    },
  },

  imageRightOffice: {
    position: 'absolute',
    right: '100px',
    top: '600px',

    [theme.breakpoints.down('md')]: {
      width: '240px',
      height: '200px',
      right: '0px',
      top: '300px',
    },
  },
  ul2: {
    position: 'absolute',
    top: '800px',
    left: '400px',
    fontSize: '18px',
    fontWeight: '600',
    marginLeft: '20px',
    '& > ul > li': {
      listStyleType: 'disc',
      lineHeight: '50px',
    },

    [theme.breakpoints.down('md')]: {
      top: '350px',
      left: '10px',
      fontSize: '10px',
      marginLeft: '10px',
      '& > ul > li': {
        listStyleType: 'disc',
        lineHeight: '20px',
        marginTop: '5px',
      },
    },
  },

  sectionOurMission: {
    width: '100vw',
    height: '410px',
    position: 'absolute',
    top: '2100px',

    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& > h1': {
        fontSize: '28px',
        fontWeight: '600',
        color: '#329146',
      },
      '& > p': {
        fontSize: '15px',
        fontWeight: '600',
        margin: '0px 20px',
        marginTop: '30px',
        [theme.breakpoints.down('md')]: {
          fontSize: '12px',
          margin: '0px 10px',
          marginTop: '30px',
        },
      },
      '& > div > img': {
        width: '130px',
        height: '150px',
        margin: '0px 50px',
        marginTop: '50px',
        [theme.breakpoints.down('md')]: {
          width: '50px',
          height: '60px',
          margin: '0px 30px',
          marginTop: '50px',
        },
      },
    },

    [theme.breakpoints.down('md')]: {
      top: '1200px',
    },
  },

  sectionTestimonials: {
    width: '100%',
    height: '520px',
    position: 'absolute',
    top: '2500px',
    backgroundColor: 'rgba(50, 145, 70, 0.11)',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
      '& > h1': {
        fontSize: '28px',
        fontWeight: '600',
        color: '#329146',
      },
    },

    [theme.breakpoints.down('md')]: {
      top: '1500px',
      height: '580px',
    },
  },
  slideshow: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '60px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
      ' & > div': {
        width: '200px',
        height: '200px',
      },
    },
  },
  slideshowInner: {
    width: '750px',
    marginTop: '50px',
    marginLeft: '50px',
    position: 'relative',
    '& > h4': {
      marginTop: '0px',
    },
    '& > p': {
      margin: '10px 0px',
      fontSize: '18px',
      fontWeight: '600',
    },

    [theme.breakpoints.down('md')]: {
      width: '450px',
      marginTop: '20px',
      marginLeft: '20px',
      '& > p': {
        margin: '10px 0px',
        fontSize: '11px',
      },
      '& > h4': {
        position: 'absolute',
        right: '10px',
      },
    },
  },

  icons: {
    color: '#329146',
    margin: '0px 10px',
  },

  sectionContactUs: {
    width: '100vw',
    height: '610px',
    position: 'absolute',
    top: '3100px',

    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& > h1': {
        fontSize: '28px',
        fontWeight: '600',
        color: '#329146',
        marginTop: '50px',

        [theme.breakpoints.down('md')]: {
          marginTop: '20px',
        },
      },

      '& > div': {
        display: 'flex',
        width: '1200px',
        justifyContent: 'space-between',
        marginTop: '100px',
        '& > div:first-child': {
          marginRight: '10px',
          width: '500px',
          display: 'flex',
          '& > p': {
            fontSize: '13px',
          },
        },

        '& > div:last-child': {
          marginRight: '10px',
          width: '500px',
          '& > div': {
            display: 'flex',
          },
        },

        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          width: '400px',
          marginTop: '30px',
          alignItems: 'center',
          fontSize: '12px',
          lineHeight: '20px',

          '& > div:first-child': {
            width: '300px',
            display: 'flex',
          },

          '& > div:last-child': {
            fontSize: '12px',
            lineHeight: '20px',
            marginTop: '15px',
            width: '300px',
            '& > div': {
              display: 'flex',
            },
          },
        },
      },
    },

    [theme.breakpoints.down('md')]: {
      top: '2130px',
      marginTop: '-30px',
    },
  },

  carImage: {
    position: 'absolute',
    right: '100px',
    marginTop: '-20px',
    [theme.breakpoints.down('md')]: {
      right: '0',
      marginTop: '-20px',
    },
  },

  sectionLogin: {
    width: '100vw',
    height: '310px',
    position: 'absolute',
    top: '3600px',
    backgroundColor: '#329146',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    '& > div:first-child': {
      display: 'flex',
      alignItems: 'center',
      '& > img': {
        marginRight: '20px',
      },

      '& > div': {
        fontSize: '18px',
        fontWeight: '600',
        color: 'white',
      },

      [theme.breakpoints.down('md')]: {
        '& > img': {
          marginRight: '10px',
          height: '50px',
        },
        '& > div': {
          fontSize: '13px',
        },
      },
    },

    '& > div:last-child': {
      display: 'flex',
      alignItems: 'center',
    },

    [theme.breakpoints.down('md')]: {
      top: '2550px',
      height: '210px',
    },
  },
  loginBtn: {
    color: 'white',
    backgroundColor: '#329146',
    border: '2px solid white',
    fontSize: '15px',
    fontWeight: '600',
    marginRight: '20px',

    '&:hover': {
      backgroundColor: '#329146',
      color: 'white',
      border: '2px solid white',
    },

    [theme.breakpoints.down('md')]: {
      marginRight: '5px',
      width: '30px',
      fontSize: '12px',
    },
  },
  signupBtn: {
    color: '#329146',
    backgroundColor: 'white',
    border: '2px solid #329146',
    fontSize: '15px',
    fontWeight: '600',
    marginLeft: '20px',

    '&:hover': {
      color: '#329146',
      backgroundColor: 'white',
      border: '2px solid #329146',
    },

    [theme.breakpoints.down('md')]: {
      marginLeft: '5px',
      width: '30px',
      fontSize: '12px',
    },
  },

  sectionFooter: {
    width: '100vw',
    height: '310px',
    position: 'absolute',
    top: '3900px',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    '& > div': {
      display: 'flex',
      '& > p': {
        margin: '0px 10px',
        fontSize: '15px',
        fontWeight: '600',
      },
    },

    '& > div:last-child > img': {
      color: 'white',
    },

    [theme.breakpoints.down('md')]: {
      top: '2750px',
      height: '150px',
      display: 'flex',
      flexDirection: 'column',

      '& > div': {
        '& > p': {
          fontSize: '13px !important',
        },
      },
    },
  },
  socialIcons: {
    color: 'white',
    backgroundColor: 'white',
    width: '30px',
    height: '30px',
    margin: '0px 5px',
  },
}));

const HomePageNew = () => {
  const classes = useStyles();
  return (
    <div className={classes.homepageNew}>
      {/* Navbar */}
      <ul className={classes.navbar}>
        <div>
          <img src="img/white.png" alt="logo" className={classes.logo} />
        </div>
        <div className={classes.links}>
          <li>
            <a href="#section-whyFellacarz">Why Fellacarz?</a>
          </li>
          <li>
            <a href="#section-ourMission">Our Mission</a>
          </li>
          <li>
            <a href="#section-testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#section-contactUs">Contact Us</a>
          </li>
          <li>
            <a href="#section-login">Login</a>
          </li>
          <li>
            <a href="#section-signup">Sign Up</a>
          </li>
          <li>
            <a href="#section-bookNow">Book Now</a>
          </li>
        </div>
      </ul>

      {/* Section Main */}
      <section className={classes.sectionMain}>
        <div className={classes.sectionMainBookTab}>
          <BooktabHomepage />
        </div>
        <div>
          <img
            src="img/topStrip.png"
            alt="topStrip"
            className={classes.topStrip}
          />
          <img
            src="img/topStrip.png"
            alt="topStrip"
            className={classes.topStrip2}
          />
          <img
            src="img/fellacarzNew.png"
            alt="Fellacarz"
            className={classes.fellacarzNew}
          />
          <img
            src="img/bottomStrip.png"
            alt="Fellacarz"
            className={classes.bottomStrip}
          />
          <img
            src="img/landingGreebBg.png"
            alt="landingbg"
            className={classes.landingbg}
          />
        </div>
      </section>

      {/* Section Why fellacarz */}
      <Scrollspy
        items={[
          'section-whyFellacarz',
          'section-ourMission',
          'section-testimonials',
          '#section-contactUs',
        ]}
        currentClassName="is-current"
      >
        <section
          className={classes.sectionWhyChooseFellacarz}
          id="section-whyFellacarz"
        >
          {/* Fellacarz achievement section */}
          <div className={classes.sectionAchievement}>
            <div className={classes.sectionAchievementDiv}>
              <img src="img/userIcon.png" alt="User Icon" />
              <p>10K+ Happy Customers</p>
            </div>
            <div className={classes.sectionAchievementDiv}>
              <img src="img/pinIcon.png" alt="Pin Icon" />
              <p>5 Lakh+ Travelled</p>
            </div>
            <div className={classes.sectionAchievementDiv}>
              <img src="img/starIcon.png" alt="Star Icon" />
              <p>4.8/5 Rated On Google</p>
            </div>
          </div>

          <div className={classes.sectionWhyChooseFellacarzInner}>
            <h1>Why Choose Fellacarz?</h1>
            <div className={classes.sectionWhyChooseFellacarzInner1}>
              <div>
                <img
                  src="img/EllipseLeft.png"
                  alt="EllipseLeft"
                  className={classes.imageLeftBG}
                />
                <img
                  src="img/FellacarzMan.png"
                  alt="Fellacarz Man"
                  className={classes.imageLeftMan}
                />
              </div>
              <div className={classes.ul1}>
                <ul>
                  <li>Sanitisation after each ride.</li>
                  <li>Unbeatable rules.</li>
                  <li>Quick and easy booking process.</li>
                  <li>Clean and well-maintained cars</li>
                </ul>
              </div>
            </div>
            <div className={classes.sectionWhyChooseFellacarzInner2}>
              <div className={classes.ul2}>
                <ul>
                  <li>Sanitisation after each ride.</li>
                  <li>Unbeatable rules.</li>
                  <li>Quick and easy booking process.</li>
                  <li>Clean and well-maintained cars</li>
                </ul>
              </div>

              <div>
                <img
                  src="img/FellacarzOffice.png"
                  alt="Fellacarz Office"
                  className={classes.imageRightOffice}
                />
                <img
                  src="img/EllipseRight.png"
                  alt="EllipseRigh"
                  className={classes.imageRightBG}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={classes.sectionOurMission} id="section-ourMission">
          <div>
            <h1>Our Mission</h1>
            <p>
              We are on a Mission to help billions of travellers and city
              dwellers find their Perfect Mobility to Travel and Explore,
              ensuring Safety and Privacy on Priority.
            </p>
            <div>
              <img src="img/Frame1.png" alt="Frame 1" />
              <img src="img/Frame2.png" alt="Frame 2" />
              <img src="img/Frame3.png" alt="Frame 3" />
            </div>
          </div>
        </section>

        <section
          className={classes.sectionTestimonials}
          id="section-testimonials"
        >
          <div>
            <h1>Testimonials</h1>

            <div>
              <Slide {...properties}>
                <div className="each-slide">
                  <div className={classes.slideshow}>
                    <div
                      style={{
                        backgroundImage: `url(${slideImages[0]})`,
                      }}
                    />
                    <div className={classes.slideshowInner}>
                      <div>
                        <img src="img/vector.png" alt="vector" />
                        <img src="img/vector1.png" alt="vector1" />
                      </div>
                      <p>
                        1 Smooth Booking process and Documentation. Got refund
                        of security deposit within
                      </p>
                      <h4>- Saurav Singh </h4>
                    </div>
                  </div>
                </div>
                <div className="each-slide">
                  <div className={classes.slideshow}>
                    <div
                      style={{
                        backgroundImage: `url(${slideImages[1]})`,
                        width: '200px',
                        height: '200px',
                      }}
                    />
                    <div className={classes.slideshowInner}>
                      <div>
                        <img src="img/vector.png" alt="vector" />
                        <img src="img/vector1.png" alt="vector1" />
                      </div>
                      <p>
                        2 Smooth Booking process and Documentation. Got refund
                        of security deposit within 20min
                      </p>
                      <h4>- Saurav Singh </h4>
                    </div>
                  </div>
                </div>

                <div className="each-slide">
                  <div className={classes.slideshow}>
                    <div
                      style={{
                        backgroundImage: `url(${slideImages[1]})`,
                        width: '200px',
                        height: '200px',
                      }}
                    />
                    <div className={classes.slideshowInner}>
                      <div>
                        <img src="img/vector.png" alt="vector" />
                        <img src="img/vector1.png" alt="vector1" />
                      </div>
                      <p>
                        3 Smooth Booking process and Documentation. Got refund
                        of security deposit within 20min
                      </p>
                      <h4>- Saurav Singh </h4>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </section>

        <section className={classes.sectionContactUs} id="section-contactUs">
          <div>
            <h1>Contact us</h1>
            <div>
              <div>
                <RoomIcon className={classes.icons} />
                <h3>
                  MALAVIYA NATIONAL INSTITUTE OF TECHNOLOGY JAIPUR, MALVIYA
                  NAGAR, JAIPUR, RAJASTHAN – 302017
                </h3>
              </div>

              <div>
                <div>
                  <EmailIcon className={classes.icons} />
                  <h3>support@fellacarz.com</h3>
                </div>
                <br />
                <div>
                  <PhoneIcon className={classes.icons} />
                  <h3>+91 9351063296</h3>
                </div>
              </div>
            </div>
            <div>
              <img
                src="img/car.png"
                alt="Contact Car"
                className={classes.carImage}
              />
            </div>
          </div>
        </section>

        <section className={classes.sectionLogin} id="section-login">
          <div>
            <img src="img/fellacarzIcon.png" alt="fellacarz Icon" />
            <div>
              <h3>Login / Signup</h3>
              <p>to book your car now</p>
            </div>
          </div>

          <div>
            <Button variant="contained" className={classes.loginBtn}>
              Login
            </Button>

            <Button
              variant="contained"
              color="primary"
              className={classes.signupBtn}
            >
              Signup
            </Button>
          </div>
        </section>

        <section className={classes.sectionFooter} id="section-footer">
          <div>
            <p>Why Us? </p>
            <p>Our Mission</p>
            <p>Testimonials</p>
            <p>Contact Us</p>
          </div>

          <div>
            <img
              src="img/facebook.png"
              alt="Facebook"
              className={classes.socialIcons}
            />
            <img
              src="img/twiiter.png"
              alt="Twitter"
              className={classes.socialIcons}
            />
            <img
              src="img/youtube.png"
              alt="Youtube"
              className={classes.socialIcons}
            />
            <img
              src="img/linkedin.png"
              alt="Linkedin"
              className={classes.socialIcons}
            />
          </div>
        </section>
      </Scrollspy>
    </div>
  );
};

export default HomePageNew;
