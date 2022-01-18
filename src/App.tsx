import Cube from "./components/Cube"
import defaultCubeData from "./json/default-cube-data.json"
import DragArea from "./components/DragArea"
import { iCubeData } from "./types.d"
import { useState } from "react"

const App = () => {
	const [cubeData, setCubeData] = useState<iCubeData>(defaultCubeData as iCubeData)

	return <DragArea cubeData={cubeData} />
}

export default App
