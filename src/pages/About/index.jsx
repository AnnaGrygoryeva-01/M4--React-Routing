import styles from "./About.module.sass";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>Welcome to MyApp!</h1>
      <p>
        Born out of a frustration with overly complicated software, MyApp was
        designed to be your ultimate digital pocketknife for everyday focus and
        productivity. We believe that technology shouldn't get in your way; it
        should seamlessly blend into your daily routine to help you achieve your
        goals. Whether you are a student trying to focus on studying, an athlete
        tracking reps at the gym, or just someone trying to measure how much
        coffee you drink in a day, MyApp is built to give you exactly what you
        need, right when you need it—without the unnecessary clutter.
      </p>
      <p>
        At the heart of our platform is our Tools hub, featuring our flagship,
        lightning-fast Stopwatch and Counter. We engineered these utilities to
        be beautifully minimal yet incredibly reliable, proving that the
        simplest tools are often the most powerful. We are constantly dreaming
        up new ways to help you measure, track, and master your time, and we're
        thrilled to have you on this journey with us. Go ahead, click around,
        and see how a little simplicity can transform your day!
      </p>
    </div>
  );
}

export default About;
