import { Box, styled } from "@mui/material";
import { useState } from "react";
import Diian from "../assets/images/Diian.svg";
import GirlsPhoto from "../assets/images/GirlsPhoto.png";
import Photos from "../assets/images/Photos.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
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
									{menuOpen ? <CloseIcon /> : <MenuIcon />}
								</MenuIconWrapper>

								<NavItems className={menuOpen ? "active" : ""}>
									<a href="#">О нас</a>
									<a href="#">Каталог</a>
									<a href="#">Контакты</a>
									<a href="#">Доставка</a>
								</NavItems>
							</NavLink>

							<MainContent>
								<img className="contant-img" src={Diian} alt="" />
								<p className="text_platki">
									Платки,которые <br />
									<span>передают эмоции</span>
								</p>
							</MainContent>
						</LeftBox>
						<RightImg>
							<img src={GirlsPhoto} alt="" />
							<RelativeImg>
								<img className="img-relative" src={Photos} alt="" />
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
	width: "100%",
	display: "flex",
	justifyContent: "center",
}));

const MainBox = styled(Box)(() => ({
	width: "100%",
	maxWidth: "1440px",
	display: "flex",
	flexDirection: "column",
}));

const BackgroundColor = styled(Box)(() => ({
	width: "100%",
	backgroundColor: "#e5e4df",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "20px",
	"@media (max-width: 768px)": {
		flexDirection: "column",
		padding: "10px",
	},
}));

const LeftBox = styled(Box)(() => ({
	width: "100%",
	height: "100%",
	paddingRight: "40px",
	marginLeft: "40px",

	"@media (max-width: 768px)": {
		paddingRight: "0",
		marginLeft: "0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

const NavLink = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
	maxHeight: "100px",
	fontSize: "30px",
	fontFamily: "sans-serif",
	gap: "30px",

	"& a": {
		textDecoration: "none",
		color: "black",
	},

	"& .header-img": {
		width: "170px",
		height: "70px",
	},

	"@media (max-width: 768px)": {
		justifyContent: "space-between",
		width: "100%",
	},
}));

const MenuIconWrapper = styled(Box)(() => ({
	display: "none",
	cursor: "pointer",

	"@media (max-width: 768px)": {
		display: "block",
		fontSize: "36px",
		color: "black",
		marginLeft: "auto",
	},
}));

const NavItems = styled(Box)(() => ({
	display: "flex",
	gap: "30px",
	"@media (max-width: 768px)": {
		display: "none",
		flexDirection: "column",
		position: "absolute",
		top: "100px",
		right: "0",
		backgroundColor: "#fff",
		width: "200px",
		padding: "20px",
		boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",

		"& a": {
			padding: "10px 0",
			color: "black",
			textAlign: "center",
		},
	},

	"&.active": {
		display: "flex",
	},
}));

const MainContent = styled(Box)(() => ({
	width: "100%",
	maxWidth: "650px",
	display: "flex",
	flexDirection: "column",
	marginTop: "150px",

	"& .contant-img": {
		width: "350px",
		height: "150px",
		alignItems: "center",
		margin: "0 auto",
	},

	"& .text_platki": {
		fontSize: "42px",
		fontWeight: "500",
		"& span": {
			marginLeft: "140px",
			marginTop: "5px",
		},
	},
	"@media (max-width: 768px)": {
		fontSize: "24px",
		marginTop: "50px",
	},
}));
const RightImg = styled(Box)(() => ({
	position: "relative",
	width: "100%",
	height: "100%",
	maxWidth: "550px",
	maxHeight: "650px",
	"& img": {
		width: "100%",
		height: "auto",
	},
	"@media (max-width: 768px)": {
		maxWidth: "100%",
		maxHeight: "400px",
	},
}));

const RelativeImg = styled(Box)(() => ({
	position: "absolute",
	top: "120px",
	right: "100px",
	width: "300px",
	height: "530px",
	"& .img-relative": {
		width: "100%",
		height: "auto",
	},
	"@media (max-width: 768px)": {
		top: "auto",
		right: "auto",
		bottom: "0",
		left: "0",
		width: "150px",
		height: "auto",
	},
}));
