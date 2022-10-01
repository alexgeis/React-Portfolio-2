import * as React from "react";
import "./Hero.css";
// import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
// import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import "./Cards.css";
import GitHubLogo from "../assets/GitHub-Mark-32px.png";

export default function Hero(props) {
	return (
		<>
			{/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
			<Box
				sx={{
					//   background: "linear-gradient(135deg,#ff1b6b,#45caff)",
					pt: 11,
					pb: 4,
				}}
				// xs={12}
				// sm={6}
				// md={4}
			>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="white"
						gutterBottom
					>
						Alex Geis
					</Typography>
					<Typography variant="h5" align="center" color="white" paragraph>
						Full-stack developer with a passion for music, coding, and oxford
						commas.
					</Typography>
					<Typography variant="h5" align="center" color="white" paragraph>
						<a href="siegxela@gmail.com">siegxela@gmail.com</a>
					</Typography>
					<Stack
						// sx={{ pt: 4 }}
						direction="row"
						spacing={2}
						justifyContent="center"
						// alignItems="center"
						id="btnContainer"
						style={{
							//   border: "white 2px solid",
							borderRadius: "15px",
							width: "350px",
							margin: "0 auto",
						}}
					>
						<Button
							className="btn"
							id="workButton"
							variant="contained"
							//   style={{
							//     borderRadius: "15px",
							//     backgroundColor: "black",
							//     cursor: "pointer",
							//   }}
						>
							<a id="workLink" href="#work">
								View Work
							</a>
						</Button>
						<Button
							className="btn"
							id="touchButton"
							variant="outlined"
							style={{ borderRadius: "15px" }}
						>
							<a
								id="touchLink"
								href="#contact"
								style={{ color: "black", textDecoration: "none" }}
							>
								Get In Touch
							</a>
						</Button>
						<Button
							className="btn"
							id="resumeButton"
							variant="contained"
							style={{ borderRadius: "15px" }}
						>
							<a
								id="resumeLink"
								href="https://pdfhost.io/v/4GsvwgaSl_Alex_Geis_Resume"
								style={{ textDecoration: "none" }}
								target="_blank"
								rel="noreferrer"
							>
								Resume
							</a>
						</Button>
						<a
							className="btn gitHero"
							href="https://github.com/alexgeis/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={GitHubLogo}
								alt="git hub logo octocat"
								style={{
									height: "40px",
									width: "40px",
									margin: "13px 20px 10px 0",
									//   background: "linear-gradient(135deg,#ff1b6b,#45caff)",
									borderRadius: "15px",
									cursor: "pointer",
								}}
							/>
						</a>
					</Stack>
				</Container>
			</Box>
		</>
	);
}
