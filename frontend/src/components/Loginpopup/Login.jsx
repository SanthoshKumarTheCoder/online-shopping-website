// Importing necessary modules and libraries
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Typography, Box, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { GoogleOAuthProvider } from '@react-oauth/google';

const providers = [
  { id: 'google', name: 'Google', icon: <GoogleIcon />} ,
  { id: 'github', name: 'GitHub', icon: <GitHubIcon /> },
  { id: 'facebook', name: 'Facebook', icon: <FacebookIcon /> },
];

const signIn = async (provider) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve({ error: ' Some Network issues Try Again ' });
    }, 500);
  });
};

export default function OAuthSignInPage() {
  const theme = useTheme();
  const [error, setError] = React.useState(null);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Paper sx={{ p: 4, maxWidth: 400, width: '100%', textAlign: 'center' }} elevation={3}>
        <Typography variant="h4" gutterBottom >
          Sign in
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome user, please sign in to continue
        </Typography>
        {providers.map((provider) => (
          <Button
            key={provider.id}
            variant="contained"
           color="secondary"
            sx={{ my: 1, width: '100%', color: 'white',backgroundColor: 'black' }}
            onClick={async () => {
              const result = await signIn(provider);
              if (result.error) {
                setError(result.error);
              }
            }}
            startIcon={provider.icon}
          >
            {provider.name[0].toUpperCase() + provider.name.slice(1).toLowerCase()}
          </Button>
        ))}
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
