import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faEllipsisVertical, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './usertable.module.css'

const users = ['John Doe', 'Mary Johnson', 'Peter Okafor', 'Ngozi Eze', 'Chinedu Uche']

function UserTable() {
	const [search, setSearch] = useState('')
	const visibleUsers = users.filter((name) => name.toLowerCase().includes(search.toLowerCase()))

	return <section className={`panel users-panel ${styles.panel}`}><div className="panel-heading"><div><p className="eyebrow">Directory</p><h2>Users</h2></div><button className="primary-button"><FontAwesomeIcon icon={faPlus} /> Add User</button></div><div className={styles.tools}><label className={styles.search}><span><FontAwesomeIcon icon={faMagnifyingGlass} /></span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by name, email or role..." /></label><select aria-label="Filter by role" defaultValue="all"><option value="all">All Roles</option><option>Member</option><option>Volunteer</option><option>Administrator</option></select></div><div className={styles.wrap}><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Joined</th><th /></tr></thead><tbody>{visibleUsers.map((name, index) => <tr key={name}><td><span className={styles.avatar}>{name.charAt(0)}</span>{name}</td><td>{name.toLowerCase().replace(' ', '.')}@gmail.com</td><td><span className={styles.role}>{index === 1 ? 'Family Head' : index === 2 ? 'Volunteer' : 'Member'}</span></td><td><span className={styles.status}>Active</span></td><td>Apr {12 - index * 2}, 2025</td><td><button className={styles.rowAction} aria-label={`Actions for ${name}`}><FontAwesomeIcon icon={faEllipsisVertical} /></button></td></tr>)}</tbody></table></div><div className={styles.footer}>Showing {visibleUsers.length} of 2,458 users <span><button className={styles.pageButton} aria-label="Previous page"><FontAwesomeIcon icon={faAngleLeft} /></button> 1 2 3 4 5 <button className={styles.pageButton} aria-label="Next page"><FontAwesomeIcon icon={faAngleRight} /></button></span></div></section>
}

export default UserTable
