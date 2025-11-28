export { }

declare global {
	type JSONObject = 
        | string
        | number
        | boolean
        | null
        | { [x: string]: JSONObject }
        | JSONObject[];
}