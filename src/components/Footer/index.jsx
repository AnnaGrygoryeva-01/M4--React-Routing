import styles from "./Footer.module.sass";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h2 className={styles.footerTitle}>CONTACT US</h2>
      <a href="mailto:myapp@gmail.com">MyApp@gmail.com</a>
      <a href="tel:06724484885">+3806724484885</a>
    </div>
  );
}

export default Footer;
