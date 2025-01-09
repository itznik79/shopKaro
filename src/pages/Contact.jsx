import React from "react";
import Box from "@mui/material/box";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { Button, Typography } from "@mui/material";
import Newsletter from "../components/Newsletter";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          fontSize: "1.5rem",
          paddingTop: "2rem",
          borderTop: "1px  ",
          textAlign: "center",
        }}
      >
        <Title text1={"CONTACT"} text2={"US"} />
      </Box>

      <Box
        sx={{
          my: 10,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "0.5rem", md: "3rem" },
          ml: 15,
          justifyContent: "center",
          mb: 25,
        }}
      >
        <img
          src={assets.contact_img}
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
            gap: 1,
            width: { xs: "100%", md: "42%" },
          }}
        >
          <h1
            style={{
              color: "black",
              fontWeight: 500,
              paddingTop: 10,
              paddingBottom: 15,
              fontSize: "1.4rem",
            }}
          >
            Our Store
          </h1>
          <Typography style={{ paddingBottom: 15 }}>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </Typography>
          <Typography style={{ paddingBottom: 15 }}>
            Tel: (415) 555-0132 <br /> Email: admin@forever.com
          </Typography>

          <h1
            style={{
              color: "black",
              fontWeight: 500,
              paddingBottom: 15,
              paddingTop: 10,
              fontSize: "1.4rem",
            }}
          >
            Careers at Forever
          </h1>
          <Typography>Learn more about our teams and job openings.</Typography>

          <Button
            sx={{
              border: "1px solid black",
              px: 2,
              mx:28,
              py:1, 
              fontSize: "0.875rem", 
              backgroundColor: "white", 
              color: "black", 
              mt:2,
              textTransform: "none", 
              transition: "all 0.5s", 
              "&:hover": {
                backgroundColor: "black", 
                color: "white", 
              },
            }}
          >
            Explore Jobs
          </Button>
        </Box>
      </Box>

      <Newsletter />
    </>
  );
};

export default Contact;
