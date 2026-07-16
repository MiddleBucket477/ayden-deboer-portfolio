import { forwardRef } from 'react';
import styles from './Contact.module.css'

const Contact = forwardRef(function Contact(props, ref) {
  return (
    <section className={styles.contact} id="contact" ref={ref}>
        
    </section>
  );
});

export default Contact;