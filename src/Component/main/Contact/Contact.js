import styles from "../Contact/Contact.module.scss";

function Contact() {
  return (
    <section className={styles.wrapper}>
      <p className={styles.msg}>
        Deseas que te ayude con algún proyecto? ...
        <strong>Tomemos un cafe! </strong>
      </p>
      <p>
        <a className={styles.btn} href="mailto:gpaoloruitonm@gmail.com">
          <i className="far fa-envelope"></i> Escríbeme
        </a>
      </p>
    </section>
  );
}

export default Contact;
