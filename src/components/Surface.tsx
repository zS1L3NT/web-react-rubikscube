interface Props {
	i: number
}

const Surface = (props: Props): JSX.Element => {
	const { i } = props

	return (
		<div className={`surface surface-${i + 1}`}>
			<div />
		</div>
	)
}

export default Surface
