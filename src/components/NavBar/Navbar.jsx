import styles from './Navbar.module.css';

function Navbar({ activeSection, onProjExper, onAbout, onContact }) {

  return (
    <nav className={styles.navbar}>
        <div className={styles.buttons}>
            <div className={styles.buttonWrapper}>
                <button className={activeSection === 'home' ? styles.active : ''} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  HOME
                </button>
            </div>    
            <div className={styles.buttonWrapper}>
                <button className={activeSection === 'projExper' ? styles.active : ''} onClick={onProjExper}>
                  PROJECTS & EXPERIENCE
                </button>
            </div>    
            <div className={styles.buttonWrapper}>
                <button className={activeSection === 'about' ? styles.active : ''} onClick={onAbout}>
                  ABOUT
                </button>
            </div>    
            <div className={styles.buttonWrapper}>
                <button className={activeSection === 'contact' ? styles.active : ''} onClick={onContact}>
                  CONTACT
                </button>
            </div>    
        </div>
    </nav>
  );
}

export default Navbar;