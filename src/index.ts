import { CustomError } from './core/errors/custom/base-custom-error'

import { app } from './main/app'

async function main() {
    app.listen( { port: 8000 }  )
}

main()




