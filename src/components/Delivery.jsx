import { Box, Button, styled, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';

const Delivery = ({contactId}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container>
        <MainBox id={contactId}>
          <DeliveryText isMobile={isMobile}>Доставка</DeliveryText>
          <FlexButton isMobile={isMobile}>
            <a href="http://wa.me/+996709987557">
              <StyleButton isMobile={isMobile} variant="outlined">
                Доставка курьером по Москве
              </StyleButton>
            </a>
            <a href="http://wa.me/+996709987557">
              <StyleButton isMobile={isMobile} variant="outlined">
                Самовывоз
              </StyleButton>
            </a>
            <StyleButton
              isMobile={isMobile}
              onClick={() => (window.location.href = `tel:+996709987557`)}
              variant="outlined"
              sx={{ backgroundColor: '#ffffff', marginTop: '100px' }}
            >
              Наш телефон +79538402783
            </StyleButton>
          </FlexButton>
        </MainBox>
      </Container>
    </>
  );
};

export default Delivery;

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
  backgroundColor: '#f5f5f5',
  paddingBottom: 40,
}));

const DeliveryText = styled(Typography)(({ isMobile }) => ({
  fontSize: isMobile ? '30px' : '50px',
  margin: isMobile ? '20px' : '50px',
  textAlign: isMobile ? 'center' : 'left',
}));

const FlexButton = styled(Box)(({ isMobile }) => ({
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  gap: isMobile ? '20px' : '50px',
  marginLeft: isMobile ? '0' : '50px',
  alignItems: isMobile ? 'center' : 'flex-start',
  '@media (max-width: 900px)': {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const StyleButton = styled(Button)(({ isMobile }) => ({
  borderColor: 'black',
  color: 'black',
  width: isMobile ? '300px' : 'auto',
  fontSize: isMobile ? '12px' : '16px',
  whiteSpace: 'nowrap',
  '@media (max-width: 900px)': {
    marginTop: 0,
  },
}));

Delivery.propTypes = {
  contactId: PropTypes.string.isRequired, 
};