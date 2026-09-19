import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import styles from './hero.module.css'

function Hero() {
	return <section className={styles.hero}><div className={styles.leaves}>❧</div><div className={styles.inner}><div className={styles.icon}><FontAwesomeIcon icon={faPeopleGroup} /></div><div><p>Join our parish family and grow in faith,</p><h1>Become a Member</h1><p>fellowship and service.</p><blockquote>“For where two or three are gathered in my name,<br />there am I with them.” - Matthew 18:20</blockquote></div></div><div className={styles.sun}></div><div className={styles.church}>✝</div></section>
}

export default Hero
