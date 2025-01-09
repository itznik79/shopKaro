import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { Box, Typography } from "@mui/material";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          fontSize: "1.5rem",
          paddingTop: "2rem",
          borderTop: "1px  ",
          textAlign: "center",
        }}
      >
        <Title text1={"ABOUT"} text2={"US"} />
      </Box>

      <Box
        sx={{
          my: 10,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0.5rem", md: "3rem" },
          // margin: "auto",
          justifyContent: "center",
        }}
      >
        <img
          src={assets.about_img}
          alt=""
          style={{ width: "30%", height: "10%", maxWidth: { md: "450px" } }}
        />

        <Box
          className="prata-regular"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "grey",
            gap: 3,
            width: { xs: "100%", md: "42%" },
          }}
        >
          <Typography>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </Typography>

          <Typography>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </Typography>

          <h1 style={{ color: "black", fontWeight: 500 }}>Our Mission</h1>

          <Typography>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          fontSize: "1.5rem",
          py: 4,
          pl: { xs: 2, md: 23 }, // Responsive padding for different screen sizes
          textAlign: "left", // Uncomment if alignment is needed
        }}
      >
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </Box>

      <Box
        sx={{
          display: "flex",
          mb: 20,
          fontSize: "0.95rem",
          flexDirection: { xs: "column", md: "row" },
          mt: 10,
          justifyContent: "center",
          margin:"0 auto"
        }}
      >
        <Box
          sx={{
            border: "1px solid", 
            paddingX: { xs: 10, md: 6 }, 
            paddingY: { xs: 8, sm: 5 }, 
            display: "flex", 
            flexDirection: "column", 
            gap: 1 
          }}
        >
          <h2>Quality Assurance:</h2>
          <Typography sx={{color:"grey"}}>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </Typography>
        </Box>

        <Box sx={{
            border: "1px solid", // Add a border
            paddingX: { xs: 10, md: 6 }, // px-10 for small, px-16 for medium+
            paddingY: { xs: 8, sm: 5 }, // py-8 for extra-small, py-20 for small+
            display: "flex", // Flex container
            flexDirection: "column", // Flex direction column
            gap: 1 // Spacing between children
          }}>
          <h2>Convenience:</h2>
          <Typography sx={{color:"grey"}}>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </Typography>
        </Box>

        <Box sx={{
            border: "1px solid", 
            paddingX: { xs: 10, md: 6 }, 
            paddingY: { xs: 8, sm: 5 }, 
            display: "flex",
            flexDirection: "column",
            gap: 1
          }}>
          <h1>Exceptional Customer Service:</h1>
          <Typography variant="body1" sx={{color:"grey"}}>
          Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
          </Typography>
        </Box>
      </Box>

      <Newsletter/>
    </Box>
  );
};

export default About;
