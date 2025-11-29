import { BaseCustomError } from '../base-custom-error'

export class NotFoundError extends BaseCustomError {
	constructor (
		message: string,
		description: string = 'Invalid request. Data not found.',
		tag: string = 'Not found'
	) {
		super(
			message,
			description,
			404,
			'not_found'
		)
	}
}