import React from 'react'
import Navbar from './navbar'

function Layout({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<div className="container">{children}</div>
		</>
	)
}

export default Layout
