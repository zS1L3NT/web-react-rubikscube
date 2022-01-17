import Cube from "./components/Cube"
import { Color } from "./types.d"

const App = () => {
	return (
		<Cube
			cubeData={{
				front: [
					Color.RED,
					Color.RED,
					Color.RED,
					Color.RED,
					Color.RED,
					Color.RED,
					Color.RED,
					Color.RED,
					Color.RED
				],
				back: [
					Color.ORANGE,
					Color.ORANGE,
					Color.ORANGE,
					Color.ORANGE,
					Color.ORANGE,
					Color.ORANGE,
					Color.ORANGE,
					Color.ORANGE,
					Color.ORANGE
				],
				left: [
					Color.GREEN,
					Color.GREEN,
					Color.GREEN,
					Color.GREEN,
					Color.GREEN,
					Color.GREEN,
					Color.GREEN,
					Color.GREEN,
					Color.GREEN
				],
				right: [
					Color.BLUE,
					Color.BLUE,
					Color.BLUE,
					Color.BLUE,
					Color.BLUE,
					Color.BLUE,
					Color.BLUE,
					Color.BLUE,
					Color.BLUE
				],
				top: [
					Color.WHITE,
					Color.WHITE,
					Color.WHITE,
					Color.WHITE,
					Color.WHITE,
					Color.WHITE,
					Color.WHITE,
					Color.WHITE,
					Color.WHITE
				],
				bottom: [
					Color.YELLOW,
					Color.YELLOW,
					Color.YELLOW,
					Color.YELLOW,
					Color.YELLOW,
					Color.YELLOW,
					Color.YELLOW,
					Color.YELLOW,
					Color.YELLOW
				]
			}}
		/>
	)
}

export default App
