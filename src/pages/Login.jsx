import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const Login = () => {
  const [currentState, setCurrentState] = useState("Log in");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      style={{
        width: "90%",
        maxWidth: "24rem",
        margin: "0 auto",
        marginTop: "3.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center-align child elements
        gap: "1rem",
      }}
    >
      <Box
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          marginBottom: "3rem",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{ fontFamily: "Prata, serif", fontSize: "1.875rem" }}
        >
          {currentState}
        </Typography>
        <Box
          style={{
            width: "4rem",
            height: "2.3px",
            backgroundColor: "#414141",
            marginLeft: "10px",
          }}
        ></Box>
      </Box>

      {currentState === "Log in" ? null : (
        <input
          type="text"
          style={{
            width: "80%",
            padding: "0.5rem",
            border: "1px solid #1f2937",
            borderRadius: "4px",
            outline: "none",
          }}
          placeholder="Name"
          required
        />
      )}

      <input
        type="email"
        style={{
          width: "80%",
          padding: "0.5rem",
          border: "1px solid #1f2937",
          borderRadius: "4px",
          outline: "none",
        }}
        placeholder="Email"
        required
      />

      <input
        type="password"
        style={{
          width: "80%",
          padding: "0.5rem",
          border: "1px solid #1f2937",
          borderRadius: "4px",
          outline: "none",
        }}
        required
        placeholder="Password"
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.875rem",
          marginTop: "-8px",
          width: "80%",
        }}
      >
        <Typography style={{ cursor: "pointer" }}>
          Forgot your password?
        </Typography>
        {currentState === "Log in" ? (
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => setCurrentState("Sign Up")}
          >
            Create account
          </Typography>
        ) : (
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => setCurrentState("Log in")}
          >
            Login Here
          </Typography>
        )}
      </Box>

      <Button
        style={{
          backgroundColor: "#414141",
          color: "white",
          fontFamily: "light",
          padding: "0.5rem 2rem",
          marginTop: "1rem",
          width: "80%",
        }}
      >
        {currentState === "Log in" ? "Sign In" : "Sign Up"}
      </Button>
    </form>
  );
};

export default Login;
