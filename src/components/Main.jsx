import { useState } from "react";
import { Box, styled, Typography, Button } from "@mui/material";
import girl from "../assets/images/girl.png";
import clothes from "../assets/images/clothes.png";
import girls from "../assets/images/girls.png";
import star from "../assets/images/star.svg";
import vector from "../assets/images/vector.svg";
import right from "../assets/images/right.svg";
import left from "../assets/images/left.svg";

const products = [
	{
		src: girl,
		title: "ПЛАТОК ШАЛЬ",
		description:
			"Элегантный и универсальный платок, идеально\nподходящий для завершения любого образа.",
		price: "1200р",
	},
	{
		src: clothes,
		title: "ПЛАТОК ШАЛЬ",
		description:
			"Элегантный и универсальный платок, идеально\nподходящий для завершения любого образа.",
		price: "1200р",
	},
	{
		src: girls,
		title: "ПЛАТОК ШАЛЬ",
		description:
			"Элегантный и универсальный платок, идеально\nподходящий для завершения любого образа.",
		price: "1200р",
	},
	{
		src: girl,
		title: "ПЛАТОК ШАЛЬ",
		description:
			"Элегантный и универсальный платок, идеально\nподходящий для завершения любого образа.",
		price: "1200р",
	},
	{
		src: clothes,
		title: "ПЛАТОК ШАЛЬ",
		description:
			"Элегантный и универсальный платок, идеально\nподходящий для завершения любого образа.",
		price: "1200р",
	},
	{
		src: girls,
		title: "ПЛАТОК ШАЛЬ",
		description:
			"Элегантный и универсальный платок, идеально\nподходящий для завершения любого образа.",
		price: "1200р",
	},
];

const Main = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === products.length - 3 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? products.length - 3 : prevIndex - 1
		);
	};

	const handleViewAllClick = () => {
		setShowMore((prev) => !prev);
	};

	return (
		<Container>
			<MainBox>
				<TextTovar>Наши товары</TextTovar>
				<SliderContainer>
					<ArrowLeft src={left} alt="left arrow" onClick={prevSlide} />
					<DisplayPhoto>
						{products
							.slice(currentIndex, currentIndex + 3)
							.map((product, index) => (
								<PhotoContainer key={index}>
									<StyledImage src={product.src} alt={`Фото ${index + 1}`} />
									<ProductInfo>
										<ProductTitle>{product.title}</ProductTitle>
										<ProductDescription>
											{product.description.split("\n").map((line, idx) => (
												<span key={idx}>
													{line}
													<br />
												</span>
											))}
										</ProductDescription>
										<MoreButtonWrapper>
											<MoreButton variant="outlined">
												Подробнее
												<ArrowIcon src={vector} alt="стрелка" />
												<ArrowIcon src={vector} alt="стрелка" />
											</MoreButton>
										</MoreButtonWrapper>
										<StarsContainer>
											{[...Array(5)].map((_, starIdx) => (
												<StarImage key={starIdx} src={star} alt="star" />
											))}
										</StarsContainer>
										<BuySection>
											<BuyButton>Купить</BuyButton>
											<Price>{product.price}</Price>
										</BuySection>
									</ProductInfo>
								</PhotoContainer>
							))}
					</DisplayPhoto>
					<ArrowRight src={right} alt="right arrow" onClick={nextSlide} />
				</SliderContainer>
				<ViewAllWrapper>
					<ViewAllButton variant="outlined" onClick={handleViewAllClick}>
						{showMore ? "Скрыть" : "Смотреть все"}
					</ViewAllButton>
				</ViewAllWrapper>
				{showMore && (
					<MoreText>Здесь будут отоброжаться ваши карточки</MoreText>
				)}
			</MainBox>
		</Container>
	);
};

export default Main;

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

const TextTovar = styled(Typography)(() => ({
	margin: "90px",
	fontSize: "70px",
}));

const SliderContainer = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
	width: "100%",
}));

const DisplayPhoto = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
}));

const PhotoContainer = styled(Box)(() => ({
	flex: "1 0 30%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}));

const StyledImage = styled("img")(() => ({
	width: "250px",
	height: "auto",
}));

const ProductInfo = styled(Box)(() => ({
	textAlign: "center",
	marginTop: "10px",
}));

const ProductTitle = styled(Typography)(() => ({
	fontSize: "20px",
	fontWeight: "bold",
}));

const ProductDescription = styled(Typography)(() => ({
	fontSize: "14px",
	color: "#555",
}));

const StarsContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	marginTop: "10px",
}));

const StarImage = styled("img")(() => ({
	width: "30px",
	height: "24px",
	margin: "0 2px",
}));

const MoreButtonWrapper = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	marginTop: "10px",
}));

const MoreButton = styled(Button)(() => ({
	borderRadius: "50px",
	borderColor: "black",
	color: "black",
}));

const ArrowIcon = styled("img")(() => ({
	marginLeft: "4px",
	width: "20px",
	height: "20px",
	cursor: "pointer",
}));

const BuySection = styled(Box)(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginTop: "15px",
}));

const Price = styled(Typography)(() => ({
	fontSize: "30px",
	marginLeft: "15px",
	color: "#333",
}));

const BuyButton = styled(Button)(() => ({
	borderRadius: "50px",
	width: "150px",
	backgroundColor: "#e5e4df",
	color: "black",
}));

const ViewAllWrapper = styled(Box)(() => ({
	display: "flex",
	justifyContent: "flex-end",
	width: "90%",
	marginTop: "40px",
}));

const ViewAllButton = styled(Button)(() => ({
	width: "220px",
	height: "45px",
	borderColor: "black",
	color: "black",
	fontSize: "20px",
}));

const ArrowLeft = styled("img")(() => ({
	width: "40px",
	height: "40px",
	cursor: "pointer",
	marginRight: "10px",
	position: "relative",
	top: "-100px",
}));

const ArrowRight = styled("img")(() => ({
	width: "40px",
	height: "40px",
	cursor: "pointer",
	marginLeft: "10px",
	position: "relative",
	top: "-100px",
}));

const MoreText = styled(Typography)(() => ({
	marginTop: "20px",
	fontSize: "16px",
	color: "#333",
}));
