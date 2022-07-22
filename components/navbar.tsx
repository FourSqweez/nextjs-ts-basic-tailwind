import A from './aTag'
import Link from './customLink'

function Navbar() {
	return (
		<nav className="w-full h-16 m-0 p-0">
			<ul className="h-full flex justify-center items-center border-b border-gray-500 m-0 px-5">
				<li className="nav-list">
					<Link href="/">Home</Link>
				</li>
				<li className="nav-list">
					<Link href="/posts">Posts</Link>
				</li>
				<li className="nav-list">
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
