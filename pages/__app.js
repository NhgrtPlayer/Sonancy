import App from 'next/app';
import Router from 'next/router';

import { Auth0Provider } from 'use-auth0-hooks';

/**
 * Create a page which wraps the Auth0 provider.
 */
export default class Root extends App {
  render () {
    const { Component, pageProps } = this.props;
    return (
      <Auth0Provider
        domain={process.env.AUTH0_DOMAIN}
        clientId={process.env.AUTH0_CLIENT_ID}
        redirectUri={process.env.REDIRECT_URI}>
          <Component {...pageProps} />
      </Auth0Provider>
    );
  }
}