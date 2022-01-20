import defaultCubeData from "./json/default-cube-data.json"
import DragArea from "./components/DragArea"
import { iCubeData } from "./types.d"

const App = () => {
	return <DragArea cubeData={defaultCubeData as iCubeData} />
}

export default App
