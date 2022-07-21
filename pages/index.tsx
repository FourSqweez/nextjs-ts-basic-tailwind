import type { NextPage } from 'next'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className="container">Home Page</div>
		</>
	)
}

export default Home
