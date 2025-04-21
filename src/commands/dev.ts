import { context } from "esbuild";
import { join } from "path";
import { pathToFileURL } from "url";
import { AppConfig } from "../type";
import { getBuildConfig } from "../utils/build-config";
import { copyEntryServer } from "../utils/server";

async function bundleCode(config: AppConfig) {
  const { root, outDir } = config;

  const ctx = await context(getBuildConfig(root, outDir));

  await ctx.watch();
  await copyEntryServer(config);
}

export async function drDev(config: AppConfig) {
  await bundleCode(config);
  await import(pathToFileURL(join(config.outDir, "server.js")).href);
}
