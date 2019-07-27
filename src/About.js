import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './About.scss';
import juan from './juan.jpg';

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
    <div className="About">
      <div className="About-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis eius voluptatum doloremque, quod blanditiis temporibus
        deserunt veniam ipsam facere, excepturi, repellendus eos. Minima, eligendi. Beatae dolorum non quam sunt.
      </div>

      <div className="About-github">
        {/* <h4>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            Juan Irache Duesca
          </a>
        </h4> */}
        <div className="About-repos">
          {repos.map(r => (
            <div key={r.id} className="About-repo">
              <a href={r.html_url} target="_blank" rel="noopener noreferrer">{`${r.name}${r.language ? ` (${r.language})` : ''}`}</a>
              <span>
                {!!r.stargazers_count && (
                  <span>
                    <i className="fas fa-star" />
                    {r.stargazers_count}
                  </span>
                )}
                {!!r.forks_count && (
                  <span>
                    <i className="fas fa-code-branch" />
                    {r.forks_count}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="About-photo">
        <img src={juan} alt="" />
      </div>
      <div className="About-mail">
        <h3>
          <a href="mailto:juan@tailorandwayne.com">juan@tailorandwayne.com</a>
        </h3>
      </div>
    </div>
  );
};

export default About;
