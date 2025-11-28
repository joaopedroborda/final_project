import { BaseCustomError } from '../base-custom-error'

export class NotFoundError extends BaseCustomError {
	constructor (
		message: string,
		description: string = 'Requisição inválida. Dados não encontrados',
		tag: string = 'Não encontrado'
	) {
		super(
			message,
			description,
			404,
			'not_found'
		)
	}
}