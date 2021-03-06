import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/About.scss';
import juan from '../media/juan.jpg';

const About = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let githubClientId;
    githubClientId = process.env.REACT_APP_GITHUB_ID;

    let config = {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    };

    const userData = axios.get(
      `https://api.github.com/users/juanirache?client_id=${githubClientId}`,
      config
    );
    const reposData = axios.get(
      `https://api.github.com/users/juanirache/repos?per_page=100&client_id=${githubClientId}`,
      config
    );

    Promise.all([userData, reposData]).then(result => {
      setUser(result[0].data);
      let newRepos = result[1].data;
      newRepos = newRepos.sort((a, b) => b.forks_count - a.forks_count);
      newRepos = newRepos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 7);
      setRepos(newRepos);
      setLoading(false);
    });
  }, []);

  return (
    <div className="About">
      <section className="upper">
        <div className="photo">
          <img src={juan} alt="Juan Irache" />
        </div>
        <div className="description">
          <p>Hey, I'm Juan.</p>{' '}
          <p>
            I have been coding apps of one sort or another for{' '}
            {Math.floor(new Date().getFullYear() - 2012)} years now, first as a hobby, then for a
            living. I started my career in the cinema/video industry, but at some point, while
            living in Australia, my interest shifted towards creating things with code. Since I was
            spending most of my spare time developing programs, I decided to study the field
            seriously and switch careers.
          </p>
          <p>
            I love translating new ideas into code, especially anything related to interaction with
            sensors and data visualization. My background outside the IT industry gives me a
            perspective different from what you usually find among developers. A naivety of sorts,
            if you will. Most of all, I love the feeling one gets when a concept that seemed almost
            impossible to build becomes a reality through hard work.
          </p>
          <p>
            <strong>
              App Prototyping Barcelona is about putting the focus on functionality, not just looks.
              Like having your own technical co-founder.
            </strong>
          </p>
          <p>
            If you want your idea turned into code,{' '}
            <a href="mailto:app@prototyping.barcelona">send me an email</a>.
          </p>
          <p className="signature">Juan Irache</p>
        </div>
      </section>
      <section className="lower">
        {loading ? (
          <div className="github">
            <h4>Loading GitHub...</h4>
          </div>
        ) : (
          <div className="github">
            <h4>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                On GitHub
              </a>
            </h4>

            <table>
              <tbody>
                {repos.map(r => (
                  <tr key={r.id}>
                    <td>
                      <a href={r.html_url} target="_blank" rel="noopener noreferrer">{`${r.name}${
                        r.language ? ` (${r.language})` : ''
                      }`}</a>
                    </td>
                    <td>
                      {!!r.stargazers_count && (
                        <span className="githubStats">
                          <i className="fas fa-star" />
                          {r.stargazers_count}
                        </span>
                      )}
                    </td>
                    <td>
                      {!!r.forks_count && (
                        <span className="githubStats">
                          <i className="fas fa-code-branch" />
                          {r.forks_count}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="mail">
          <h3>
            <a href="mailto:app@prototyping.barcelona">app@prototyping.barcelona</a>
          </h3>
        </div>
        <div className="socials">
          <h4>
            <a
              href="https://www.youtube.com/channel/UCQFWT-CNgkC8ukhKgHaB4Vw"
              target="_blank"
              rel="noopener noreferrer"
            >
              On YouTube
            </a>
          </h4>
          <h4>
            <a href="https://twitter.com/JuanIrache" target="_blank" rel="noopener noreferrer">
              On Twitter
            </a>
          </h4>
        </div>
      </section>
    </div>
  );
};

export default About;
