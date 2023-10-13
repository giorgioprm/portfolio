import styles from "./Footer.module.scss";
function Footer() {
  return (
    <div className={styles.footer}>
      <span>
        Made with <i className="fa fa-coffee"></i> by Giorgio Ruitón
      </span>
    </div>
  );
}

export default Footer;
