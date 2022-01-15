enum Colors {
	WHITE = 1,
	RED = 2,
	BLUE = 3,
	ORANGE = 4,
	GREEN = 5,
	YELLOW = 6
}

const rotate = (list: number[][], direction: "left" | "right") => {
	const newList: number[][] = [[], [], []]

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (direction === "left") {
				newList[i]!.push(list[j]![2 - i]!)
			} else {
				newList[i]!.push(list[2 - j]![i]!)
			}
		}
	}

	return newList
}

class Face {
	public constructor(public center: Colors, public squares: Colors[]) {}
}

class Cube {
	private white: Face = new Face(Colors.WHITE, Array(9).fill(Colors.WHITE))
	private red: Face = new Face(Colors.RED, Array(9).fill(Colors.RED))
	private blue: Face = new Face(Colors.BLUE, Array(9).fill(Colors.BLUE))
	private orange: Face = new Face(Colors.ORANGE, Array(9).fill(Colors.ORANGE))
	private green: Face = new Face(Colors.GREEN, Array(9).fill(Colors.GREEN))
	private yellow: Face = new Face(Colors.YELLOW, Array(9).fill(Colors.YELLOW))
}
