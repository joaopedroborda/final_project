import { BaseCustomError } from '../base-custom-error'

export class BadRequestError extends BaseCustomError {
	constructor (
		message: string,
		description: string = 'Invalid request. Please check the request details.'
	) {
		super(
			message,
			description,
			400,
			'bad_request'
		)
	}
}