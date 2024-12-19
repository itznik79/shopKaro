import React from "react";
import { Box, Typography } from "@mui/material";

const Newsletter = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <Box sx={{ textAlign: "center" }}>
      <h2 style={{ fontWeight: 400, fontSize: 30, marginTop: -70 }}>
        Subscribe now & get 20% off
      </h2>
      <p style={{ color: "grey", marginTop: "5px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <form onSubmit={onSubmitHandler}
        style={{
          width: '40%',
          display: "flex", 
          alignItems: "center", 
          gap: '17rem', 
          margin: "0 auto", 
          marginTop: '30px', 
          marginBottom: '15px',
          border: "1px solid #ccc",
          paddingLeft: '10px', 
          borderRadius: 2,
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          style={{
            width: "38%",
            outline: "none",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "0.75rem",
            padding: "13px 25px",
          }}
        >
          SUBSCRIBE
        </button>
      </form>
    </Box>
  );
};

export default Newsletter;
