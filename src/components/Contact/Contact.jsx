import { forwardRef } from 'react';
import styles from './Contact.module.css'

import { FaGithub, FaLinkedin, FaDiscord, FaSteam } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";

const Contact = forwardRef(function Contact(props, ref) {

  const contacts = [{name: "Email", icon: MdEmail, url: "mailto:aadeboer05@gmail.com"}, 
                  {name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/ayden-deboer/"},
                  {name: "Resume", icon: IoIosDocument, url: "Ayden_Resume.pdf"},
                  {name: "GitHub", icon: FaGithub, url: "https://github.com/middlebucket477"},
                  {name: "Discord", icon: FaDiscord, url: "https://discordapp.com/users/781710514652184618"},
                  {name: "Steam Game", icon: FaSteam, url: "https://store.steampowered.com/app/4051050/Genesis/"}];

  return (
    <section className={styles.contactPage} id="contact" ref={ref}>
      <h1 className={styles.heading}>Contact</h1>
      <div className={styles.contacts}>
        {contacts.map((contact) =>
        <div key={contact.name} className={styles.contact}>
          <a href={contact.url} target="_blank" rel="noopener noreferrer">
            <contact.icon className={styles.contactIcon}/>
            <h1>{contact.name}</h1>
          </a>
        </div>)}
      </div>
    </section>
  );
});

export default Contact;