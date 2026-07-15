import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.floor}></div>
      <h1 className={styles.name}>AYDEN DEBOER</h1>
    </section>
  );
}

export default Hero;