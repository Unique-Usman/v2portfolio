import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiDribbbleFill,
} from "react-icons/ri";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div>
        <span>find me in:</span>
      </div>
      <div>
        <a
          aria-label="Unique-Usman linkedin profile"
          href="https://www.linkedin.com/in/usman-akinyemi-1689711b3/"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Unique-Usman twitter profile"
          href="https://x.com/usman_akinyemi"
          target="_blank"
          rel="noreferrer"
        >
          <RiTwitterFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Unique-Usman github profile"
          href="https://github.com/Unique-Usman/"
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Designed by Yanka Darelova"
          href="https://dribbble.com/shots/18111356-Portfolio-Concept-V-2"
          target="_blank"
          rel="noreferrer"
          title="Designed by Yanka Darelova"
        >
          <span className={styles.githubUsername}>
            Designed by Yanka Darelova
          </span>
          <RiDribbbleFill fill="#607B96" size={25} />
        </a>
      </div>
    </footer>
  );
}
