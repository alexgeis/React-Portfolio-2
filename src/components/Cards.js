import * as React from "react";
// import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Cards.css";
//image imports
import SubTracker from "./assets/cache-bandit.png";
import AllPain from "./assets/all-pain-no-grain.png";
import VibeLounge from "./assets/Vibe-Lounge-graph.png";
import WeatherDashboard from "./assets/weather-dashboard-screenshot.png";
import TextEditorPWA from "./assets/JATE-PWA-screenshot.png";
import NoteTaker from "./assets/note-taker-app.png";
import GitHubLogo from "./assets/GitHub-Mark-32px.png";

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cards = [
  {
    id: 1,
    src: SubTracker,
    alt: "Subscription tracker homepage",
    heading: "Subscription Tracker",
    description:
      "Track your ongoing payment obligations and budget accordingly",
    deployLink: "https://cache-bandit.herokuapp.com/",
    github: "https://github.com/alexgeis/Subscription-Tracker",
  },
  {
    id: 2,
    src: AllPain,
    alt: "All Pain No Grain homepage",
    heading: "All Pain No Grain",
    description: "Health-focused calendar app to log your goals and schedule",
    deployLink: "https://gentle-everglades-97970.herokuapp.com/",
    github: "https://github.com/alexgeis/All-Pain-No-Gain",
  },
  {
    id: 3,
    src: VibeLounge,
    heading: "Vibe Lounge",
    alt: "Vibe Lounge homepage",
    description:
      "Match your mood to your internet experience and display your mood history",
    deployLink: "https://alexgeis.github.io/VIBE-LOUNGE/",
    github: "https://github.com/alexgeis/VIBE-LOUNGE/",
  },
  {
    id: 4,
    src: WeatherDashboard,
    heading: "Weather Dashboard",
    alt: "Weather Dashboard homepage",
    description: "Search for weather in any location",
    deployLink: "https://alexgeis.github.io/Weather-Dashboard/",
    github: "https://github.com/alexgeis/Weather-Dashboard",
  },
  {
    id: 5,
    src: TextEditorPWA,
    heading: "Text Editor PWA",
    alt: "Text Editor PWA homepage",
    description: "Code editor downloadable as a Progressive Web App",
    deployLink: "https://pwa-text-editor-ang.herokuapp.com/",
    github: "https://github.com/alexgeis/PWA-Text-Editor",
  },
  {
    id: 6,
    src: NoteTaker,
    heading: "Note Taker",
    alt: "Note Taker Application homepage",
    description: "Track your notes - logged via local storage",
    deployLink: "https://note-taker-ang.herokuapp.com/",
    github: "https://github.com/alexgeis/Note-Taker",
  },
];

const theme = createTheme();

export default function Album(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid id="work" container spacing={4}>
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
                    sx={
                      {
                        // 16:9
                        // pt: "10%",
                      }
                    }
                    // image="https://source.unsplash.com/random"
                    image={card.src}
                    alt={card.alt}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography style={{ marginBottom: 0 }}>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href={card.deployLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Button size="small" variant="contained">
                        Deployed Link
                      </Button>
                    </a>
                    <a href={card.github} target="_blank" rel="noreferrer">
                      <img
                        src={GitHubLogo}
                        alt="git hub logo octocat"
                        style={{
                          height: "22px",
                          width: "22px",
                          marginLeft: "10px",
                        }}
                      />
                    </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
