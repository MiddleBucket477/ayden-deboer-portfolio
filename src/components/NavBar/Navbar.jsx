import styles from './Navbar.module.css';

function Navbar({ activeSection }) {

  return (
    <nav className={styles.navbar}>
        <div className={styles.buttons}>
            <div className={styles.buttonWrapper}>
                {console.log('styles.active is:', styles.active)}
                <button className={activeSection === 'home' ? styles.active : ''}>
                  HOME
                </button>
            </div>    
            <div className={styles.buttonWrapper}>
                <button className={activeSection === 'projExper' ? styles.active : ''}>
                  PROJECTS & EXPERIENCE
                </button>
            </div>    
            <div className={styles.buttonWrapper}>
                <button className={activeSection === 'about' ? styles.active : ''}>
                  ABOUT
                </button>
            </div>    
            <div className={styles.buttonWrapper}>
                <button className={activeSection === 'contact' ? styles.active : ''}>
                  CONTACT
                </button>
            </div>    
        </div>
    </nav>
  );
}

export default Navbar;