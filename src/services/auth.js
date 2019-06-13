import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_CALLBACK,
  responseType: 'token id_token',
  scope: 'openid profile'
});

// if user isn't logged in send them to auth0 for login/signup
export const login = () => {
  auth0.authorize();
};


export const logOut = () => {
  auth0.logout();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not get user profile');
          resolve({
            auth0Id: profile.sub,
            // username: profile.name,
            token: results.idToken,
            // image: profile.picture,
            // // this was added to prof with rule, then added to state
            // role: profile.role
          });
        });
      } else {
        reject('Could not log in');
      }
    });
  });
};
