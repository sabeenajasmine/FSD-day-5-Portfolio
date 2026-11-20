
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <section id="home" className="home">

      <div className="home-content">

        <p className="welcome">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hi, I'm <span>Sabeena Jasmine</span>
        </h1>

        <h2>
          Computer Science Engineering Student
        </h2>

        <p className="home-description">
          I am a passionate CSE student interested in
          web development, programming and data analytics.
          I enjoy learning new technologies and building
          creative projects.
        </p>

        

        <div className="home-socials">

          <a
            href="https://github.com/sabeenajasmine"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sabeena-jasmine-a-717520328?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/jasmine_rahman18"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Home;
