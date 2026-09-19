import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from './components/SideNav.jsx'
import TopHeader from './components/TopHeader.jsx'
import HeroSection from './components/HeroSection.jsx'
import Population from './components/Population.jsx'
import UserTable from './components/UserTable.jsx'
import QuickAction from './components/QuickAction.jsx'
import Footer from './components/Footer.jsx'

function Admin() {
	const [isNavOpen, setIsNavOpen] = useState(false)

	return (
		<div className="admin-layout">
			<SideNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
			<main className="admin-main">
				<TopHeader onMenuClick={() => setIsNavOpen(true)} />
				<section className="admin-content">
					<HeroSection />
					<Population />
					<div className="content-grid">
						<UserTable />
						<QuickAction />
					</div>
					<Outlet />
				</section>
				<Footer />
			</main>
		</div>
	)
}

export default Admin
