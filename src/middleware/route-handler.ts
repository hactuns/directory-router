import "dotenv/config";

import { extname, join, resolve } from "path";
import { pathToFileURL } from "url";
import { existsSync } from "fs";
import { AppConfig } from "../type";

function resolveHandlerPath(p: string): string {
  if (extname(p)) return p;

  if (existsSync(p + ".js")) return p + ".js";

  return p;
}

export function routeHandler(_: AppConfig) {
  return async function (...args: any[]) {
    // Todo: get method and url for hono and express
    const method = args[0]?.request?.method?.toUpperCase();
    const url = args[0]?.request?.url;

    const handlerPath = join(__dirname, url);

    console.log(`${method} - ${url} - ${resolveHandlerPath(handlerPath)}`);

    if (!handlerPath) {
      throw new Error("Route Not Found");
    }

    const handlerModule = await import(
      pathToFileURL(resolveHandlerPath(handlerPath)).href
    );

    const handler = handlerModule[method];

    if (!handler) {
      throw new Error("Method Not Available");
    }

    handler(...args);
  };
}
