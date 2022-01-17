import Cube from "./components/Cube"
import defaultCubeData from "./default-cube-data.json"
import { iCubeData } from "./types.d"
import { useState } from "react"

const App = () => {
	const [cubeData, setCubeData] = useState<iCubeData>(defaultCubeData as iCubeData)

	return <Cube cubeData={cubeData} />
}

export default App
