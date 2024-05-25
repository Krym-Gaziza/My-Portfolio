import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/gaziza.pdf';
import { useTheme } from '../../common/ThemeContext';
import RenderPropsComponent from '../../common/RenderPropsComponent';
import React, { useEffect } from 'react';
import { measurePageLoadTime } from '../../common/performanceUtils';

function Hero() {
  useEffect(() => {
    measurePageLoadTime();
  }, []);
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Krym Gaziza"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      
      <div className={styles.info}>
      <br></br><br></br>
        <h1>
          KRYM GAZIZA
        </h1>
        <br></br>
        <h2>'Frontend Developer'</h2>
        <h2>'3D artist'</h2>
        <h2>'UI/UX designer'</h2>

        <span>
          <a href="https://www.figma.com/files/drafts?fuid=1282889181787175610" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Krym-Gaziza/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/gaziza-krym-09a034257/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        I create modern web applications for various 
        companies and projects
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
        <RenderPropsComponent render={() => <span></span>} />
      </div>
    </section>
  );
}

export default Hero;
