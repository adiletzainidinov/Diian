import { Box, styled } from '@mui/material';
import photo from '../assets/images/photo.png';
import relativeImg from '../assets/images/relativeImg.png';
import { useSelector } from 'react-redux';
import WatchArticle from '../assets/images/carwatch.jpeg';
import WatchArticleRelative from '../assets/images/watchArticleRelative.png';
import PropTypes from 'prop-types';


const Article = ({ aboutId }) => {
  const { isCatalog } = useSelector((state) => state.catalog);

  return (
    <div>
      <Container>
        <MainBox>
          <LeftBox>
            <MainImgBox>
              <img
                className="mainImg"
                src={isCatalog ? photo : WatchArticleRelative}
                alt=""
              />
              <img
                className="realativeImg"
                src={isCatalog ? relativeImg : WatchArticle}
                alt=""
              />
            </MainImgBox>
            <h2 id={aboutId}>О нас</h2>
          </LeftBox>
          <RightBox>
            <h3>
              <span>Больше</span> чем
            </h3>
            <h4>
              Просто <span>{isCatalog ? 'платки' : 'часы'}</span>
            </h4>
            <p>
              {isCatalog
                ? `
    Магазин платков — это место, где можно найти разнообразные
    аксессуары для головы и шеи, которые добавят изысканности и
    оригинальности в ваш образ. В магазине представлены платки
    различных стилей, материалов и цветов.
  `
                : `
    Магазин часов — это место, где стиль, точность и качество
    сочетаются в каждой модели. Здесь представлен широкий ассортимент
    часов на любой вкус и для любых целей.
  `}
            </p>
          </RightBox>
        </MainBox>
      </Container>
    </div>
  );
};

export default Article;

const Container = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const MainBox = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#e5e4df',
  paddingBottom: 200,
  marginTop: 80,
  '@media (max-width: 830px)': {
    flexDirection: 'column',
    paddingBottom: 120,
  },
}));

const LeftBox = styled('div')(() => ({
  display: 'flex',
  h2: {
    fontSize: 44,
    width: 120,
    fontWeight: 100,
    margin: 20,
  },
  '@media (max-width: 430px)': {
    h2: {
      fontSize: 36,
    },
  },
}));

const MainImgBox = styled('div')(() => ({
  position: 'relative',
  '& .mainImg': {
    width: '100%',
    minWidth: 400,
    height: '100%',
    maxHeight: 650,
    borderBottomRightRadius: '200px',
    borderBottomLeftRadius: '200px',
  },
  '& .realativeImg': {
    position: 'absolute',
    bottom: 0,
    right: -50,
    width: '100%',
    maxWidth: 250,
    height: '100%',
    maxHeight: 450,
    borderTopLeftRadius: '200px',
    borderTopRightRadius: '200px',
    borderBottomLeftRadius: '200px',
    borderBottomRightRadius: '200px',
  },
  '@media (max-width: 990px)': {
    '& .mainImg': {
      minWidth: 300,
    },
    '& .realativeImg': {
      maxWidth: 200,
      maxHeight: 400,
    },
  },
  '@media (max-width: 880px)': {
    '& .mainImg': {
      minWidth: 250,
    },
    '& .realativeImg': {
      maxWidth: 180,
      maxHeight: 350,
    },
  },
  '@media (max-width: 550px)': {
    '& .mainImg': {
      maxWidth: 150,
    },
    '& .realativeImg': {
      maxWidth: 160,
      maxHeight: 250,
    },
  },
  '@media (max-width: 430px)': {
    '& .mainImg': {
      minWidth: 200,
    },
    '& .realativeImg': {
      maxWidth: 150,
      maxHeight: 200,
    },
  },
  '@media (max-width: 350px)': {
    '& .realativeImg': {
      maxWidth: 120,
      right: -20,
    },
  },
}));

const RightBox = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0 auto',
  marginRight: 20,
  marginTop: 300,
  h3: {
    fontSize: 44,
    fontWeight: 100,
    marginRight: 200,
    span: {
      fontWeight: 700,
    },
  },
  h4: {
    fontSize: 44,
    fontWeight: 100,
    marginLeft: 200,
    marginTop: '10px',
    marginBottom: 40,
    span: {
      fontWeight: 700,
    },
  },
  p: {
    width: '100%',
    maxWidth: 600,
    lineHeight: '22px',
  },
  '@media (max-width: 1100px)': {
    h3: {
      fontSize: 42,
      marginRight: 100,
    },
    h4: {
      fontSize: 42,
      marginLeft: 100,
    },
  },
  '@media (max-width: 830px)': {
    margin: 0,
    h3: {
      marginTop: 100,
    },
    p: {
      width: '100%',
      maxWidth: 500,
    },
  },
  '@media (max-width: 550px)': {
    h3: {
      fontSize: 36,
    },
    h4: {
      fontSize: 36,
    },
    p: {
      width: '100%',
      maxWidth: 400,
    },
  },
  '@media (max-width: 450px)': {
    margin: '0 20px',
    h3: {
      fontSize: 36,
    },
    h4: {
      fontSize: 36,
    },
    p: {
      width: '100%',
      maxWidth: 400,
    },
  },
  '@media (max-width: 400px)': {
    h3: {
      fontSize: 32,
      marginRight: 40,
    },
    h4: {
      fontSize: 32,
      marginLeft: 40,
    },
    p: {
      fontSize: 14,
    },
  },
  '@media (max-width: 320px)': {
    h3: {
      marginRight: 20,
    },
    h4: {
      marginLeft: 20,
    },
  },
}));

Article.propTypes = {
  aboutId: PropTypes.string.isRequired, 
};
