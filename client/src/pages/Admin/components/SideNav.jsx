import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChartColumn, faChurch, faGear, faHouse, faPeopleGroup, faUsers, faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './sidenav.module.css'

const links = [{ label: 'Dashboard', icon: faHouse, to: '/admin' }, { label: 'Users', icon: faUsers, to: '/admin/users' }, { label: 'Events', icon: faCalendarDays, to: '/admin/events' }, { label: 'Reports', icon: faChartColumn, to: '/admin/reports' }, { label: 'Settings', icon: faGear, to: '/admin/settings' }]

function SideNav({ isOpen, onClose }) {
    return <><div className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ''}`} onClick={onClose} aria-hidden="true" /><aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}><button className={styles.closeButton} onClick={onClose} aria-label="Close navigation"><FontAwesomeIcon icon={faXmark} /></button><div className={styles.logoMark}><FontAwesomeIcon icon={faChurch} /></div><div className={styles.sidebarTitle}>ST. FRANCIS<span>CATHOLIC CHURCH</span></div><nav className={styles.nav} aria-label="Admin navigation">{links.map((link) => <NavLink key={link.label} to={link.to} end={link.to === '/admin'} onClick={onClose} className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}><span className={styles.navIcon}><FontAwesomeIcon icon={link.icon} /></span><span>{link.label}</span></NavLink>)}</nav><div className={styles.sidebarFooter}><span><FontAwesomeIcon icon={faPeopleGroup} /></span><strong>Together<br />in Christ</strong></div></aside></>
}

export default SideNav
