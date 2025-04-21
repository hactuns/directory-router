import { pathToFileURL } from "url";
import { AppConfig } from "../type";
import { join } from "path";

export async function drStart(config: AppConfig) {
  await import(pathToFileURL(join(config.outDir, "server.js")).href);
}
