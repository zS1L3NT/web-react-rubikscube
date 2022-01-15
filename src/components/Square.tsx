import { Color } from "../types.d"

interface Props {
	i: number
	color: Color
}

const Square = (props: Props): JSX.Element => {
	const { i, color } = props

	return (
		<div className={`square ${color}-${i}`}>
			<div style={{ backgroundColor: color }} />
		</div>
	)
}

export default Square
