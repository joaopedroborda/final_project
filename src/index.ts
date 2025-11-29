import { app } from "./main/app";
import { IndexRoute } from './main/routes/index.route'

async function main() {
  app.register(IndexRoute, { prefix: '/'})
  await app.listen({ port: 3000 });

  console.log("Server is running on port 3000 ( http://localhost:3000 )");
}

main();
