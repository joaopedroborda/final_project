import { BaseCustomError } from '../base-custom-error'

export class BadResquestError extends BaseCustomError {
	constructor (
		message: string,
		description: string = 'Requisição inválida. Verifique os dados da requisição'
	) {
		super(
			message,
			description,
			400,
			'bad_request'
		)
	}
}