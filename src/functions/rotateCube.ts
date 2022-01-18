import { iVector2D } from "../types"

export default (rotation: iVector2D, direction: "up" | "right" | "down" | "left") => {
	switch (direction) {
		case "up":
			if ([-30, -210, 150, 330].includes(rotation.x % 360)) {
				return { x: rotation.x - 120, y: rotation.y }
			} else {
				return { x: rotation.x - 60, y: rotation.y }
			}
		case "down":
			if ([-330, -150, 30, 210].includes(rotation.x % 360)) {
				return { x: rotation.x + 120, y: rotation.y }
			} else {
				return { x: rotation.x + 60, y: rotation.y }
			}
		case "left":
			if ([-330, -30, 30, 330].includes(rotation.x % 360)) {
				return { x: rotation.x, y: rotation.y + 90 }
			} else {
				return { x: rotation.x, y: rotation.y - 90 }
			}
		case "right":
			if ([-210, -150, 150, 210].includes(rotation.x % 360)) {
				return { x: rotation.x, y: rotation.y + 90 }
			} else {
				return { x: rotation.x, y: rotation.y - 90 }
			}
	}
}
