import { Elysia } from "elysia";
import routes from "./routes";
import websocket from "./websockets";

let app: Elysia | null = null,
  api: Elysia | null = null,
  ws: Elysia | null = null;

if (process.env.PORT) {
  app = new Elysia().use(routes).use(websocket).listen(process.env.PORT);
}

if (process.env.API_PORT) {
  api = new Elysia().use(routes).listen(process.env.API_PORT as string);
}

if (process.env.WS_PORT) {
  ws = new Elysia().use(websocket).listen(process.env.WS_PORT as string);
}

// console.log(!!app, !!api, !!ws);
console.log(
  "🦊 Elysia is running at \n" +
    (app ? `http+ws://${app?.server?.hostname}:${app?.server?.port} \n` : "") +
    (api ? `http://${api?.server?.hostname}:${api?.server?.port} \n` : "") +
    (ws ? `ws://${ws?.server?.hostname}:${ws?.server?.port} \n` : "")
);
