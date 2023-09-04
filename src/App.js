import React from 'react';
import GoogleSignInButton from './components/GoogleSignInButton';

function App() {
  const handleGoogleSignInSuccess = (tokenId) => {
    // You can now use the tokenId for further operations.
    console.log('ID Token:', tokenId);
  };

  const handleGoogleSignInFailure = () => {
    // Handle failure, if needed.
    console.log('Google Sign-In failed.');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Sign-In Example</h1>
        <GoogleSignInButton
          onSuccess={handleGoogleSignInSuccess}
          onFailure={handleGoogleSignInFailure}
        />
      </header>
    </div>
  );
}

export default App;
