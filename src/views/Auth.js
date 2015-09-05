import React, {Component} from 'react';

import DocumentMeta from 'react-document-meta';

export default class Auth extends Component {
  render() {
    return (
      <div>
        <DocumentMeta title="React Redux Example: Auth"/>

        <div className="container">
          <div className="row text-center">
            <h1>
              Login or Sign-up
            </h1>

            <a href="/auth/facebook"><img src="/img/sn/facebook_128.png" id="authFacebookLink"/></a>
            <a href="/auth/github"><img src="/img/sn/github_128.png" id="authGithubLink"/></a>
            <a href="/auth/google"><img src="/img/sn/google_128.png" id="authGoogleLink"/></a>
            < a href="/auth/linkedin"><img src="/img/sn/linkedin_128.png" id="authLinkedinLink"/></a>
            <a href="/auth/twitter"><img src="/img/sn/twitter_128.png" id="authTwitterLink"/></a>
          </div>
        </div>
      </div>
    );
  }
}
