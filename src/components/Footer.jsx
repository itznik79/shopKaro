import React from "react";
import { Box, Typography } from "@mui/material";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <Box sx={{ width: "80vw", margin: "0 auto", padding: "0 10px" }}>
      {/* Upper Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          my: 10,
          mx: "auto",
          textAlign: "center",
          fontSize: "0.875rem",
          width: "100%", // Ensure full width
          boxSizing: "border-box", // Prevent layout issues
          "@media (min-width: 600px)": {
            display: "grid",
            gridTemplateColumns: "3fr 1fr 1fr", // Grid layout on larger screens
            textAlign: "left",
          },
        }}
      >
        {/* First Section */}
        <Box>
          <img src={assets.logo} alt="Logo" style={{ marginBottom: "1.25rem" }} width="130px" />
          <Typography sx={{ color: "grey", width: { xs: "100%", sm: "95%" } }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </Box>

        {/* Second Section */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 500, fontSize: "1.25rem", marginBottom: "1.25rem" }}>
            GET IN TOUCH
          </Typography>
          <Box component="ul" sx={{ color: "grey", display: "flex", flexDirection: "column", gap: "4px", listStyleType: "none", padding: 0, margin: 0 }}>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </Box>
        </Box>

        {/* Third Section */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 500, fontSize: "1.25rem", marginBottom: "1.25rem" }}>
            CONTACT US
          </Typography>
          <Box sx={{ color: "grey", display: "flex", flexDirection: "column", gap: "1px", listStyleType: "none", padding: 0, margin: 0 }}>
            <li>+91-87-5000-0000</li>
            <li>ugranga@gmail.com</li>
            <li>Instagram</li>
          </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box sx={{ width: "100%", mx: "auto", mt: 5, textAlign: "center" }}>
        <Box sx={{ height: "1px", backgroundColor: "grey", width: "100%" }}></Box>
        <Typography sx={{ paddingTop: "10px", paddingBottom: "10px", fontSize: "0.875rem", color: "#414141" }}>
          Copyright 2024@ nikgau.dev - All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
