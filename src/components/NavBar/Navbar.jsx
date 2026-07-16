import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.buttons}>
            <div className={styles.buttonWrapper}>
                <button>HOME</button>
            </div>    
            <div className={styles.buttonWrapper}>
                <button>PROJECTS & EXPERIENCE</button>
            </div>    
            <div className={styles.buttonWrapper}>
                <button>ABOUT</button>
            </div>    
            <div className={styles.buttonWrapper}>
                <button>CONTACT</button>
            </div>    
        </div>
    </nav>
  );
}

export default Navbar;