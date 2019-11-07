import React from 'react';
import './App.css';

import FBComponent from './fbLogin.component';
import GoogleLoginComponent from './googleLogin.component';
import NaverLoginComponent from './naverLogin.component';

const App: React.FC = () => {
  return (
    <>
      <FBComponent />
      <GoogleLoginComponent />
      <NaverLoginComponent />
    </>
  );
};

export default App;
