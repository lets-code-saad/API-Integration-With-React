import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Grid2 from '@mui/material/Grid2';
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
// for navigation to another page
const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    // Using default values so that the input values will be controlled when there is no input
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    
    const payload = {username: data?.username,
       password: data?.password}

const loginApi = async ()=>{
const response = await axios.post("https://fakestoreapi.com/auth/login", payload)

if(response?.data?.token){
navigate("/main")
}

localStorage.setItem("token", response?.data?.token)

}
loginApi();
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Grid2
        container
        spacing={2}
        maxWidth={400}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Grid2 item xs={12}>
          <Typography variant="h5" textAlign="center" gutterBottom>
            Login
          </Typography>
        </Grid2>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Grid2 item xs={12}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Username"
                  variant="outlined"
                />
              )}
            />
          </Grid2>

          <Grid2 className="mt-3" item xs={12}>
            <Controller
            rules={{required:true}}
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              )}
            />
          </Grid2>

          <Grid2 className="mt-3" item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{ paddingY: 1.5 }}
            >
              Login
            </Button>
          </Grid2>
        </form>

        <Grid2 item xs={12}>
          <Typography variant="body2" textAlign="center">
            Don’t have an account?{" "}
            <span style={{ textDecoration: "none", color: "#1976d2", cursor:"pointer" }}>
              Sign Up
            </span>
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Login;
