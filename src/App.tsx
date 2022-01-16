import Cube from "./components/Cube"

const App = () => {
	return (
		<Cube
			cubeData={{
				front: [
					"red-1",
					"red-2",
					"red-3",
					"red-4",
					"red-5",
					"red-6",
					"red-7",
					"red-8",
					"red-9"
				],
				back: [
					"orange-1",
					"orange-2",
					"orange-3",
					"orange-4",
					"orange-5",
					"orange-6",
					"orange-7",
					"orange-8",
					"orange-9"
				],
				left: [
					"green-1",
					"green-2",
					"green-3",
					"green-4",
					"green-5",
					"green-6",
					"green-7",
					"green-8",
					"green-9"
				],
				right: [
					"blue-1",
					"blue-2",
					"blue-3",
					"blue-4",
					"blue-5",
					"blue-6",
					"blue-7",
					"blue-8",
					"blue-9"
				],
				top: [
					"white-1",
					"white-2",
					"white-3",
					"white-4",
					"white-5",
					"white-6",
					"white-7",
					"white-8",
					"white-9"
				],
				bottom: [
					"yellow-1",
					"yellow-2",
					"yellow-3",
					"yellow-4",
					"yellow-5",
					"yellow-6",
					"yellow-7",
					"yellow-8",
					"yellow-9"
				]
			}}
		/>
	)
}

export default App
