import * as React from "react";
// import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import "./Album.css";
import GitHubLogo from "./assets/GitHub-Mark-32px.png";

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
          bgcolor: "linear-gradient(135deg,#ff1b6b,#45caff)",
          pt: 11,
          pb: 0,
        }}
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
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">
              <a href="#work">View My Work</a>
            </Button>
            <Button variant="outlined" style={{ color: "white" }}>
              <a href="#contact">Get In Touch</a>
            </Button>
            <a
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
                  margin: "10px",
                }}
              />
            </a>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
