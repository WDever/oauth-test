// import * as React from 'react';

// const { useEffect, useState, useRef } = React;

// declare global {
//   interface Window {
//     FB: any;
//   }
// }

// const loadSdk = () => {
//   const element = document.getElementsByTagName('script')[0];
//   const fjs = element;
//   let js = element;

//   if (document.getElementById('facebook-jssdk')) {
//     return true;
//   }

//   js = document.createElement('script');
//   js.id = 'facebook-jssdk';
//   js.src = `https://connect.facebook.net/ko_KR/sdk.js`;

//   if (fjs.parentNode) {
//     fjs.parentNode.insertBefore(js, fjs);
//   }

//   return true;
// };

// const FBLoginComponent: React.FC = () => {
//   const isMounted = useRef(false);
//   const [sdkLoaded, setSdkLoaded] = useState(false);

//   const FBAsyncInit = (appId: number, version: string) => {
//     window.FB.init({
//       appId,
//       cookie: true,
//       xfbml: true,
//       version,
//     });

//     setSdkLoaded(true);
//   };

//   useEffect(() => {
//     isMounted.current = true;

//     if (document.getElementById('facebook-jssdk')) {
//       setSdkLoaded(true);
//       return;
//     }

//     setSdkLoaded(loadSdk());
//     console.log(sdkLoaded);

//     if (sdkLoaded) {
//       FBAsyncInit(2669028556473749, 'v5.0');
//       console.log(sdkLoaded);
//     }

//     let fbRoot = document.getElementById('fb-root');
//     if (!fbRoot) {
//       fbRoot = document.createElement('div');
//       fbRoot.id = 'fb-root';
//       document.body.appendChild(fbRoot);
//     }
//   }, [sdkLoaded]);

//   return (
//     <>
//       <div
//         className='fb-login-button'
//         data-width=''
//         data-size='large'
//         data-button-type='login_with'
//         data-auto-logout-link='false'
//         data-use-continue-as='false'
//       ></div>
//       <div>{sdkLoaded ? 'aaa' : 'bbb'}</div>
//     </>
//   );
// };

// export default FBLoginComponent;

import * as React from 'react';
import FaceBookLogin from 'react-facebook-login';

export default function FBLoginComponent() {
  const handleResponse = (res: any) => console.log(res);

  return (
    <FaceBookLogin
      appId='2669028556473749'
      autoLoad={false}
      fields='name,email,picture'
      callback={handleResponse}
    />
  );
}
