import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.floor}></div>
      <div className={styles.nameWrapper}>
        <h1 className={styles.name}>AYDEN&nbsp; DEBOER</h1>
        <h1 className={styles.reflection}>AYDEN&nbsp; DEBOER</h1>
      </div>
    </section>
  );
}

export default Hero;