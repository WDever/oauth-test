import * as React from 'react';

import GoogleLogin from 'react-google-login';

export default function() {
  const handleResponse = (res: any) => console.log(res);

  return (
    <GoogleLogin
      clientId='908446043760-qgdmbcd5uqc9rj3kcr9laaas8ttrmbk0.apps.googleusercontent.com'
      redirectUri='http://localhost:3000'
      buttonText='login'
      cookiePolicy={'single_host_origin'}
      onSuccess={handleResponse}
      onFailure={handleResponse}
    />
  );
}
