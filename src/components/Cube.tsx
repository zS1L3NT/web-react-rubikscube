import Square from "./Square"
import { Color, iCubeData, iRotation } from "../types.d"
import { useState } from "react"
import Surface from "./Surface"

interface Props {
	cubeData: iCubeData
}

const Cube = (props: Props): JSX.Element => {
	const { cubeData } = props

	const [dragging, setDragging] = useState(false)
	const [position, setPosition] = useState<iRotation>({ x: 0, y: 0 })
	const [rotations, setRotations] = useState<iRotation[]>([])

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.button === 1) {
			setDragging(true)
			setPosition({ x: e.clientX, y: e.clientY })
			setRotations([...rotations, { x: 0, y: 0 }])
		}
	}

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (dragging) {
			if (e.clientX === 0 && e.clientY === 0) return

			const difference = { x: e.clientX - position.x, y: e.clientY - position.y }

			const rotation = rotations.at(-1)!
			setRotations([
				...rotations.slice(0, -1),
				{ x: rotation.x + difference.x, y: rotation.y + difference.y }
			])

			setPosition({ x: e.clientX, y: e.clientY })
		}
	}

	const handleMouseUp = () => {
		if (dragging) {
			setPosition({ x: 0, y: 0 })
			setDragging(false)
		}
	}

	return (
		<div
			className={`drag-area ${dragging ? "dragging" : ""}`}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}>
			<div className="cube-wrapper">
				<div className="cube">
					{rotations.reduce(
						(a, r) => (
							<div
								className="rotation-wrapper"
								style={{
									transform: `rotateX(${-r.y * 0.5}deg) rotateY(${r.x * 0.5}deg)`
								}}>
								{a}
							</div>
						),
						<>
							{(Object.keys(cubeData) as (keyof iCubeData)[]).flatMap(direction =>
								cubeData[direction].map((color, i) => (
									<Square key={`${direction}-${i}`} i={i} color={color} direction={direction} />
								))
							)}
							{Array(12)
								.fill(0)
								.map((_, i) => (
									<Surface key={i} i={i} />
								))}
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Cube
