import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/alexgeis/">
        Alex Geis
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg,#ff1b6b,#45caff)",
          bgcolor: "background.paper",
          p: 4,
        }}
        component="footer"
      >
        <Typography variant="h6" align="center" gutterBottom color="white">
          End of the page!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          stay awesome
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}
