import styles from './population.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faUserCheck, faUserGroup, faUserSlash, faUserShield } from '@fortawesome/free-solid-svg-icons'

const cards = [{ label: 'Total Users', value: '2,458', detail: '12% from last month', tone: 'green', icon: faUserGroup }, { label: 'Active Users', value: '2,312', detail: '10% from last month', tone: 'gold', icon: faUserCheck }, { label: 'Inactive Users', value: '146', detail: '8% from last month', tone: 'gray', icon: faUserSlash }, { label: 'System Administrators', value: '3', detail: 'No change', tone: 'green', icon: faUserShield }]

function Population() {
	return <div className={styles.grid}>{cards.map((card) => <article className={styles.card} key={card.label}><div className={`${styles.icon} ${styles[card.tone]}`}><FontAwesomeIcon icon={card.icon} /></div><div><p>{card.label}</p><strong>{card.value}</strong><small className={card.tone === 'gray' ? styles.down : ''}>{card.detail === 'No change' ? <><span aria-hidden="true">— </span>{card.detail}</> : <><FontAwesomeIcon icon={card.tone === 'gray' ? faArrowDown : faArrowUp} aria-hidden="true" /> {card.detail}</>}</small></div></article>)}</div>
}

export default Population
