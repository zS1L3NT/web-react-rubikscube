import { Color, iCubeData } from "../types.d"

interface Props {
	i: number
	color: Color
	direction: keyof iCubeData
}

const Square = (props: Props): JSX.Element => {
	const { i, color, direction } = props

	return (
		<div className={`square ${direction}-${i}`}>
			<div style={{ backgroundColor: color }} />
		</div>
	)
}

export default Square
