import React from 'react';
import axios from 'axios';

const About = ({ user, repos }) => {
  //   console.log(res);

  return (
    <div>
      <div>{user.login + ' ' + user.public_repos}</div>
      <div>
        {repos.map(r => (
          <p>{r.name + '-' + r.star_gazers}</p>
        ))}
      </div>
    </div>
  );
};

About.getInitialProps = async () => {
  let githubClientId, githubClientSecret;

  if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    githubClientId = process.env.GITHUB_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  }

  let config = {
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  };
  const { data: user } = await axios.get(
    `https://api.github.com/users/juanirache?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    config
  );
  const { data: repos } = await axios.get(
    `https://api.github.com/users/juanirache/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    config
  );
  return { user, repos };
};

export default About;
