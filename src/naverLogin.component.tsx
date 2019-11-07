import * as React from 'react';

import NaverLogin from 'react-naver-login';

export default function NaverLoginComponent() {
  const handleResponse = (res: any) => console.log(res);

  return (
    <NaverLogin
      clientId='EFw98Bh3vT2VXRJxrrLa'
      callbackUrl='http://localhost:3000/'
      render={props => <div onClick={props.onClick}>Naver Login</div>}
      onSuccess={handleResponse}
      onFailure={() => console.log('naver fail')}
    />
  );
}
