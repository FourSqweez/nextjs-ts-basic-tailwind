import { ReactNode, Children, ReactElement, cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import A from '../components/aTag'

interface Props extends LinkProps {
	children: ReactNode
}
function CustomLink({ href, passHref, children, ...props }: Props) {
	const { asPath } = useRouter()
	// const child = Children.only(children) as ReactElement
	// console.log('test ', child)
	// const childClassName = child.props.className || ''
	// console.log('class name : ', childClassName)
	// const className =
	// 	href === asPath
	// 		? `${childClassName} text-red-500 ${console.log('Url', href)}`
	// 		: childClassName
	const isActive = href === asPath

	return (
		<Link href={href} passHref {...props}>
			{/* {cloneElement(child, { className: className || null })} */}
			<A className={isActive ? 'text-red-500' : undefined}>{children}</A>
		</Link>
	)
}

export default CustomLink
