import React, { useState } from "react"
import { iVector3D } from "../../types"

interface Props {
	axis: "x" | "y" | "z"
	setRotation: React.Dispatch<React.SetStateAction<iVector3D>>
}

const CubeHandle = (props: Props) => {
	const { axis, setRotation } = props

	const [previousAngle, setPreviousAngle] = useState(0)
	const [dragging, setDragging] = useState(false)

	const getDragAngle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const angle = Math.atan2(
			window.innerHeight / 2 - event.clientY,
			window.innerWidth / 2 - event.clientX
		)
		
		return angle - previousAngle
	}

	const onMouseDown = () => {
		setDragging(true)
	}

	const onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (dragging) {
			console.log(axis, getDragAngle(event))
			setRotation(rotation => ({ ...rotation, [axis]: getDragAngle(event) }))
		}
	}

	const onMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setDragging(false)
		setPreviousAngle(getDragAngle(event))
	}

	return (
		<div
			className={`cube-handle cube-handle-${axis} ${dragging ? `cube-handle-${axis}-active` : ""}`}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
		/>
	)
}

export default CubeHandle
