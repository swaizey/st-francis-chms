import { useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import UpcomingEvents from '../components/UpcomingEvents.jsx'
import Hero from './components/Hero.jsx.jsx'
import Form from './components/Form.jsx'
import styles from './register.module.css'

function Register() {
	useEffect(() => {
		document.title = 'Become a Member | St. Francis Catholic Church'
	}, [])

	return <div className={styles.page}><Nav /><Hero /><main className={styles.content}><section className={styles.formColumn}><Form /></section><aside className={styles.sidebar}><UpcomingEvents /></aside></main><Footer /></div>
}

export default Register
