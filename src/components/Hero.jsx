import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import Box from "@mui/material/box";
import { Divider, Typography } from "@mui/material";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        borderColor: "grey",
        border: "1px solid",
        width:"80%",
        height:"70vh",
        margin:"0 auto",
        marginTop:"15px"
      }}
    >
      {/* Hero Left-side */}

      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          margin:"0 auto"
        }}
      >
        <div style={{ color: "#414141" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <Box
              sx={{
                width: "40px",
                height: "2px",
                ml: "-50px",
                mr:"10px",
                backgroundColor: "#414141",
              }}
            />
            <Typography
              variant="body2"
              style={{ fontSize: "20px", textTransform: "uppercase" }}
            >
              our bestsellers
            </Typography>
          </div>

          <h1 className="prata-regular" style={{ lineHeight: "1.625", fontSize: "2.875rem" }}>
            Latest Arrivals
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <Typography
              style={{
                fontSize: "17px",
                textTransform: "uppercase",
                marginLeft: "-175px",
                fontWeight:"550"
              }}
            >
              shop now
            </Typography>
            <Box
              sx={{
                width: "40px",
                height: "2px",
                ml: "2px",
                backgroundColor: "#414141",
              }}
            />
          </div>
        </div>
      </div>

      {/* Hero Right side */}
      <img width="50%" src={assets.hero_img}/>
    </div>
  );
};

export default Hero;
