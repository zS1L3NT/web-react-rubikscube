export interface iCubeData {
	front: Color[]
	back: Color[]
	left: Color[]
	right: Color[]
	top: Color[]
	bottom: Color[]
}

export enum Color {
	WHITE = "white",
	RED = "red",
	BLUE = "blue",
	ORANGE = "orange",
	GREEN = "green",
	YELLOW = "yellow"
}

export interface iRotation {
	x: number
	y: number
}

export interface iTranslate {
	x: number
	y: number
	z: number
}
