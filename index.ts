import Elysia from "elysia";
import configs from "./types/configs";
import electionsController from "./controllers/elections";

new Elysia({ prefix: configs.baseUrl })
  .use(electionsController)
  .get("/", () => ({ status: "ok" }))
  .listen(configs.port);

console.log(`Listening at http://localhost:${configs.port}`);
