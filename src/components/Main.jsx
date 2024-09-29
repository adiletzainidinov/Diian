import { useState } from 'react';
import { Box, styled, Typography, Button, useMediaQuery } from '@mui/material';
import girl from '../assets/images/girl.png';
import clothes from '../assets/images/clothes.png';
import girls from '../assets/images/girls.png';
import star from '../assets/images/star.svg';
// import vector from '../assets/images/vector.svg';
import right from '../assets/images/right.svg';
import left from '../assets/images/left.svg';
import watch from '../assets/images/watchRelative.png';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const products = [
  {
    id: 1,
    src: girl,
    title: 'ПЛАТОК ШАЛЬ №1',
    description:
      'Элегантный платок с цветочным узором, идеальный для весеннего образа.',
    price: '1500р',
  },
  {
    id: 2,
    src: clothes,
    title: 'ПЛАТОК ШАЛЬ №2',
    description:
      'Универсальный платок в пастельных тонах, подходит как для casual, так и для офисного стиля.',
    price: '1300р',
  },
  {
    id: 3,
    src: girls,
    title: 'ПЛАТОК ШАЛЬ №3',
    description:
      'Яркий платок с абстрактным дизайном, добавляющий акцент в любой наряд.',
    price: '1700р',
  },
  {
    id: 4,
    src: girl,
    title: 'ПЛАТОК ШАЛЬ №4',
    description:
      'Стильный платок с геометрическим принтом, который отлично дополнит вечерний образ.',
    price: '2000р',
  },
  {
    id: 5,
    src: clothes,
    title: 'ПЛАТОК ШАЛЬ №5',
    description:
      'Мягкий платок из кашемира, идеально подходит для холодной погоды.',
    price: '2500р',
  },
  {
    id: 6,
    src: girls,
    title: 'ПЛАТОК ШАЛЬ №6',
    description:
      'Эксклюзивный платок с ручной росписью, который станет изюминкой вашего гардероба.',
    price: '3000р',
  },
];

const productsWatch = [
  {
    id: 1,
    src: watch,
    title: 'ЧАСЫ МОДЕЛЬ №1',
    description:
      'Классические механические часы с кожаным ремешком, идеальные для делового стиля.',
    price: '5000р',
  },
  {
    id: 2,
    src: watch,
    title: 'ЧАСЫ МОДЕЛЬ №2',
    description:
      'Современные смарт-часы с сенсорным экраном и множеством функций для активного образа жизни.',
    price: '7000р',
  },
  {
    id: 3,
    src: watch,
    title: 'ЧАСЫ МОДЕЛЬ №3',
    description:
      'Стильные часы с металлическим браслетом и водозащитой, подходящие для любых случаев.',
    price: '8000р',
  },
  {
    id: 4,
    src: watch,
    title: 'ЧАСЫ МОДЕЛЬ №4',
    description:
      'Швейцарские автоматические часы с сапфировым стеклом и минималистичным дизайном.',
    price: '12000р',
  },
  {
    id: 5,
    src: watch,
    title: 'ЧАСЫ МОДЕЛЬ №5',
    description:
      'Спортивные часы с ударопрочным корпусом и компасом, идеальны для любителей приключений.',
    price: '6000р',
  },
  {
    id: 6,
    src: watch,
    title: 'ЧАСЫ МОДЕЛЬ №6',
    description:
      'Элегантные женские часы с инкрустацией из кристаллов, подчёркивающие изысканный вкус.',
    price: '9500р',
  },
];

const Main = ({ tovarId }) => {
  const { isCatalog } = useSelector((state) => state.catalog);
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [showMore, setShowMore] = useState(false);

  const displayedProducts = isCatalog ? products : productsWatch;

  const isLargeScreen = useMediaQuery('(min-width: 991px)');
  const itemsToShow = isLargeScreen ? 3 : 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === displayedProducts.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? displayedProducts.length - itemsToShow : prevIndex - 1
    );
  };

  //   const handleViewAllClick = () => {
  //     setShowMore((prev) => !prev);
  //   };

  const handleBuyButtonClick = (product) => {
    const message = `Я хочу купить: ${product.title}. Цена: ${product.price}.`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Container>
      <MainBox id={tovarId}>
        <TextTovar>Наши товары</TextTovar>
        <SliderContainer>
          <ArrowLeft src={left} alt="left arrow" onClick={prevSlide} />
          <DisplayPhoto>
            {displayedProducts
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((product, index) => (
                <PhotoContainer key={index}>
                  <div
                    style={{
                      boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.1)',
                      padding: '15px 20px 30px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      borderRadius: '7px',
                    }}
                  >
                    <StyledImage src={product.src} alt={`Фото ${index + 1}`} />
                    <ProductInfo>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductDescription>
                        {product.description.split('\n').map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </ProductDescription>
                      {/* <MoreButtonWrapper>
                      <MoreButton variant="outlined">
                        Подробнее
                        <ArrowIcon src={vector} alt="стрелка" />
                      </MoreButton>
                    </MoreButtonWrapper> */}
                      <StarsContainer>
                        {[...Array(5)].map((_, starIdx) => (
                          <StarImage key={starIdx} src={star} alt="star" />
                        ))}
                      </StarsContainer>
                      <BuySection>
                        <BuyButton
                          onClick={() => handleBuyButtonClick(product)}
                        >
                          Купить
                        </BuyButton>
                        <Price>{product.price}</Price>
                      </BuySection>
                    </ProductInfo>
                  </div>
                </PhotoContainer>
              ))}
          </DisplayPhoto>
          <ArrowRight src={right} alt="right arrow" onClick={nextSlide} />
        </SliderContainer>
        {/* <ViewAllWrapper>
          <ViewAllButton variant="outlined" onClick={handleViewAllClick}>
            {showMore ? 'Скрыть' : 'Смотреть все'}
          </ViewAllButton>
        </ViewAllWrapper> */}
        {/* {showMore && (
          <MoreText>Здесь будут отображаться ваши карточки</MoreText>
        )} */}
      </MainBox>
    </Container>
  );
};

