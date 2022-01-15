import { Color } from "../types.d"
import Square from "./Square"

const Cube = (): JSX.Element => {
	return (
		<div className="cube-wrapper">
			<div
				className="cube"
				style={{ transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg)` }}>
				{Object.values(Color).flatMap(color =>
					Array(9)
						.fill(0)
						.map((_, i) => <Square key={`${color}-${i}`} i={i} color={color} />)
				)}
			</div>
		</div>
	)
}

export default Cube
