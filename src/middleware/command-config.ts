import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import { defaultConfig } from "../configs/app-config";
import { Program } from "../type";

export function withConfig(callback: Program["action"]) {
  return function () {
    const configPath = resolve(process.cwd(), ".drrc");

    try {
      if (!existsSync(configPath)) return {};
      const raw = readFileSync(configPath, "utf-8");
      const config = JSON.parse(raw);

      return callback(Object.assign(defaultConfig, config));
    } catch {
      return callback(defaultConfig);
    }
  };
}
