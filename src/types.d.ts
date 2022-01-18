export type iCubeData = iSquare[]

export enum Position {
	TopLeft = "top-left",
	TopCenter = "top-center",
	TopRight = "top-right",
	CenterLeft = "center-left",
	CenterCenter = "center-center",
	CenterRight = "center-right",
	BottomLeft = "bottom-left",
	BottomCenter = "bottom-center",
	BottomRight = "bottom-right"
}

export interface iSquare {
	current: iLocation
	correct: iLocation
}

export interface iLocation {
	position: Position
	direction: Direction
	face: Color
}

export enum Direction {
	FRONT = "front",
	BACK = "back",
	LEFT = "left",
	RIGHT = "right",
	TOP = "top",
	BOTTOM = "bottom"
}

export enum Color {
	RED = "red",
	ORANGE = "orange",
	GREEN = "green",
	BLUE = "blue",
	WHITE = "white",
	YELLOW = "yellow"
}

export interface iVector2D {
	x: number
	y: number
}
