import Square from "./Square"
import Surface from "./Surface"
import { iCubeData, iRotation } from "../types.d"
import { useState } from "react"
import CubeHandle from "./Handles/CubeHandle"

interface Props {
	cubeData: iCubeData
}

const Cube = (props: Props): JSX.Element => {
	const { cubeData } = props

	const [cursor, setCursor] = useState<iRotation>({ x: 0, y: 0 })
	const [drag, setDrag] = useState<iRotation | null>(null)

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.button === 1) {
			setDrag({ x: 0, y: 0 })
			setCursor({ x: e.clientX, y: e.clientY })
		}
	}

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (drag) {
			if (e.clientX === 0 && e.clientY === 0) return

			setDrag({ x: drag.x + e.clientX - cursor.x, y: drag.y + e.clientY - cursor.y })
			setCursor({ x: e.clientX, y: e.clientY })
		}
	}

	const handleMouseUp = () => {
		if (drag) {
			setDrag(null)
			setCursor({ x: 0, y: 0 })
		}
	}

	return (
		<div
			className={`drag-area ${drag ? "dragging" : ""}`}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}>
			<div className="cube-wrapper">
				<div className="cube">
					<div
						className="rotation-wrapper"
						style={{
							transform: drag
								? `rotateX(${-drag.y * 0.5}deg) rotateY(${drag.x * 0.5}deg)`
								: ""
						}}>
						{cubeData.map(({ correct, current }) => (
							<Square key={`${correct.face}-${correct.position}`} {...current} />
						))}
						{Array(12)
							.fill(0)
							.map((_, i) => (
								<Surface key={i} i={i} />
							))}
						{(["x", "y", "z"] as const).map(axis => (
							<CubeHandle axis={axis} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cube
