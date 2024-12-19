import React from "react";
import { Box, Typography } from "@mui/material";
import { assets } from "../assets/frontend_assets/assets";

const MyPolicy = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // sm: flex-row
        justifyContent: "space-evenly", // justify-around
        gap: { xs: 12, sm: 2 }, // gap-12 on xs, gap-2 on sm
        textAlign: "center", // text-center
        py: 20,
        mr:5
      }}
    >
      <Box>
        <img src={assets.exchange_icon} alt="" style={{margin:"0 auto", marginBottom:"5px", width:"60px"}}/>
        <h2 style={{ fontWeight: 600 }}>Easy Exchange Policy</h2>
        <p style={{ color: "grey"}}>We provide 7 days free return policy</p>
      </Box>

      <Box>
        <img src={assets.quality_icon} alt="" style={{margin:"0 auto", marginBottom:"5px", width:"60px"}}/>
        <h2 style={{ fontWeight: 600 }}>7 Days Return Policy</h2>
        <p style={{ color: "grey" }}>We offer hassle free exchange policy</p>
      </Box>

      <Box>
        <img src={assets.support_img} alt="" style={{margin:"0 auto", marginBottom:"5px", width:"60px"}}/>
        <h2 style={{ fontWeight: 600 }}>Best customer support</h2>
        <p style={{ color: "grey" }}>we provide 24/7 customer support</p>
      </Box>
    </Box>
  );
};

export default MyPolicy;
