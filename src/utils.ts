import { useLocation } from "react-router-dom";
import { Class } from "./typings/interfaces";

export function useQuery() {
	return new URLSearchParams(useLocation().search);
}

// export function shuffle(array: Class[]): Class[] {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// 	return array;
// }

// fisher yates
export function shuffle(array: Class[]): Class[] {
	var a = array.length,
		c: Class,
		i: number;
	while (a) {
		i = Math.floor(Math.random() * a--);
		// if (
		// 	array[i].contains.written === true &&
		// 	array[i].contains.assignments === true &&
		// 	array[i].contains.videos === true
		// ) {
		// 	c = array[a - (Math.floor(Math.random() * a) + 1)];
		// 	console.log(c);
		// 	array[a] = array[i];
		// 	array[i] = c;
		// } else {
			c = array[a];
			array[a] = array[i];
			array[i] = c;
		// }
	}
	return array;
}

export const collegeColors = {
	cornell: "#B31B1B",
	penn: "#011F5B",
	mit: "#8A8B8C",
	caltech: "#FF6C0C",
	waterloo: "#ffd54f",
	harvard: "#A41034",
	yale: "#0f4d92",
	brown: "#381C00",
	berkeley: "#C4820F",
	fayetteville: "#2E63B6",
	washington: "#363C74",
	uiuc: "#0455A4",
	northeastern: "#D41B2C",
	northwestern: "#4E2A84",
	tufts: "#3E8EDE",
	davis: "#B3A369",
	utah: "#CC0000",
	hunter: "#355E3B",
	princeton: "#FF6000",
	stanford: "#8C1515",
	dartmouth: "#00693e",
	carnegiemellon: "#B71E34",
	columbia: "#9BCBEB",
	rpi: "#D6001C",
	nyu: "#57068c",
	utexas: "#BF5700",
	chicago: "#800000",
	riverside: "#2D6CC0",
	georgiatech: "#B3A369",
	utoronto: "#25355A",
	upitt: "#003594",
	michigan: "#FFCB05",
	tomlooman: "#8C1515",
};