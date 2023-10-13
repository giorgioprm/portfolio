import styles from "./Header.module.scss";
import photo from "../../images/giorgio_photo.png";
import LinkContact from "../main/Contact/LinksContact";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <NavBar />
      <section className={styles.headerBox} id="inicio">
        <div className={styles.hero}>
          <h1 className={styles.title}>Hola mundo!</h1>
          <div>
            <img className={styles.photo} src={photo} alt="Giorgio face" />
          </div>
          <div className={styles.code}>
            <i className="fas fa-code"></i>
            <p className={styles.name}>Soy Giorgio Ruitón Mauricci</p>
            <i className="fas fa-code"></i>
          </div>
          <div className={styles.description}>
            <div className={styles.job}>👨🏻‍💻 Back-End Developer</div>
            <p>
            Programador{" "} <strong>innovador</strong> y <strong>emprendedor</strong>, tengo dominio del desarrollo de software con experiencia
            como analista de sistemas y soporte en el sector IT
            </p>
          </div>
          <LinkContact />
          <a href="#projects">
            <div className={styles.btnGoDown}>
              <i className="fas fa-chevron-down"></i>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Header;
