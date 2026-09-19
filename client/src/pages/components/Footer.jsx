import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChurch, faLeaf } from '@fortawesome/free-solid-svg-icons'
import styles from './footer.module.css'

function Footer() {
	return <footer className={styles.footer}><span><FontAwesomeIcon icon={faChurch} /> St. Francis Catholic Church</span><span>Faith | Family | Service</span><span><FontAwesomeIcon icon={faLeaf} /> Many hands, one mission <FontAwesomeIcon icon={faLeaf} /></span></footer>
}

export default Footer
