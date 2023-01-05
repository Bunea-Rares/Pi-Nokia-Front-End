import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid, Link, TextField } from "@mui/material";
import post from "../fetch/post";

const SendPasswordReset = (props) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSendPasswordReset = async (e) => {
    e.preventDefault();

    const data = { email };
    const response = await post("/sendpasswordreset", data);

    if (response.status === 200) {
      setSuccess(true);
    }
  };

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
          <Box
            component="form"
            onSubmit={handleSendPasswordReset}
            sx={{ mt: 1 }}
          >
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
                <Link href="/Register" variant="body2">
                  Need an account? Register!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {success && (
        <div>
          <h1>Success!</h1>
          <p>Check your email for a link to reset your password.</p>
        </div>
      )}
    </div>
  );
};

export default SendPasswordReset;
