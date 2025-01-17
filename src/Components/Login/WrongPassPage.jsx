import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Link } from "react-router-dom";

const WrongPassPage = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      style={{
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Icon Section */}
      <Grid item xs={12}>
        <ErrorOutlineIcon
          style={{ fontSize: "80px", color: "#d32f2f", marginBottom: "16px" }}
        />
      </Grid>

      {/* Text Section */}
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Something Went Wrong
        </Typography>
        <Typography variant="body1" color="textSecondary">
          The password you entered is incorrect. Please try again.
        </Typography>
      </Grid>

      {/* Button Section */}
      <Grid item xs={12}>
        <Link to="/">
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "16px" }}
          >
          Try Again
        </Button>
            </Link>
      </Grid>
    </Grid>
  );
};

export default WrongPassPage;
