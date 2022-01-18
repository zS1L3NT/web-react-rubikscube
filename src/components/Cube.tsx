import Square from "./Square"
import Surface from "./Surface"
import { iCubeData, iVector2D } from "../types.d"

interface Props {
	drag: iVector2D | null
	rotation: iVector2D
	cubeData: iCubeData
}

const Cube = (props: Props): JSX.Element => {
	const { drag, rotation, cubeData } = props

	return (
		<div className="cube-wrapper">
			<div className="cube">
				<div
					className="rotation-wrapper"
					style={{
						transform: drag
							? `rotateX(${-drag.y * 0.5}deg) rotateY(${drag.x * 0.5}deg)`
							: ""
					}}>
					<div
						className="rotation-wrapper"
						style={{
							transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
						}}>
						{cubeData.map(({ correct, current }) => (
							<Square key={`${correct.face}-${correct.position}`} {...current} />
						))}
						{Array(12)
							.fill(0)
							.map((_, i) => (
								<Surface key={i} i={i} />
							))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cube
