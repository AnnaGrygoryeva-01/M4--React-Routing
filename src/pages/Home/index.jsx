import styles from "./Home.module.sass";

function Home() {
  return (
    <h1 className={styles.homeTitle}>
      Your Everyday&nbsp;
      <span className={styles.highlightText}> Digital Toolkit </span>
    </h1>
  );
}

export default Home;
