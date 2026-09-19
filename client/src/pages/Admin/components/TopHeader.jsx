import styles from './topheader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function TopHeader({ onMenuClick }) {
	return <header className={`admin-header ${styles.header}`}><button className={styles.menuButton} onClick={onMenuClick} aria-label="Open navigation"><FontAwesomeIcon icon={faBars} /></button><div className={styles.brand}><img src="/src/assets/logo.png" alt="St. Francis Catholic Church" /><div className={styles.divider} /><div><p className="eyebrow">Church Management System</p><h1>Admin Panel</h1><p className="header-caption">Manage users, events and parish services</p></div></div><div className={`admin-profile ${styles.profile}`}><button className={styles.notification} aria-label="Notifications"><FontAwesomeIcon icon={faBell} /><span>3</span></button><div className={styles.avatar}>A</div><div><strong>Admin</strong><small>System Administrator</small></div><span className={styles.chevron}><FontAwesomeIcon icon={faChevronDown} /></span></div></header>
}

export default TopHeader
