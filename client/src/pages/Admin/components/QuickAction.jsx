import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBolt, faFileArrowDown, faFileArrowUp, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import styles from './quickaction.module.css'

const actions = [{ label: 'Add User', icon: faUserPlus }, { label: 'Import Users (CSV)', icon: faFileArrowDown }, { label: 'Export Users (CSV)', icon: faFileArrowUp }, { label: 'View User Groups', icon: faUsers }]

function QuickAction() {
	return <aside className={`panel quick-panel ${styles.panel}`}><div className="panel-heading"><div><p className="eyebrow"><FontAwesomeIcon icon={faBolt} /> Shortcuts</p><h2>Quick Actions</h2></div></div>{actions.map((action) => <NavLink to="." className={styles.action} key={action.label}><span><FontAwesomeIcon icon={action.icon} /></span>{action.label}<b><FontAwesomeIcon icon={faArrowRight} /></b></NavLink>)}<div className={styles.quote}>“For where two or three are gathered in my name, there am I with them.”<small>Matthew 18:20</small></div></aside>
}

export default QuickAction
