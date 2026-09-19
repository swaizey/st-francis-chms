import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCheck, faClock, faLocationDot, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import styles from './upcomingevent.module.css'

const events = [{ date: 'APR 26', title: 'Choir Rehearsal', time: '4:00 PM - 6:00 PM', place: 'Main Church' }, { date: 'APR 27', title: 'Youth Fellowship', time: '3:00 PM - 5:00 PM', place: 'Youth Centre' }, { date: 'APR 30', title: 'Bible Study Group', time: '7:00 PM - 8:30 PM', place: 'Parish Hall' }, { date: 'MAY 03', title: 'Community Outreach', time: '8:00 AM - 12:00 PM', place: 'Parish Compound' }, { date: 'MAY 10', title: 'Marriage Preparation Seminar', time: '10:00 AM - 1:00 PM', place: 'Parish Hall' }]

function UpcomingEvents() {
	return <div className={styles.stack}><section className={styles.quoteTop}><p>“Together<br />in Faith,<br />Family and<br />Service”</p><span></span></section><section className={styles.card}><div className={styles.heading}><h2><FontAwesomeIcon icon={faCalendarDays} /> Upcoming Church Activities</h2><a href="#events">View All →</a></div>{events.map((event) => <article className={styles.event} key={event.title}><time>{event.date}</time><div><strong>{event.title}</strong><small><FontAwesomeIcon icon={faClock} /> {event.time}</small><small><FontAwesomeIcon icon={faLocationDot} /> {event.place}</small></div></article>)}</section><section className={styles.whyJoin}><div className={styles.whyHeading}><FontAwesomeIcon icon={faPeopleGroup} /><h2>Why Join?</h2></div><ul>{['Grow in your faith', 'Be part of a loving community', 'Serve and make a difference', 'Access to church programs and activities'].map((item) => <li key={item}><FontAwesomeIcon icon={faCheck} /> {item}</li>)}</ul><span className={styles.leafAccent}>❧</span></section><section className={styles.quoteBottom}><p>“The Church is not a place,<br />it is a family.”</p><small>- Pope Francis</small><span></span></section></div>
}

export default UpcomingEvents
