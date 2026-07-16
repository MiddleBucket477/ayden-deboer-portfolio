import styles from './ProjExperCard.module.css'

function ProjExperCard({ card }){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <section className={styles.frontCard}>
                    <img src={card.img} className={styles.img}/>
                    <h1 className={styles.name}>{card.name}</h1>
                    <h2 className={styles.h2}>{card.group}</h2>
                    <h2 className={styles.h2}>{card.date}</h2>
                </section>
                <section className={styles.backCard}>
                    <ul className={styles.desc}>
                        {card.desc.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default ProjExperCard