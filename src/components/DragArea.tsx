import Arrow from "./Arrow"
import Cube from "./Cube"
import React, { useState } from "react"
import rotateCube from "../functions/rotateCube"
import { iCubeData, iVector2D } from "../types"

interface Props {
	cubeData: iCubeData
}

const DragArea = (props: Props) => {
	const { cubeData } = props

	const [rotation, setRotation] = useState<iVector2D>({ x: 330, y: 45 })
	const [cursor, setCursor] = useState<iVector2D>({ x: 0, y: 0 })
	const [drag, setDrag] = useState<iVector2D | null>(null)

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

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		switch (e.key) {
			case "ArrowUp":
				setRotation(rotation => rotateCube(rotation, "up"))
				break
			case "ArrowDown":
				setRotation(rotation => rotateCube(rotation, "down"))
				break
			case "ArrowLeft":
				setRotation(rotation => rotateCube(rotation, "left"))
				break
			case "ArrowRight":
				setRotation(rotation => rotateCube(rotation, "right"))
				break
		}
	}

	return (
		<div
			className={`drag-area ${drag ? "dragging" : ""}`}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onKeyDown={handleKeyDown}
			tabIndex={0}>
			<Cube drag={drag} rotation={rotation} cubeData={cubeData} />
			{(["up", "right", "down", "left"] as const).map(direction => (
				<Arrow key={direction} direction={direction} setRotation={setRotation} />
			))}
		</div>
	)
}

export default DragArea
