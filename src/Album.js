import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Album.css";
//image imports
import SubTracker from "./assets/cache-bandit.png";
import AllPain from "./assets/all-pain-no-grain.png";
import VibeLounge from "./assets/Vibe-Lounge-graph.png";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/alexgeis/">
        Alex Geis
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cardsArr = [
  {
    id: 1,
    src: SubTracker,
    heading: "Subscription Tracker",
    description:
      "Track your ongoing payment obligations and budget accordingly",
    deployLink: "https://cache-bandit.herokuapp.com/",
    github: "https://github.com/alexgeis/Subscription-Tracker",
  },
  {
    id: 2,
    src: AllPain,
    heading: "All Pain No Grain",
    description: "Health-focused calendar app to log your goals and schedule",
    deployLink: "https://gentle-everglades-97970.herokuapp.com/",
    github: "https://github.com/alexgeis/All-Pain-No-Gain",
  },
  {
    id: 3,
    src: VibeLounge,
    heading: "Vibe Lounge",
    description:
      "Match your mood to your internet experience and display your mood history",
    deployLink: "https://alexgeis.github.io/VIBE-LOUNGE/",
    github: "https://github.com/alexgeis/VIBE-LOUNGE/",
  },
  //  { id: 4,
  //     src: ,
  //     heading: ,
  //     description: ,
  //     deployLink: ,
  //     github:
  //  },
  //  { id: 5,
  //     src: ,
  //     heading: ,
  //     description: ,
  //     deployLink: ,
  //     github:
  //  },
  //  { id: 6,
  //     src: ,
  //     heading: ,
  //     description: ,
  //     deployLink: ,
  //     github:
  //  },
];

const theme = createTheme();

export default function Album(props) {
  /*
props
img src
heading
description
deployed link
github
*/
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
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
              color="text.primary"
              gutterBottom
            >
              Alex Geis
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Full-stack developer with a passion for music, coding, and oxford
              commas.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">View My Work</Button>
              <Button variant="outlined">Get In Touch</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "10%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Deployed Link</Button>
                    <Button size="small">Github</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Contact
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Let's get in touch
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}