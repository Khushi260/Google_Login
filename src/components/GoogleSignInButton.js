import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignInButton = ({ onSuccess, onFailure }) => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleSuccess = (response) => {
    console.log('Google Sign-In successful:', response);
    onSuccess(response.getAuthResponse());
    console.log(response.getAuthResponse().id_token);
  };

  const handleFailure = (error) => {
    if (error.error === 'popup_closed_by_user') {
      console.log('Google Sign-In canceled by the user.');
    } else {
      console.error('Google Sign-In failed:', error);
    }
    onFailure();
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignInButton;
