import React from "react"

interface Props {
	axis: "x" | "y" | "z"
}

const CubeHandle = (props: Props) => {
	const { axis } = props

	return <div className={`cube-handle cube-handle-${axis}`}></div>
}

export default CubeHandle
