import Layout from '../components/layout'
import { ReactElement } from 'react'

function About() {
	return <div>About page</div>
}

About.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default About
