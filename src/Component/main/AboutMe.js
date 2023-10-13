import photo from "../../images/foto1.jpg";
import styles from "../main/AboutMe.module.scss";

function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img src={photo} className={styles.photo} alt="Foto de Giorgio" />
        <div className={styles.BoxDescription}>
          <p>
          Soy Desallorador Back-End, con mas de diez años de experiencia en el sector IT, emprendi un nuevo viaje en ser desarrollador y nutrirme de mas aprendizaje en la vida, asi como compatirlo.
          Actualmente sigo formandome tomando cursos y certificaciones para estar a la par de la tecnología cambiante.
          <strong> Me especializo en el desarrollo Web Full Stack con especialidad en JavaScript, TypeScript, Angular y Node Js.</strong>
          <br/>
          <br/>
          Las cosas que más me llama a la atención en la programación son el aprendizaje continuo, trabajar en equipo, compartir conocimientos y pertenecer a un sector tan colaborativo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
