import { Box, Button, styled } from '@mui/material';
import { useState } from 'react';
import Diian from '../assets/images/Diian.svg';
import GirlsPhoto from '../assets/images/GirlsPhoto.png';
import Photos from '../assets/images/Photos.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import {
  isCatalogFalse,
  isCatalogTrue,
} from '../store/slices/catalogSlice/catalogSlice';
import watchRelativeReal from '../assets/images/relativeSecond.png';
import watchRelative from '../assets/images/watchRelative.png';
import PropTypes from 'prop-types';

const Header = ({ aboutId, contactId, tovarId }) => {
  const dispatch = useDispatch();
  const { isCatalog } = useSelector((state) => state.catalog);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalog, setCatalog] = useState(false);

  console.log(isCatalog);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCatalog = () => {
    setCatalog((prev) => !prev);
  };

  const handleIsCatalogTrue = () => {
    dispatch(isCatalogTrue());
  };

  const handleIsCatalogFalse = () => {
    dispatch(isCatalogFalse());
  };

  return (
    <>
      <Container>
        <MainBox>
          <BackgroundColor>
            <LeftBox>
              <NavLink>
                <img className="header-img" src={Diian} alt="" />

                <MenuIconWrapper onClick={toggleMenu}>
                  {menuOpen ? <CloseIcon /> : <MenuIcon fontSize="92px" />}
                </MenuIconWrapper>

                <NavItems className={menuOpen ? 'active' : ''}>
                  <a href={`#${aboutId}`}>О нас</a>
                  <a href={`#`} style={{ position: 'relative' }}>
                    <p onClick={handleCatalog}>Каталог</p>{' '}
                    {catalog && (
                      <Catalog>
                        <p onClick={handleIsCatalogTrue}>Платки</p>
                        <p onClick={handleIsCatalogFalse}>Часы</p>
                        <Button
                          onClick={handleCatalog}
                          variant="contained"
                          sx={{ mt: 2 }}
                        >
                          Назад
                        </Button>
                      </Catalog>
                    )}
                  </a>
                  <a href={`#${tovarId}`}>Товары</a>
                  <a href={`#${contactId}`}>Контакты</a>
                </NavItems>
              </NavLink>

              <MainContent>
                <img className="contant-img" src={Diian} alt="" />
                {isCatalog ? (
                  <p className="text_platki">
                    Платки,которые <br />
                    <span>передают эмоции</span>
                  </p>
                ) : (
                  <p className="text_platki">
                    Часы, которые
                    <br />
                    <span>выражают эмоции.</span>
                  </p>
                )}
              </MainContent>
            </LeftBox>
            <RightImg>
              <img
                className="mainImg"
                src={isCatalog ? GirlsPhoto : watchRelative}
                alt=""
              />
              <RelativeImg>
                <img
                  className="img-relative"
                  src={isCatalog ? Photos : watchRelativeReal}
                  alt=""
                />
              </RelativeImg>
            </RightImg>
          </BackgroundColor>
        </MainBox>
      </Container>
    </>
  );
};

export default Header;

const Container = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const MainBox = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  display: 'flex',
  flexDirection: 'column',
}));

const BackgroundColor = styled(Box)(() => ({
  width: '100%',
  backgroundColor: '#e5e4df',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (max-width: 990px)': {
    flexWrap: 'wrap',
  },
}));

const LeftBox = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  paddingRight: '40px',
  marginLeft: '40px',
  '@media (max-width: 990px)': {
    padding: '0 10px',
    height: '100%',
    maxHeight: 550,
  },
  '@media (max-width: 768px)': {
    paddingRight: '10px',
    marginLeft: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: 450,
  },
}));

const NavLink = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxHeight: '100px',
  fontSize: '30px',
  fontFamily: 'sans-serif',
  gap: '30px',
  flexWrap: 'wrap',
  '& a': {
    textDecoration: 'none',
    color: 'black',
  },

  '& .header-img': {
    width: '170px',
    height: '70px',
  },

  '@media (max-width: 1150px)': {
    fontSize: '26px',
    '& .header-img': {
      width: '160px',
      height: '60px',
    },
  },
  '@media (max-width: 768px)': {
    justifyContent: 'space-between',
    width: '100%',
  },
  '@media (max-width: 500px)': {
    '& .header-img': {
      width: '90px',
      height: '70px',
    },
  },
}));

const MenuIconWrapper = styled(Box)(() => ({
  display: 'none',
  cursor: 'pointer',

  '@media (max-width: 768px)': {
    display: 'block',
    fontSize: '36px',
    color: 'black',
    marginLeft: '80px',
  },
}));

