import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Snackbar, Alert, LinearProgress, Typography } from "@mui/material";
import OrangeButton from "../custom-components/OrangeButton";
import backgroundImage from '../../images/background.jpg';

const Login = ({ setIsLoggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoginInProgress, setIsLoginInProgress] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setErrorMessage("");
    setIsLoginInProgress(true);

    setTimeout(() => {
      if (userName === "John" && password === "12345") {
        localStorage.setItem("userName", userName);
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true); // Update the state
        navigate("/home");
      } else {
        setErrorMessage("Invalid Username or Password");
      }
      setIsLoginInProgress(false);
    }, 2000);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", backgroundImage: `url('/background.jpg')`, backgroundSize: 'cover' }}
    >
      <Grid item xs={3}>
        <div style={{ minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography variant="h4" align="center" gutterBottom>
            find.My.News :
          </Typography>
          <div>
            <TextField
              label="User Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            {isLoginInProgress && <LinearProgress style={{ marginBottom: '20px' }} />}
            <OrangeButton
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </OrangeButton>
          </div>
        </div>
      </Grid>
      <Snackbar
        open={Boolean(errorMessage)}
        autoHideDuration={6000}
        onClose={() => setErrorMessage("")}
      >
        <Alert severity="error" onClose={() => setErrorMessage("")}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Login;