export default Main;

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

const TextTovar = styled(Typography)(() => ({
  margin: '90px',
  fontSize: '70px',
  textAlign: 'center',
  '@media (max-width: 1200px)': {
    fontSize: '60px',
    margin: '60px',
    marginTop: '160px',
  },
  '@media (max-width: 990px)': {
    fontSize: '50px',
    margin: '40px',
    marginTop: '140px',
  },
  '@media (max-width: 768px)': {
    fontSize: '40px',
    margin: '30px',
    marginTop: '130px',
  },
}));

const SliderContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
}));

const DisplayPhoto = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  '@media (max-width: 990px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const PhotoContainer = styled(Box)(() => ({
  flex: '1 0 30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  '@media (max-width: 990px)': {
    width: '80%',
  },
  '@media (max-width: 768px)': {
    width: '100%',
    padding: '0',
  },
}));

const StyledImage = styled('img')(() => ({
  width: '250px',
  height: '350px',
  '@media (max-width: 990px)': {
    width: '200px',
  },
  '@media (max-width: 768px)': {
    width: '180px',
  },
}));

const ProductInfo = styled(Box)(() => ({
  textAlign: 'center',
  marginTop: '10px',
}));

const ProductTitle = styled(Typography)(() => ({
  fontSize: '20px',
  fontWeight: 'bold',
  '@media (max-width: 768px)': {
    fontSize: '18px',
  },
}));

const ProductDescription = styled(Typography)(() => ({
  fontSize: '14px',
  color: '#555',
  width: '100%',
  maxWidth: '300px',
  '@media (max-width: 768px)': {
    fontSize: '12px',
  },
}));

const StarsContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
}));

const StarImage = styled('img')(() => ({
  width: '30px',
  height: '24px',
  margin: '0 2px',
  '@media (max-width: 768px)': {
    width: '25px',
    height: '20px',
  },
}));

// const MoreButtonWrapper = styled(Box)(() => ({
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: '10px',
// }));

// const MoreButton = styled(Button)(() => ({
//   borderRadius: '50px',
//   borderColor: 'black',
//   color: 'black',
//   '@media (max-width: 768px)': {
//     fontSize: '12px',
//   },
// }));

// const ArrowIcon = styled('img')(() => ({
//   marginLeft: '4px',
//   width: '20px',
//   height: '20px',
//   cursor: 'pointer',
//   '@media (max-width: 768px)': {
//     width: '16px',
//     height: '16px',
//   },
// }));

const BuySection = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '15px',
  '@media (max-width: 768px)': {
    marginTop: '10px',
  },
}));

const Price = styled(Typography)(() => ({
  fontSize: '30px',
  marginLeft: '15px',
  color: '#333',
  '@media (max-width: 768px)': {
    fontSize: '20px',
    marginLeft: '10px',
  },
}));

const BuyButton = styled(Button)(() => ({
  backgroundColor: '#333',
  color: '#fff',
  fontSize: '16px',
  padding: '8px 20px',
  borderRadius: '50px',
  '@media (max-width: 768px)': {
    fontSize: '14px',
    padding: '6px 15px',
  },
}));

// const ViewAllWrapper = styled(Box)(() => ({
//   marginTop: '30px',
//   display: 'flex',
//   justifyContent: 'center',
//   '@media (max-width: 768px)': {
//     marginTop: '20px',
//   },
// }));

// const ViewAllButton = styled(Button)(() => ({
//   borderRadius: '50px',
//   borderColor: 'black',
//   color: 'black',
// }));

// const MoreText = styled(Typography)(() => ({
//   marginTop: '20px',
//   textAlign: 'center',
//   fontSize: '16px',
//   '@media (max-width: 768px)': {
//     fontSize: '14px',
//   },
// }));

const ArrowLeft = styled('img')(() => ({
  width: '30px',
  cursor: 'pointer',
  margin: '0 10px',
  height: 80,
  zIndex: 1000,
  '@media (max-width: 768px)': {
    width: '24px',
  },
}));

const ArrowRight = styled('img')(() => ({
  width: '30px',
  cursor: 'pointer',
  margin: '0 10px',
  height: 80,
  '@media (max-width: 768px)': {
    width: '24px',
  },
}));

Main.propTypes = {
  tovarId: PropTypes.string.isRequired,
};
