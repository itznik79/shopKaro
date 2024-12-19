import React from "react";
import { Box, Typography } from "@mui/material";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: '5rem',
          my: 10,
          mt: 40,
          textAlign: "center",
          fontSize: "0.875rem",

          // For responsive grid layout on 'sm' screen and up
          "@media (min-width: 600px)": {
            display: "grid",
            gridTemplateColumns: "3fr 1fr 1fr", // grid-cols-[3fr_1fr_1fr]
          },
        }}
      >
        <Box>
          <img src={assets.logo} width="130px" marginBottom="1.25rem" />
          <Typography
            style={{
              color: "grey",
              width: "70%",
              "@media (min-width: 900px)": {
                width: "3rem",
              },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>

        <Box>
          <h3
            style={{
              fontWeight: 500,
              fontSize: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            GET IN TOUCH
          </h3>
          <ul
            style={{
              color: "grey",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </Box>

        <Box>
          <h3
            style={{
              fontWeight: 500,
              fontSize: "1.25rem",
              marginBottom: "1.25rem",
            }}
          >
            GET IN TOUCH
          </h3>
          <ul
            style={{
              color: "grey",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <li>+91-87-5000-0000</li>
            <li>ugranga@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
