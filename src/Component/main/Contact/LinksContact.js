import styles from "../Contact/LinksContact.module.scss";

function LinkContact() {
  return (
    <div className={styles.boxContact}>
      <a
        href="https://github.com/Gprm2525"
        target="_blank"
        rel="noreferrer"
        className={styles.nav}
      >
        <span>
          <i className="fab fa-github"></i>
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/gpaoloruitonm/"
        target="_blank"
        rel="noreferrer"
        className={styles.nav}
      >
        <span>
          <i className="fab fa-linkedin-in"></i>
        </span>
      </a>
      <a
        href="./GPRM_CV.pdf"
        target="_blank"
        rel="noreferrer"
        className={styles.nav}
      >
        <span className={styles.mailLink}>
          <i className="far fa-file-pdf"></i>
        </span>
      </a>
    </div>
  );
}

export default LinkContact;
