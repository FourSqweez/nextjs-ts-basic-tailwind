import { ReactElement } from 'react'
import Layout from '../../components/layout'

function Posts() {
	return <div className="container">Posts</div>
}
Posts.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Posts
