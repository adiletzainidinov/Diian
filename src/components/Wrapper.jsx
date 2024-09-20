import Article from "./Article";
import Delivery from "./Delivery";
import Header from "./Header";
import Main from "./Main";

const Wrapper = () => {
	return (
		<div>
			<Header />
			<Main />
			<Article />
			<Delivery />
		</div>
	);
};

export default Wrapper;
