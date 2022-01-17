import CircularSlider from "@fseehawer/react-circular-slider"
import React from "react"
import { iVector3D } from "../../types.d"

interface Props {
	axis: "x" | "y" | "z"
	rotation: iVector3D
	setRotation: React.Dispatch<React.SetStateAction<iVector3D>>
}

const CubeHandle = (props: Props) => {
	const { axis, rotation, setRotation } = props

	const handleChange = (value: number) => {
		setRotation(rotation => ({ ...rotation, [axis]: value }))
	}

	return (
		<div className={`cube-handle cube-handle-${axis}`}>
			<CircularSlider
				width={500}
				dataIndex={rotation[axis]}
				knobColor="grey"
				trackColor="lightgrey"
				progressColorFrom="grey"
				progressColorTo="grey"
				hideLabelValue={true}
				onChange={handleChange}>
				<p>{axis}</p>
			</CircularSlider>
		</div>
	)
}

export default CubeHandle
