import React, { useEffect } from 'react';
import axios from 'axios';

const About = () => {
  let user, repos;

  useEffect(async () => {
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
    console.log('requesting');

    const { data: userData } = await axios.get(
      `https://api.github.com/users/juanirache?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
      config
    );
    const { data: reposData } = await axios.get(
      `https://api.github.com/users/juanirache/repos?per_page=100&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
      config
    );

    repos = reposData;
    user = userData;

    repos = repos.sort((a, b) => b.forks_count - a.forks_count);
    repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 10);
  }, []);

  console.log(user);

  return (
    <div>
      <div>{user.login + ' ' + user.public_repos}</div>
      <div>
        {repos.map(r => (
          <div>
            <p>
              <a href={r.url}>{`${r.name} (${r.language}):`}</a> {`${r.description}`}
            </p>
            <p>{`stars: ${r.stargazers_count}| forks: ${r.forks_count}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
