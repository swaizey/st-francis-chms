import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChurch } from '@fortawesome/free-solid-svg-icons'

function Footer() {
	return <footer className={`admin-footer ${styles.footer}`}><FontAwesomeIcon icon={faChurch} /> St. Francis Catholic Church | Church Management System</footer>
}

export default Footer
