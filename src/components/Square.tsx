import { Color, Direction, Position } from "../types.d"

interface Props {
	position: Position
	direction: Direction
	face: Color
}

const Square = (props: Props): JSX.Element => {
	const { position, direction, face } = props

	return (
		<div className={`square ${direction}-${position}`}>
			<div style={{ backgroundColor: face }} />
		</div>
	)
}

export default Square
