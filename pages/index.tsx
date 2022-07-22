import Layout from '../components/layout'
import { ReactElement } from 'react'

function Home() {
	return <div>Home Page</div>
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Home
