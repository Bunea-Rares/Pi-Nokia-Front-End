import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Navigate, useSearchParams } from "react-router-dom";
import post from "../fetch/post";

const PasswordReset = (props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [searchParams] = useSearchParams();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    const data = {
      token: searchParams.get("token"),
      email: searchParams.get("email"),
      password,
      confirmPassword,
    };

    const response = await post(
      "/passwordreset" + window.location.search,
      data
    );

    if (response.token) {
      setSuccess(true);
      localStorage.setItem("user-token", response.token);
    }
  };

  if (success) return <Navigate to="/" replace></Navigate>;
  else
    return (
      <div>
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
              Reset Password
            </Typography>
            <Box component="form" onSubmit={handlePasswordReset} sx={{ mt: 1 }}>
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
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    );
};

export default PasswordReset;
