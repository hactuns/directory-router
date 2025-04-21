import { existsSync, readFileSync } from "fs";
import { copyFile, writeFile } from "fs/promises";
import { join } from "path";
import { defaultConfig } from "../configs/app-config";
import { AppConfig } from "../type";

export async function copyEntryServer(config: AppConfig) {
  const { outDir } = config;

  // Determine CLI binary path to copy
  const localBin = join("node_modules", "directory-router", "bin/server.js");
  const fallbackBin = join("bin/server.js");
  const binSource = existsSync(localBin) ? localBin : fallbackBin;
  const binTarget = join(outDir, "server.js");
  await copyFile(binSource, binTarget);
  // Write merged config to `.drrc`
  const rcPath = join(outDir, ".drrc");
  const mergedConfig = { ...defaultConfig, ...config };
  await writeFile(rcPath, JSON.stringify(mergedConfig, null, 2), "utf-8");
}
