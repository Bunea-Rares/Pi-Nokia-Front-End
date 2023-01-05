import { Button, Grid, Link, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import post from "../fetch/post";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [username, setUsername] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [error, setError] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = { email, password, username };

    if (password !== passwordConfirmation) {
      setPasswordMatch(false);
      return;
    }
    const response = await post("/register", data);
    if (response.status === 401) {
      setError(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="Username"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="passwordConfirmation"
            autoComplete="Password Confirmation"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/SignIn" variant="body2">
                Already have an account? Sign In!
              </Link>
            </Grid>
          </Grid>
        </Box>
        {!passwordMatch && "Password must match!"}
        {error && "username or email already in use"}
      </Box>
    </Container>
  );
};

export default Register;
