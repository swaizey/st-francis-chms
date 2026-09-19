import styles from './hero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faUserShield } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
	return <div className={styles.hero}><div className={styles.icon}><FontAwesomeIcon icon={faUserShield} /></div><div><p className="eyebrow">Welcome back</p><h2>Good morning, Admin</h2><p>Here is what is happening in your parish today.</p></div><div className={styles.cross}><FontAwesomeIcon icon={faCross} /></div></div>
}

export default HeroSection