const NavItems = styled(Box)(() => ({
  display: 'flex',
  gap: '30px',
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    display: 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '100px',
    right: '0',
    backgroundColor: '#fff',
    width: '200px',
    padding: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',

    '& a': {
      padding: '10px 0',
      color: 'black',
      textAlign: 'center',
    },
  },

  '&.active': {
    display: 'flex',
  },
}));

const MainContent = styled(Box)(() => ({
  width: '100%',
  maxWidth: '650px',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '150px',

  '& .contant-img': {
    width: '350px',
    height: '150px',
    alignItems: 'center',
    margin: '0 auto',
  },

  '& .text_platki': {
    fontSize: '42px',
    fontWeight: '500',
    '& span': {
      marginLeft: '140px',
      marginTop: '5px',
    },
  },
  '@media (max-width: 1150px)': {
    '& .contant-img': {
      width: '280px',
      marginLeft: 100,
    },
    '& .text_platki': {
      fontSize: '36px',
      fontWeight: '500',
      '& span': {
        marginLeft: '100px',
        marginTop: '5px',
      },
    },
  },

  '@media (max-width: 990px)': {
    margin: '0 auto',
    marginTop: 130,
    width: '50%',
  },
  '@media (max-width: 768px)': {
    fontSize: '24px',
    marginTop: '50px',
  },
  '@media (max-width: 600px)': {
    '& .contant-img': {
      width: '260px',
      marginLeft: -50,
    },
    '& .text_platki': {
      marginLeft: 50,
    },
  },
  '@media (max-width: 500px)': {
    width: '100%',
    '& .contant-img': {
      width: '209px',
      marginLeft: 50,
    },
    '& .text_platki': {
      marginLeft: 70,
      fontSize: 30,
    },
  },
  '@media (max-width: 450px)': {
    '& .text_platki': {
      '& span': {
        marginLeft: 50,
      },
    },
  },
  '@media (max-width: 400px)': {
    '& .text_platki': {
      marginLeft: 40,
      fontSize: 26,
    },
  },
  '@media (max-width: 350px)': {
    '& .text_platki': {
      marginLeft: 30,
      fontSize: 24,
    },
  },
}));

const RightImg = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  height: 650,
  maxWidth: '550px',
  '& img': {
    width: '100%',
    height: '100%',
    maxHeight: '650px',
  },
  '@media (max-width: 990px)': {
    maxWidth: 990,
  },
  '@media (max-width: 768px)': {
    maxWidth: '100%',
    maxHeight: '400px',
  },
}));

const RelativeImg = styled(Box)(() => ({
  position: 'absolute',
  top: '121.2px',
  right: '400px',
  width: '300px',
  height: '530px',
  '& .img-relative': {
    width: '100%',
    height: '100%',
    borderTopRightRadius: '200px',
    borderTopLeftRadius: '200px',
  },
  '@media (max-width: 1250px)': {
    right: 300,
  },
  '@media (max-width: 1150px)': {
    width: 250,
    // top: 195.5,
    right: 420,
  },
  '@media (max-width: 1110px)': {
    right: 380,
  },
  '@media (max-width: 1170px)': {
    right: 330,
  },
  '@media (max-width: 1130px)': {
    right: 280,
  },
  '@media (max-width: 990px)': {
    right: 600,
    top: 150,
    '& .img-relative': {
      width: '100%',
      minWidth: 300,
      height: '500px',
    },
  },
  '@media (max-width: 850px)': {
    right: 460,
    top: 150,
  },
  '@media (max-width: 766px)': {
    right: 360,
    top: 100,
    '& .img-relative': {
      width: '100%',
      minWidth: 200,
      height: '300px',
    },
  },
  '@media (max-width: 650px)': {
    right: 260,
  },
  '@media (max-width: 550px)': {
    right: 160,
    '& .img-relative': {
      width: '100%',
      maxWidth: 100,
      height: '300px',
    },
  },
  '@media (max-width: 420px)': {
    right: 100,
  },
  '@media (max-width: 350px)': {
    right: 75,
  },
  '@media (max-width: 320px)': {
    right: 55,
    top: 150,
    '& .img-relative': {
      height: '250px',
    },
  },
  '@media (max-width: 310px)': {
    right: 45,
  },
}));

// catalog

const Catalog = styled(Box)(() => ({
  backgroundColor: 'white',
  borderRadius: 6,
  padding: '20px 30px',
  cursor: 'pointer',
  position: 'absolute',
  top: 30,
  left: 30,
  boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.1)',
  p: {
    fontSize: 22,
    borderBottom: '1px solid black',
    paddingBottom: 8,
    marginTop: 5,
  },
}));

Header.propTypes = {
  aboutId: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
  tovarId: PropTypes.string.isRequired,
};
