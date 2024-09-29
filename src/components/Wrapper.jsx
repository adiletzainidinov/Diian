import Header from './Header';
import Article from './Article';
import Delivery from './Delivery';
import Main from './Main';

const Wrapper = () => {
  const aboutId = 'about';
  const contactId = 'contact'
  const tovarId = 'tovar'

  return (
    <div>
      <Header aboutId={aboutId} contactId={contactId} tovarId={tovarId} />
      <Main tovarId={tovarId} />
      <Article aboutId={aboutId} />
      <Delivery contactId={contactId} />
    </div>
  );
};

export default Wrapper;

