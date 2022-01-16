import Square from "./Square"
import { Color, iRotation } from "../types.d"
import { useState } from "react"

const Cube = (): JSX.Element => {
	const [dragging, setDragging] = useState(false)
	const [position, setPosition] = useState<iRotation>({ x: 0, y: 0 })
	const [rotations, setRotations] = useState<iRotation[]>([])

	const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
		if (e.clientX === 0 && e.clientY === 0) return

		const difference = { x: e.clientX - position.x, y: e.clientY - position.y }

		const rotation = rotations.at(-1)!
		setRotations([
			...rotations.slice(0, -1),
			{ x: rotation.x + difference.x, y: rotation.y + difference.y }
		])

		setPosition({ x: e.clientX, y: e.clientY })
	}

	const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
		setDragging(true)
		setPosition({ x: e.clientX, y: e.clientY })
		setRotations([...rotations, { x: 0, y: 0 }])

		if (e.dataTransfer) {
			const img = new Image()
			img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
			e.dataTransfer.setDragImage(img, 0, 0)
			e.dataTransfer.dropEffect = "move"
		}
	}

	const handleDragEnd = () => {
		setDragging(false)
		setPosition({ x: 0, y: 0 })
	}

	return (
		<div
			className={`drag-area ${dragging ? "dragging" : ""}`}
			draggable={true}
			onDragStart={handleDragStart}
			onDrag={handleDrag}
			onDragEnd={handleDragEnd}>
			<div className="cube-wrapper">
				<div className="cube">
					{rotations.reduce(
						(a, r) => (
							<div
								className="rotation-wrapper"
								style={{ transform: `rotateX(${-r.y}deg) rotateY(${r.x}deg)` }}>
								{a}
							</div>
						),
						<>
							{Object.values(Color).flatMap(color =>
								Array(9)
									.fill(0)
									.map((_, i) => (
										<Square key={`${color}-${i}`} i={i} color={color} />
									))
							)}
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Cube
