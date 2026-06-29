import styles from "./Home.module.sass";

function Home() {
  return (
    <div className={styles.homeTitle}>
      Your Everyday&nbsp;
      <span className={styles.highlightText}> Digital Toolkit </span>
    </div>
  );
}

export default Home;
