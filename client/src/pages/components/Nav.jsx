import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRightToBracket, faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './nav.module.css'

const links = [['Home', '/register'], ['About Us', '/about'], ['Mass Schedule', '/mass-schedule'], ['Events', '/events'], ['Groups & Ministries', '/groups'], ['News', '/news'], ['Contact', '/contact']]

function Nav() {
	const [open, setOpen] = useState(false)

	return <header className={styles.header}><Link className={styles.logo} to="/register"><img src="/src/assets/logo.png" alt="St. Francis Catholic Church" /></Link><button className={styles.menuButton} onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}><FontAwesomeIcon icon={open ? faXmark : faBars} /></button><nav className={`${styles.nav} ${open ? styles.open : ''}`}>{links.map(([label, to]) => <NavLink key={label} to={to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? styles.active : ''}>{label}</NavLink>)}<Link className={styles.login} to="/login" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faRightToBracket} /> Login</Link><Link className={styles.register} to="/register" onClick={() => setOpen(false)}>Register</Link></nav></header>
}

export default Nav
