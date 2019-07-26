import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './About.scss';

const About = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let githubClientId, githubClientSecret;
    setLoading(true);
    githubClientId = process.env.REACT_APP_GITHUB_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

    let config = {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    };
    console.log('requesting');

    const userData = axios.get(
      `https://api.github.com/users/juanirache?client_id=${githubClientId}&client_secret=${githubClientSecret}`,
      config
    );
    const reposData = axios.get(
      `https://api.github.com/users/juanirache/repos?per_page=100&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
      config
    );

    Promise.all([userData, reposData]).then(result => {
      setUser(result[0].data);
      let newRepos = result[1].data;
      newRepos = newRepos.sort((a, b) => b.forks_count - a.forks_count);
      newRepos = newRepos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 10);
      setRepos(newRepos);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <div>{user.login + ' ' + user.public_repos}</div>
      <div>
        {repos.map(r => (
          <div key={r.id}>
            <p>
              <a href={r.html_url} target="_blank" rel="noopener noreferrer">{`${r.name}${r.language ? ` (${r.language})` : ''}:`}</a>{' '}
              {`${r.description}`}
            </p>
            <p>{`stars: ${r.stargazers_count}| forks: ${r.forks_count}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
