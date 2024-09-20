import { Box, styled, Typography } from "@mui/material";
import photo from "../assets/images/photo.png";
const Article = () => {
	return (
		<div>
			<Container>
				<MainBox>
					<BackgroundColor>
						<Box sx={{ display: "flex" }}>
							<img
								style={{ width: "300px", borderRadius: "0px 0px 0px 180px" }}
								src={photo}
								alt=""
							/>
							<Typography sx={{ margin: "30px", fontSize: "40px" }}>
								О нас
							</Typography>
							<Text>Больше чем</Text>
							<Text>Просто платки</Text>
						</Box>
					</BackgroundColor>
				</MainBox>
			</Container>
		</div>
	);
};

export default Article;

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
	backgroundColor: "#e5e4df",
}));

const Text = styled(Typography)(() => ({}));
