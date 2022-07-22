import React, { AnchorHTMLAttributes, forwardRef, Ref } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children?: React.ReactNode
}

// eslint-disable-next-line react/display-name
const A = forwardRef(
	(
		{ children, onClick, href, className }: Props,
		ref: Ref<HTMLAnchorElement>
	) => {
		return (
			<a
				ref={ref}
				href={href}
				onClick={onClick}
				className={className ? `font-bold ${className}` : 'font-bold'}
			>
				{children}
			</a>
		)
	}
)

export default A
