import React from 'react'
import Navbar from './navbar'

function layout({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default layout
