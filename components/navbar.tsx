import Link from 'next/link'
import { useRouter } from 'next/router'

function Navbar() {
	const { asPath } = useRouter()
	console.log(asPath)

	return (
		<nav className="navbar">
			<ul className="nav-lists">
				<li className="nav-list">
					<Link href="/">
						<a className={asPath === '/' ? 'list active' : 'list'}>
							Home
						</a>
					</Link>
				</li>
				<li className="nav-list">
					<Link href="/posts">
						<a className={asPath === '/posts' ? 'list active' : 'list'}>
							Posts
						</a>
					</Link>
				</li>
				<li className="nav-list">
					<Link href="/about">
						<a className={asPath === '/about' ? 'list active' : 'list'}>
							About
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
